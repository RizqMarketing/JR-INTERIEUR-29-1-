import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HighlightedProducts = () => {
  return (
    <section className="relative bg-[#1a1a1a] py-[80px] md:py-[140px] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            white 40px,
            white 41px
          )`
        }} />
      </div>

      {/* Accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[60px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1440px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="inline-block text-[12px] font-medium uppercase tracking-[0.3em] text-white/50 mb-6">
              Neem contact op
            </span>

            <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-light uppercase leading-[1.05] tracking-[0.02em] text-white mb-6">
              Klaar voor
              <br />
              <span className="font-bold">interieuradvies?</span>
            </h2>

            <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/60 max-w-[480px] mx-auto lg:mx-0 mb-10">
              Benieuwd wat wij kunnen betekenen voor uw organisatie? Neem vrijblijvend contact met ons op voor advies of een offerte.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-4 bg-white px-8 py-5 text-[14px] font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#f5f5f5] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                Neem contact op
                <ArrowRight className="h-4 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
              </a>

              <a
                href="tel:+31123456789"
                className="group inline-flex items-center gap-3 px-6 py-4 text-[14px] font-medium text-white/70 transition-all duration-300 hover:text-white"
              >
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <span>Of bel direct</span>
              </a>
            </div>
          </div>

          {/* Right image with decorative elements */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* Main image */}
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=85"
                alt="Duurzame kantoorinrichting door JR-Interieur"
                fill
                className="object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-[100px] h-[100px]">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-white/30" />
                <div className="absolute top-0 right-0 h-full w-[1px] bg-white/30" />
              </div>

              {/* Brand badge */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm px-4 py-2">
                <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">JR-Interieur</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[60px] bg-gradient-to-t from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default HighlightedProducts;
