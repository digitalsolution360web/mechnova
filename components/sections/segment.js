'use client';
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";

function Segment() {
  const { t } = useTranslation();

  const segments = [
    {
      title: t('home.segments.gardeningForestry.title'),
      image: "/segment/brush-cutter-grass-cutting-machine.webp",
      link: "/products/",
      desc: t('home.segments.gardeningForestry.description'),
    },
    {
      title: t('home.segments.fumigation.title'),
      image: "/segment/fumigation.webp",
      link: "/products/",
      desc: t('home.segments.fumigation.description'),
    },
    {
      title: t('home.segments.diesel.title'),
      image: "/segment/diesel.webp",
      link: "/products/",
      desc: t('home.segments.diesel.description'),
    },
    {
      title: t('home.segments.domestic.title'),
      image: "/segment/domestic.webp",
      link: "/products/",
      desc: t('home.segments.domestic.description'),
    },
    {
      title: t('home.segments.agroIndustrial.title'),
      image: "/segment/agro-industrial.webp",
      link: "/products/",
      desc: t('home.segments.agroIndustrial.description'),
    },
  ];

  return (
  
     <section className="w-full py-14 bg-white" id="segments">
      <div className="container max-w-7xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          {t('home.segments.title')}
        </h2>
        <p className="text-gray-600 text-lg mt-1 mb-14 text-center">
              {t('home.segments.subpara')}
            </p>
        {/* Zig-Zag Rows */}
        <div className="space-y-16">
          {segments.map((seg, i) => {
            const isReversed = i % 2 !== 0; // alternate rows

            return (
 <div
  key={i}
  className={`flex flex-col md:flex-row items-center gap-10 ${
    i % 2 !== 0 ? "md:flex-row-reverse" : ""
  }`}
>
  {/* IMAGE BLOCK */}
  <div className="w-full md:w-1/2">
    <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={seg.image}
        alt={seg.title}
        fill
        className="object-cover object-center"
      />
    </div>
  </div>

  {/* CONTENT BLOCK */}
  <div className="w-full md:w-1/2">
    <h3 className="text-3xl font-semibold text-gray-900 mb-4">
      {seg.title}
    </h3>

    <p className="text-gray-600 text-lg mb-6">
      {seg.desc}
    </p>

    <Link
      href={seg.link}
      className="inline-block px-6 py-3 text-white bg-[#0072ce] rounded-xl text-base font-medium hover:bg-[#0059a8] transition"
    >
      Explore →
    </Link>
  </div>
</div>


            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Segment;
