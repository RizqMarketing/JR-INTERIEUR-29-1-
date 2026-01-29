import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CircularDesign = () => {
  return (
    <section className="bg-[#F1F1F1] py-[60px] md:py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[60px]">
          <div className="w-full lg:w-1/2 max-w-[580px]">
            <h2 className="mb-8 flex flex-wrap items-baseline gap-x-3 text-[32px] md:text-[48px] font-light uppercase leading-[1.2] tracking-normal text-black">
              <span className="font-medium">Refurbished</span>
              <span>Meubilair</span>
            </h2>

            <div className="space-y-6 text-[16px] font-normal leading-[1.6] text-black">
              <p>
                Refurbished meubilair is bij uitstek geschikt voor aanbestedingen waarin hergebruik en levensduurverlenging worden gewaardeerd. Wij reviseren bestaand meubilair tot een technisch en visueel hoogwaardig niveau.
              </p>
              <p>
                Deze aanpak ondersteunt circulaire doelstellingen en levert aantoonbare duurzaamheidswinst op. Door meubels opnieuw te stofferen met slijtvaste en duurzame materialen wordt de levensduur aanzienlijk verlengd.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="/oplossingen/refurbished-meubilair"
                className="inline-flex items-center gap-4 bg-white px-6 py-4 text-[14px] font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Meer over refurbished meubilair
                <ArrowRight className="h-4 w-6" strokeWidth={3} />
              </a>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 aspect-video flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)] hover:-translate-y-1">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80"
                alt="Refurbished circulair meubilair voor overheid"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="absolute top-6 right-6 pointer-events-none opacity-80 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <span className="text-white font-bold text-sm tracking-widest uppercase">JR-Interieur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularDesign;
