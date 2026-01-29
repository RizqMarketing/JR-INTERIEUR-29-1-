import React from 'react';
import Image from 'next/image';

const CollectionGrid = () => {
  return (
    <section id="collectie" className="bg-white py-[60px] md:py-[120px] overflow-hidden">
      <div className="container max-w-[1440px] px-6 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[130px]">

          <div className="w-full lg:w-[45%] flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-[600px] bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Circulaire kantoorinrichting voor overheid"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-[55%]">
            <div className="max-w-[700px]">
              <h2 className="text-[28px] md:text-[48px] font-light leading-[1.1] mb-8 flex items-baseline flex-wrap">
                <span className="text-black tracking-widest mr-3">CIRCULAIR</span>
                <span className="text-black font-bold tracking-widest">& DUURZAAM</span>
              </h2>

              <div className="space-y-6 text-[#555555] text-[16px] leading-[1.6]">
                <p>
                  Wij zijn gespecialiseerd in circulaire kantoorinrichting, refurbished meubilair en duurzaam herstoffeerwerk. Wij sluiten aan op aanbestedingen waarin circulariteit, levensduurverlenging en maatschappelijk verantwoord inkopen (MVI) centraal staan.
                </p>
                <p>
                  Door bestaand meubilair als uitgangspunt te nemen beperken wij verspilling, verlagen we kosten en leveren we aantoonbare verduurzaming. JR-Interieur is een praktische, uitvoerende partner die meedenkt van inventarisatie tot realisatie.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="/oplossingen"
                  className="group inline-flex items-center bg-white px-6 py-4 border border-transparent shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ borderRadius: '0px' }}
                >
                  <span className="text-[14px] font-bold text-black mr-4 tracking-tight">
                    Bekijk onze oplossingen
                  </span>
                  <span className="text-black transition-transform duration-300 group-hover:translate-x-2">
                    <svg
                      width="32"
                      height="8"
                      viewBox="0 0 32 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
