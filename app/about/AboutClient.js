'use client';
import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/lib/useTranslation'

function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
        <header>
            <Header/>
        </header>

        <main className="bg-white min-h-screen" data-page="about-v2">
            <div className="block" style={{ height: '4.5em' }} aria-hidden="true" />
            {/* Full-width banner */}
            <section className="w-full overflow-hidden">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                    <Image
                        src="/about/about-banner.webp"
                        alt="About Mechnova"
                        fill
                        className="object-cover object-center"
                        sizes="100vw"
                        priority
                    />
                </div>
            </section>
            {/* Hero Section */}
            <section className="w-full bg-white py-14 md:py-20">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0072ce] leading-tight mb-6">
                        {t('about.title')} <span className="text-gray-900">{t('about.companyName')}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        {t('about.heroDescription')}
                    </p>
                    <Link href="/products">
                    <button className="px-8 py-3 bg-[#0072ce] text-white font-semibold rounded-full hover:scale-105 shadow-lg transition-all text-lg border border-blue-100 cursor-pointer">
                        {t('about.exploreProducts')}
                    </button>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl overflow-hidden shadow-xl ring-2 ring-blue-100">
                    <Image
                        src="/about/About2.webp"
                        alt="About Mechnova"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    </div>
                </div>
                </div>
            </section>

            {/* Company Story & Values */}
            <section className="w-full py-16 md:py-20 bg-[#cbe7ff]">
                <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center max-w-6xl">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-xl ring-2 ring-blue-100">
                        <Image
                            src="/about/About2.webp"
                            alt="Mechnova Team"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0072ce] mb-2">{t('about.ourStory')}</h2>
                        <p className="text-lg text-gray-700">
                            {t('about.storyParagraph1')}
                        </p>
                        <p className="text-lg text-gray-700">
                            {t('about.storyParagraph2')}
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 text-base mt-2">
                        <li>{t('about.features.performance')}</li>
                        <li>{t('about.features.satisfaction')}</li>
                        <li>{t('about.features.innovation')}</li>
                        <li>{t('about.features.trusted')}</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="w-full py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center max-w-6xl">
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0072ce] mb-2">{t('about.mission')}</h3>
                        <p className="text-lg md:text-xl text-gray-700">
                            {t('about.missionText')}
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0072ce] mt-8 mb-2">{t('about.vision')}</h3>
                        <p className="text-lg md:text-xl text-gray-700">
                            {t('about.visionText')}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl ring-2 ring-blue-100">
                        <Image
                            src="/about/About3.webp"
                            alt="Mission and Vision"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Mechnova */}
            <section className="w-full py-16 md:py-20 bg-[#cbe7ff]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0072ce]">{t('about.whyChoose')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                        <Image src="https://images.pexels.com/photos/27516984/pexels-photo-27516984.png" alt="Quality" width={96} height={96} className="mb-5 rounded-full object-cover" />
                        <h4 className="font-bold text-xl mb-3 text-[#0072ce]">{t('about.quality.title')}</h4>
                        <p className="text-gray-700">{t('about.quality.description')}</p>
                        </div>
                        <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                        <Image src="https://images.pexels.com/photos/9385078/pexels-photo-9385078.jpeg" alt="Support" width={96} height={96} className="mb-5 rounded-full object-cover" />
                        <h4 className="font-bold text-xl mb-3 text-[#0072ce]">{t('about.support.title')}</h4>
                        <p className="text-gray-700">{t('about.support.description')}</p>
                        </div>
                        <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                        <Image src="https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg" alt="Innovation" width={96} height={96} className="mb-5 rounded-full object-cover" />
                        <h4 className="font-bold text-xl mb-3 text-[#0072ce]">{t('about.innovation.title')}</h4>
                        <p className="text-gray-700">{t('about.innovation.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="w-full py-16 md:py-20 bg-[#0072ce]">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
                    <div className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-0 text-center md:text-left">{t('about.cta')}</div>
                    <Link href="/contact">
                        <button className="px-8 py-4 bg-white text-[#0072ce] font-semibold rounded-full hover:scale-105 shadow-lg transition-all text-lg cursor-pointer">
                        {t('about.ctaButton')}
                        </button>
                    </Link>
                </div>
            </section>
        </main>

        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default AboutPage
