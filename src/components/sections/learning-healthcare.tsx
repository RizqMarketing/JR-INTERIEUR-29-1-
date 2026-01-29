import React from 'react';
import Image from 'next/image';

const SolutionHighlights = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
        {/* KANTOORINRICHTING */}
        <div className="flex flex-col md:flex-row items-center py-[60px] md:py-[80px] gap-8 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-[32px] md:text-[40px] leading-[1.1] font-light uppercase mb-6 tracking-wide">
              DUURZAME <span className="font-bold">KANTOORINRICHTING</span>
            </h2>
            <p className="text-[#555555] text-[16px] leading-[1.6] mb-8 max-w-[540px]">
              Wij realiseren duurzame kantoorinrichting voor gemeenten, onderwijsinstellingen, zorgorganisaties en andere publieke opdrachtgevers. Onze aanpak sluit aan op aanbestedingen waarin circulariteit, gebruiksduur en verantwoord materiaalgebruik worden meegewogen.
            </p>
            <a
              href="/oplossingen/kantoorinrichting"
              className="group inline-flex items-center bg-[#f1f1f1] px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="text-[14px] font-bold text-black mr-4 tracking-tight">
                Meer over kantoorinrichting
              </span>
              <span className="text-black transition-transform duration-300 group-hover:translate-x-2">
                <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z" fill="black"/>
                </svg>
              </span>
            </a>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80"
                  alt="Duurzame kantoorinrichting voor overheid"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* DUURZAAM HERSTOFFEREN */}
        <div className="flex flex-col md:flex-row items-center py-[60px] md:py-[80px] gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                    alt="Duurzaam herstofferen van meubilair"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[32px] md:text-[40px] leading-[1.1] font-light uppercase mb-6 tracking-wide">
              DUURZAAM <span className="font-bold">HERSTOFFEREN</span>
            </h2>
            <p className="text-[#555555] text-[16px] leading-[1.6] mb-8 max-w-[540px]">
              Duurzaam herstofferen is een effectieve maatregel binnen circulaire aanbestedingen. Door meubels opnieuw te stofferen met slijtvaste en duurzame materialen wordt de levensduur aanzienlijk verlengd. Dit voorkomt vervanging en vermindert afvalstromen.
            </p>
            <a
              href="/oplossingen/duurzaam-herstofferen"
              className="group inline-flex items-center bg-[#f1f1f1] px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="text-[14px] font-bold text-black mr-4 tracking-tight">
                Meer over herstofferen
              </span>
              <span className="text-black transition-transform duration-300 group-hover:translate-x-2">
                <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z" fill="black"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHighlights;
