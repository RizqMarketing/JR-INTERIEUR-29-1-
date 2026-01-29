import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Webshop | Binnenkort Beschikbaar | JR-Interieur",
  description: "Onze webshop is binnenkort beschikbaar. Binnenkort kunt u hier terecht voor hoogwaardig kantoor-, onderwijs- en zorgmeubilair.",
};

export default function WebshopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#1a1a1a] min-h-[80vh] flex items-center justify-center px-6 md:px-8 lg:px-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#333333] opacity-20 rotate-45" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#333333] opacity-20 rotate-12" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-[#6B8E7B] opacity-30 -rotate-12" />

          <div className="relative z-10 max-w-[900px] mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#6B8E7B] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-white text-[12px] font-bold uppercase tracking-wider">
                In ontwikkeling
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-[40px] md:text-[64px] lg:text-[80px] font-light leading-[1.05] uppercase tracking-[0.025em] mb-6 text-white">
              WEBSHOP<br />
              <span className="text-[#6B8E7B]">COMING SOON</span>
            </h1>

            {/* Description */}
            <p className="text-[18px] md:text-[20px] leading-[1.7] text-[#999999] max-w-[600px] mx-auto mb-12">
              Onze nieuwe webshop waar u straks eenvoudig hoogwaardig kantoor-, onderwijs- en zorgmeubilair kunt bestellen.
            </p>

            {/* Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="p-6 border border-[#333333] bg-[#1a1a1a]/50">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[#6B8E7B]">
                  <svg className="w-6 h-6 text-[#6B8E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <h3 className="text-[14px] font-bold uppercase tracking-wider text-white mb-2">
                  Uitgebreid Assortiment
                </h3>
                <p className="text-[14px] text-[#777777] leading-[1.6]">
                  Ontdek onze complete collectie meubels en accessoires
                </p>
              </div>

              <div className="p-6 border border-[#333333] bg-[#1a1a1a]/50">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[#6B8E7B]">
                  <svg className="w-6 h-6 text-[#6B8E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <h3 className="text-[14px] font-bold uppercase tracking-wider text-white mb-2">
                  Snelle Levering
                </h3>
                <p className="text-[14px] text-[#777777] leading-[1.6]">
                  Professionele bezorging door heel Nederland
                </p>
              </div>

              <div className="p-6 border border-[#333333] bg-[#1a1a1a]/50">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[#6B8E7B]">
                  <svg className="w-6 h-6 text-[#6B8E7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-[14px] font-bold uppercase tracking-wider text-white mb-2">
                  Kwaliteitsgarantie
                </h3>
                <p className="text-[14px] text-[#777777] leading-[1.6]">
                  Alleen de beste merken en materialen
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[80px] px-6 md:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-[28px] md:text-[36px] font-light leading-[1.2] uppercase tracking-[0.025em] mb-6 text-black">
                  NIET KUNNEN WACHTEN?
                </h2>
                <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] mb-8">
                  Wij helpen u graag persoonlijk met uw interieurvraagstuk.
                  Neem contact op met onze specialisten voor advies op maat,
                  een offerte of een afspraak in onze showroom.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white text-[14px] font-bold uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    Contact opnemen
                    <span>→</span>
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-[#E0E0E0] text-black text-[14px] font-bold uppercase tracking-wider hover:bg-[#F8F8F8] transition-colors"
                  >
                    Bekijk collectie
                  </Link>
                </div>
              </div>

              {/* Decorative Visual */}
              <div className="relative">
                <div className="relative aspect-[4/3] bg-white border border-[#E0E0E0] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Moderne kantoorinrichting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="text-[12px] font-bold uppercase tracking-wider text-white/70 mb-2">
                      Showroom
                    </p>
                    <p className="text-[18px] md:text-[22px] font-light text-white leading-[1.4]">
                      Bezoek onze showroom en ervaar onze collectie
                    </p>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#6B8E7B] -z-10 hidden md:block" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
