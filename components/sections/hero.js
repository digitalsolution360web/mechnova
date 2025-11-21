import HeroSlider from "./HeroSlider";
import { useTranslation } from "@/lib/useTranslation";

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="w-full">
        <HeroSlider/>
        <div className="mx-auto px-4 py-8 border-b border-gray-300 max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">{t('home.welcome')} <span className="text-[#0072ce]"> Mechnova</span></h1>
            <p className="text-center text-lg mb-6 max-w-4xl mx-auto text-gray-700">
              {t('home.heroDescription')}
            </p>
            
            {/* Hero Video */}
            <div className="flex justify-center mt-8">
              <div className="relative max-w-4xl w-full">
                <video
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onClick={() => window.open('https://www.youtube.com/watch?v=LXJDFVtQ6-U', '_blank')}
                >
                  <source src="/hero_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play button overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black bg-opacity-50 rounded-full p-4 opacity-80 hover:opacity-100 transition-opacity">
                    <svg 
                      className="w-12 h-12 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div> */}
                
                {/* Click to watch text */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                  Click to watch on YouTube
                </div>
              </div>
            </div>
        </div>
        
    </section>
  );
}

export default Hero;
