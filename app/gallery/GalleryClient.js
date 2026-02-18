"use client";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { useTranslation } from "@/lib/useTranslation";
import { useState } from "react";

// 6 images: box 2 (Product Display) = hero-banner.jpg (tiller + statue); rest from public
const GALLERY_ITEMS = [
  { src: "/1", captionKey: "caption1" },
  { src: "/hero/hero-banner.jpg", captionKey: "caption2" }, // Product Display
  { src: "/3", captionKey: "caption3" },
  { src: "/4", captionKey: "caption4" },
  { src: "/5", captionKey: "caption5" },
  { src: "/6", captionKey: "caption6" },
];

function GalleryClient() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="bg-gradient-to-br from-[#E6F2FB] to-[#cbe7ff] min-h-screen">
        <div className="block" style={{ height: "4.5em" }} aria-hidden="true" />
        <section className="container mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0072ce] text-center mb-2">
            {t("gallery.title")}
          </h1>
          <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-12">
            {t("gallery.subtitle")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {GALLERY_ITEMS.map((item, index) => (
              <div key={index} className="flex flex-col">
                <button
                  type="button"
                  className="relative h-64 md:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition focus:outline-none focus:ring-2 focus:ring-[#0072ce] bg-gray-100"
                  onClick={() => setLightbox(index)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={t(`gallery.${item.captionKey}`)}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </button>
                <p className="text-center font-semibold text-gray-800 mt-3 text-lg">
                  {t(`gallery.${item.captionKey}`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
            aria-label="Close"
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white text-3xl hover:opacity-80 z-10"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_ITEMS[lightbox].src}
                alt={t(`gallery.${GALLERY_ITEMS[lightbox].captionKey}`)}
                className="object-contain max-h-[90vh] w-auto mx-auto rounded"
              />
              <p className="text-center text-white mt-2 text-lg">
                {t(`gallery.${GALLERY_ITEMS[lightbox].captionKey}`)}
              </p>
            </div>
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default GalleryClient;
