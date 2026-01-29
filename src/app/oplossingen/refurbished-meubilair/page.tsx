import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Wrench, Leaf, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Refurbished meubilair voor aanbestedingen | JR-Interieur",
  description: "Refurbished kantoormeubilair voor overheid en publieke organisaties. Circulair meubilair met aantoonbare duurzaamheidswinst.",
};

const benefits = [
  "Technisch en visueel gereviseerd tot hoogwaardig niveau",
  "Aantoonbare duurzaamheidswinst voor aanbestedingen",
  "Levensduurverlenging van bestaand meubilair",
  "Lagere kosten dan volledig nieuw meubilair",
  "Minder afval en lagere CO2-voetafdruk",
];

export default function RefurbishedMeubilair() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[#1a1a1a] py-[60px] md:py-[100px] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]/70" />
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px] relative z-10">
            <div className="max-w-[700px]">
              <span className="inline-block text-[12px] font-medium uppercase tracking-[0.3em] text-white/50 mb-6">
                Oplossingen
              </span>
              <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-light leading-[1.1] uppercase tracking-[0.025em] text-white mb-6">
                <span className="font-bold">REFURBISHED</span> MEUBILAIR VOOR AANBESTEDINGEN
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/60 max-w-[550px]">
                Bij uitstek geschikt voor aanbestedingen waarin hergebruik en levensduurverlenging worden gewaardeerd.
              </p>
            </div>
          </div>
        </section>

        {/* Content split */}
        <section className="bg-white py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[80px]">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black mb-8">
                  NIEUW LEVEN VOOR <span className="font-bold">BESTAAND MEUBILAIR</span>
                </h2>
                <div className="space-y-6 text-[16px] leading-[1.7] text-[#555555]">
                  <p>
                    Refurbished meubilair is bij uitstek geschikt voor aanbestedingen waarin hergebruik en levensduurverlenging worden gewaardeerd. Wij reviseren bestaand meubilair tot een technisch en visueel hoogwaardig niveau.
                  </p>
                  <p>
                    Deze aanpak ondersteunt circulaire doelstellingen en levert aantoonbare duurzaamheidswinst op. Het resultaat is meubilair dat functioneel en visueel gelijkwaardig is aan nieuw, maar met een aanzienlijk kleinere ecologische voetafdruk.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-[#F1F1F1] p-8 md:p-10">
                  <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-6">
                    Voordelen
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} strokeWidth={1.5} className="text-[#6B8E7B] flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] leading-[1.5] text-[#333333]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="mb-[40px] md:mb-[60px]">
              <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black">
                HET <span className="font-bold">REFURBISH PROCES</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Wrench size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Technische revisie
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Elk meubel wordt grondig gecontroleerd, gerepareerd en waar nodig voorzien van nieuwe onderdelen voor optimale functionaliteit.
                </p>
              </div>
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Leaf size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Duurzame materialen
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Bij herstoffering gebruiken we slijtvaste en duurzaam geproduceerde materialen die de levensduur aanzienlijk verlengen.
                </p>
              </div>
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Award size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Hoogwaardig resultaat
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Het eindresultaat is visueel en functioneel gelijkwaardig aan nieuw meubilair, met aantoonbare circulaire meerwaarde.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image + quote */}
        <section className="bg-white py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[80px]">
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                  <Image
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
                    alt="Refurbished meubilair resultaat"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="border-l-2 border-[#6B8E7B] pl-8">
                  <p className="text-[20px] md:text-[24px] font-light leading-[1.5] text-black italic">
                    &ldquo;Door bestaand meubilair als uitgangspunt te nemen beperken wij verspilling, verlagen we kosten en leveren we aantoonbare verduurzaming.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other solutions */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[80px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <h2 className="text-[20px] md:text-[24px] font-bold uppercase tracking-[0.025em] text-black mb-8">
              Andere oplossingen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {[
                { title: "Kantoorinrichting", href: "/oplossingen/kantoorinrichting" },
                { title: "Circulair inrichten", href: "/oplossingen/circulair-inrichten" },
                { title: "Duurzaam herstofferen", href: "/oplossingen/duurzaam-herstofferen" },
              ].map((item) => (
                <a key={item.title} href={item.href} className="group flex items-center justify-between bg-white p-6 transition-colors hover:bg-[#e5e5e5]">
                  <span className="text-[14px] font-bold uppercase tracking-wider text-black">{item.title}</span>
                  <ArrowRight className="h-4 w-4 text-[#555555] group-hover:text-black transition-all group-hover:translate-x-1" strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-[#1a1a1a] py-[80px] md:py-[120px] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 41px)`
            }} />
          </div>
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px] text-center relative z-10">
            <h2 className="text-[28px] md:text-[48px] font-light uppercase tracking-[0.025em] text-white mb-6">
              Klaar voor <span className="font-bold">interieuradvies?</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-white/60 max-w-[500px] mx-auto mb-10">
              Neem vrijblijvend contact met ons op over de mogelijkheden van refurbished meubilair.
            </p>
            <a href="/contact" className="group inline-flex items-center gap-4 bg-white px-8 py-5 text-[14px] font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#f5f5f5]">
              Neem contact op
              <ArrowRight className="h-4 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
