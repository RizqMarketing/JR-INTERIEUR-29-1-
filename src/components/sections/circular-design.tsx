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
              <span className="font-medium">Circulair</span>
              <span>Meubilair</span>
            </h2>
            
            <div className="space-y-6 text-[16px] font-normal leading-[1.6] text-black">
              <p>
                Van duurzaam kantoormeubilair tot energiezuinige installaties: wij helpen kantoren duurzaam in te richten zonder in te leveren op comfort of uitstraling. Hergebruik van meubilair draagt bij aan een circulaire economie.
              </p>
              <p>
                Wij bieden refurbished meubilair aan dat is opgeknapt tot nieuwstaat. Zo krijgt kwalitatief meubilair een tweede leven en draagt u bij aan een duurzamere wereld.
              </p>
            </div>

            <div className="mt-10">
              <a 
                href="#circulair" 
                className="inline-flex items-center gap-4 bg-white px-6 py-4 text-[14px] font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Ontdek de mogelijkheden
                <ArrowRight className="h-4 w-6" strokeWidth={3} />
              </a>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 aspect-video flex items-center justify-center overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80"
              alt="Duurzaam circulair meubilair"
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
