import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

function About() {
  const { t } = useTranslation();
  return (
  
     <section className="relative w-full py-20 overflow-hidden">

      {/* 🔹 Slanted Background */}
      <div className="
        absolute inset-0 
        bg-[#0072ce]
        -skew-y-3 
        origin-top-left 
        shadow-xl
      "></div>

      <div className="relative container mx-auto px-4 max-w-7xl">

        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
         <span className="text-yellow-300"> Mechnova?</span>
              {t('home.about.title')}  
             
            </h2>

            <p className="text-lg opacity-90 font-semibold mb-4">
              {t('home.about.reason1')}
            </p>

            <p className="text-lg opacity-90 mb-4">
              {t('home.about.reason2')}
            </p>

            <p className="text-lg opacity-90 mb-4">
              {t('home.about.reason3')}
            </p>

            <p className="text-lg opacity-90 font-semibold mb-4">
              {t('home.about.reason4')}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="
              relative w-[360px] h-[360px] md:w-[420px] md:h-[420px]
              rounded-2xl overflow-hidden shadow-2xl
              border-4 border-white/20 backdrop-blur-md
            ">
              <Image
                src="/mechnova/banner/Forestry.webp"
                alt="About Mechnova"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>

  );
}

export default About;
