import React from 'react';
import Image from 'next/image';

const SolutionHighlights = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-8 md:px-[120px]">
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
              className="inline-flex items-center text-[14px] font-bold uppercase tracking-wider group transition-all duration-300 py-3 px-6 bg-[#f1f1f1] hover:bg-[#e0e0e0]"
            >
              Meer over kantoorinrichting
              <span className="ml-4 text-xl transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                <Image
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80"
                  alt="Duurzame kantoorinrichting voor overheid"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
          </div>
        </div>

        {/* DUURZAAM HERSTOFFEREN */}
        <div className="flex flex-col md:flex-row items-center py-[60px] md:py-[80px] gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                    alt="Duurzaam herstofferen van meubilair"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
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
              className="inline-flex items-center text-[14px] font-bold uppercase tracking-wider group transition-all duration-300 py-3 px-6 bg-[#f1f1f1] hover:bg-[#e0e0e0]"
            >
              Meer over herstofferen
              <span className="ml-4 text-xl transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHighlights;
