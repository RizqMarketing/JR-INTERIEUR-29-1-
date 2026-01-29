import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[720px]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-[80px] py-12 lg:py-0">
          <div className="max-w-[600px]">
            <h1 className="text-[28px] leading-[1.15] md:text-[40px] lg:text-[50px] font-light tracking-[0.025em] uppercase text-black">
              CIRCULAIRE EN <br className="hidden md:block" />
              <span className="font-bold">DUURZAME</span> <br className="hidden md:block" />
              INTERIEURINRICHTING <br className="hidden md:block" />
              VOOR <span className="font-bold">OVERHEID</span> <br className="hidden md:block" />
              EN ORGANISATIES
            </h1>

            <p className="mt-6 lg:mt-8 text-[15px] md:text-[16px] leading-[1.7] text-[#555555] max-w-[520px]">
              JR-Interieur ondersteunt overheden, onderwijsinstellingen en maatschappelijke organisaties bij het duurzaam herinrichten van kantoren en publieke ruimtes.
            </p>

            <div className="mt-8 lg:mt-12">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.08)] group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <span className="text-[14px] font-bold text-black uppercase tracking-wider">
                  Neem contact op
                </span>
                <span className="ml-4 transition-transform duration-300 group-hover:translate-x-1">
                  <svg
                    width="24"
                    height="12"
                    viewBox="0 0 24 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6H23M23 6L18 1M23 6L18 11"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=95"
              alt="Duurzame kantoorinrichting voor overheid en publieke organisaties"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="select-none"
          />
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-0 left-0 w-1/2 h-[1px] bg-[#E0E0E0]" />
    </section>
  );
};

export default HeroSection;
