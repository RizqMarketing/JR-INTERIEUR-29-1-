import React from 'react';
import Image from 'next/image';

const LearningHealthcare = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-8 md:px-[120px]">
        {/* DE LEEROMGEVING */}
        <div className="flex flex-col md:flex-row items-center py-[60px] md:py-[80px] gap-8 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-[32px] md:text-[40px] leading-[1.1] font-light uppercase mb-6 tracking-wide">
              DE <span className="font-bold">WERKOMGEVING</span>
            </h2>
            <p className="text-[#555555] text-[16px] leading-[1.6] mb-8 max-w-[540px]">
              Moderne kantoorinrichting draait om open ruimtes, flexibele werkplekken en technologische innovaties die het werken gemakkelijker en efficiënter maken. Ergonomie, daglicht, akoestiek en looplijnen dragen bij aan het welzijn van uw team en de effectiviteit van uw organisatie.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-[14px] font-bold uppercase tracking-wider group transition-all duration-300 py-3 px-6 bg-[#f1f1f1] hover:bg-[#e0e0e0]"
            >
              Ontdek kantoorinrichting
              <span className="ml-4 text-xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80"
                  alt="De Werkomgeving"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* DE ZORGOMGEVING */}
        <div className="flex flex-col md:flex-row items-center py-[60px] md:py-[80px] gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                    alt="De Zorgomgeving"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[32px] md:text-[40px] leading-[1.1] font-light uppercase mb-6 tracking-wide">
              DE <span className="font-bold">ZORGOMGEVING</span>
            </h2>
            <p className="text-[#555555] text-[16px] leading-[1.6] mb-8 max-w-[540px]">
              In samenwerking met zorgspecialisten, architecten en adviesbureaus implementeren wij nieuwe ontwikkelingen in woon-zorgcentra en ziekenhuizen. Een goed ontworpen zorgomgeving draagt bij aan minder stress en sneller herstel. Wij creëren een plek waar mensen zich welkom voelen, veilig en comfortabel.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-[14px] font-bold uppercase tracking-wider group transition-all duration-300 py-3 px-6 bg-[#f1f1f1] hover:bg-[#e0e0e0]"
            >
              Ontdek zorginrichting
              <span className="ml-4 text-xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningHealthcare;