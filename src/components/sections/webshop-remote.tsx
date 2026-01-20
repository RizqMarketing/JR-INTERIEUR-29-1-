import React from 'react';
import Image from 'next/image';

export default function WebshopRemoteSection() {
  const assets = {
    remoteWorking: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1200&q=90"
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container max-w-[1280px] px-6 md:px-8 mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="aspect-[3/2] relative overflow-hidden">
              <Image
                src={assets.remoteWorking}
                alt="Ergonomische thuiswerkplek"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="text-[15px] text-[#888888] font-medium mb-4 italic">
              Faciliteer een ergonomische thuiswerkplek voor uw medewerkers.
            </div>
            <h2 className="text-[32px] md:text-[48px] font-light leading-[1.15] mb-6 uppercase tracking-wide text-black">
              <span className="font-bold">FLEXIBEL</span> WERKEN
            </h2>
            <p className="text-[17px] leading-[1.8] text-[#555555] mb-8">
              We werken steeds vaker hybride. Een optimale werkplek is ergonomisch verantwoord én functioneel, zowel thuis als op kantoor. Voor meerdere gebruikers plaatsen wij proef-stoelen op locatie met zitinstructie, zodat iedereen de best passende stoel kan bepalen. Gratis bezorging en installatie inbegrepen.
            </p>
            <div className="relative group inline-block">
              <a 
                href="#flexibel-werken" 
                className="inline-flex items-center text-[14px] font-bold uppercase tracking-widest text-black border-b border-[#e0e0e0] pb-2 pr-10 transition-all duration-300 hover:border-black group"
              >
                Ontdek flexwerkoplossingen
                <span className="absolute right-0 top-1/2 -translate-y-[calc(50%+4px)] transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="28" height="10" viewBox="0 0 45 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H43M43 6L38 1M43 6L38 11" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
