"use client";
import Image from "next/image";
import Link from "next/link";
import homeProducts from "../../data/homeProducts.json";
import { useEffect, useRef } from "react";
import { useTranslation } from "@/lib/useTranslation";

function chunkProducts(data, chunkSize) {
  // Returns an array of arrays, each containing one product from each category
  const result = [];
  let i = 0;
  while (i < data[0].products.length) {
    const chunk = [];
    for (let cat = 0; cat < data.length; cat++) {
      if (data[cat].products[i]) {
        chunk.push({ ...data[cat].products[i], category: data[cat].category });
      }
    }
    if (chunk.length) result.push(chunk);
    i++;
  }
  return result;
}

function Products() {
  const { t } = useTranslation();
  const chunks = chunkProducts(homeProducts, 1);
  const flatProducts = chunks.flat();
  const repeatedProducts = [...flatProducts, ...flatProducts, ...flatProducts];
  const sliderRef = useRef(null);
  const animationRef = useRef();
  const pausedRef = useRef(false);
  const lastTimestampRef = useRef();

  useEffect(() => {
    if (!sliderRef.current || repeatedProducts.length === 0) return;
    const speed = 0.1; // px per ms
    const slider = sliderRef.current;

    function step(timestamp) {
      if (pausedRef.current) {
        lastTimestampRef.current = undefined;
        animationRef.current = requestAnimationFrame(step);
        return;
      }
      if (lastTimestampRef.current === undefined) {
        lastTimestampRef.current = timestamp;
      }
      const elapsed = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;
      slider.scrollLeft += speed * elapsed;
      const totalWidth = slider.scrollWidth / 3;
      if (slider.scrollLeft >= totalWidth * 2) {
        slider.scrollLeft = totalWidth;
      }
      animationRef.current = requestAnimationFrame(step);
    }
    const totalWidth = slider.scrollWidth / 3;
    slider.scrollLeft = totalWidth;
    animationRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationRef.current);
  }, [repeatedProducts]);

  // Pause/resume scroll on hover
  function handleMouseEnter() {
    pausedRef.current = true;
  }
  function handleMouseLeave() {
    pausedRef.current = false;
  }

  return (

     <section className="w-full py-8 bg-white" id="products">
      <div className="container mx-auto ">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">{t('home.products.title')}</h2>
        <div
          ref={sliderRef}
          className="overflow-x-hidden overflow-y-hidden scrollbar-hide flex gap-6"
          style={{ scrollBehavior: "auto", WebkitOverflowScrolling: "touch" }}
        >
          {repeatedProducts.map((prod, idx) => (
          <Link
          href={prod.link}
          key={prod.name + idx}
          className="group bg-white rounded-2xl shadow-lg min-w-[17rem] overflow-hidden hover:scale-95 transition-transform duration-300 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

          {/* IMAGE SECTION */}
          <div className="relative w-full h-68">
            <Image
              src={prod.image}
              alt={prod.name}
              fill
              className="object-cover"
            />

          
          </div>

          {/* CONTENT AREA */}
          <div className="bg-[#0a1a2a] px-5 py-5 text-center">
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300">
              {prod.name}
            </h3>

            <p className="text-sm text-gray-300 mt-1">
              {prod.category}
            </p>
          </div>

        </Link>

          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/products">
          <button className="px-8 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow transition-all text-xl border border-blue-100 cursor-pointer">
            {t('home.products.exploreAll')}
          </button>
        </Link>
      </div>
    </section>

  );
}

export default Products;
