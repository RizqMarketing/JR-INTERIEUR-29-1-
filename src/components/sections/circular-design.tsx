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
                className="group inline-flex items-center bg-white px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-[14px] font-bold text-black mr-4 tracking-tight">
                  Meer over refurbished meubilair
                </span>
                <span className="text-black transition-transform duration-300 group-hover:translate-x-2">
                  <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z" fill="black"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 aspect-video flex items-center justify-center overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80"
              alt="Refurbished circulair meubilair voor overheid"
              fill
              className="object-cover"
            />

            <div className="absolute top-6 right-6 pointer-events-none opacity-80">
              <span className="text-white font-bold text-sm tracking-widest uppercase">JR-Interieur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularDesign;
