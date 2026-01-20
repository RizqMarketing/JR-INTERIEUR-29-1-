import React from 'react';
import Image from 'next/image';

const EducationLinks: React.FC = () => {
  const educationData = [
    {
      title: 'Kantoorinrichting',
      dutchTitle: 'KANTOOR',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      link: '#',
    },
    {
      title: 'Onderwijsinrichting',
      dutchTitle: 'ONDERWIJS',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
      link: '#',
    },
    {
      title: 'Zorginrichting',
      dutchTitle: 'ZORG',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      link: '#',
    },
  ];

  return (
    <section className="bg-white py-[60px] md:py-[120px]">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="mb-[40px] md:mb-[60px] text-center">
          <h2 className="text-[28px] md:text-[48px] font-light leading-[1.2] uppercase tracking-[0.025em] text-[#000000]">
            ONZE SECTOREN
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {educationData.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="group block overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden mb-[25px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-[16px] md:text-[18px] font-bold leading-[1.4] uppercase tracking-[0.05em] text-[#000000] group-hover:text-[#c60019] transition-colors duration-300">
                  {item.dutchTitle}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationLinks;
