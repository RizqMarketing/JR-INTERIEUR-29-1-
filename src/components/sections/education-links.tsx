import React from 'react';
import { Building2, FileCheck, Recycle, UserCheck, ArrowRight } from 'lucide-react';

const uspItems = [
  {
    icon: <Building2 size={32} strokeWidth={1.5} />,
    title: 'Gericht op overheid en publieke sector',
    description: 'Wij werken uitsluitend voor overheden, onderwijsinstellingen en maatschappelijke organisaties.',
  },
  {
    icon: <FileCheck size={32} strokeWidth={1.5} />,
    title: 'Aansluiting op MVI- en circulaire aanbestedingseisen',
    description: 'Onze oplossingen sluiten direct aan op de eisen binnen publieke aanbestedingen.',
  },
  {
    icon: <Recycle size={32} strokeWidth={1.5} />,
    title: 'Refurbished en herstofferen als aantoonbare maatregel',
    description: 'Levensduurverlenging van bestaand meubilair als concrete verduurzamingsstap.',
  },
  {
    icon: <UserCheck size={32} strokeWidth={1.5} />,
    title: 'Eén aanspreekpunt voor advies en uitvoering',
    description: 'Van inventarisatie tot realisatie: één praktische, uitvoerende partner.',
  },
];

const UspBlocks: React.FC = () => {
  return (
    <section className="bg-[#F1F1F1] py-[60px] md:py-[120px]">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {uspItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 flex flex-col gap-5"
            >
              <div className="text-[#1a1a1a]">
                {item.icon}
              </div>
              <h3 className="text-[16px] md:text-[18px] font-bold leading-[1.4] uppercase tracking-[0.025em] text-[#000000]">
                {item.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#555555]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-[50px] md:mt-[70px] flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/oplossingen"
            className="group inline-flex items-center gap-4 bg-[#1a1a1a] px-8 py-5 text-[14px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-black"
          >
            Bekijk onze oplossingen
            <ArrowRight className="h-4 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
          <a
            href="/contact"
            className="group inline-flex items-center gap-4 bg-white border border-[#E0E0E0] px-8 py-5 text-[14px] font-bold uppercase tracking-wider text-[#1a1a1a] transition-all duration-300 hover:bg-[#f5f5f5]"
          >
            Neem contact op
            <ArrowRight className="h-4 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default UspBlocks;
