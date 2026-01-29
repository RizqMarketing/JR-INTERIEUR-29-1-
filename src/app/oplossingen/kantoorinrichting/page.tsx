import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Building2, Recycle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Duurzame kantoorinrichting voor overheid en publieke sector | JR-Interieur",
  description: "Circulaire kantoorinrichting voor gemeenten, onderwijsinstellingen en publieke opdrachtgevers. Specialist in duurzaam en verantwoord materiaalgebruik.",
};

export default function Kantoorinrichting() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[#1a1a1a] py-[60px] md:py-[100px] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
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
                DUURZAME <span className="font-bold">KANTOORINRICHTING</span> VOOR OVERHEID EN PUBLIEKE SECTOR
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/60 max-w-[550px]">
                Wij realiseren duurzame kantoorinrichting voor gemeenten, onderwijsinstellingen, zorgorganisaties en andere publieke opdrachtgevers.
              </p>
            </div>
          </div>
        </section>

        {/* Content split */}
        <section className="bg-white py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[80px]">
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80"
                    alt="Duurzame kantoorinrichting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black mb-8">
                  CIRCULAIR <span className="font-bold">& FUNCTIONEEL</span>
                </h2>
                <div className="space-y-6 text-[16px] leading-[1.7] text-[#555555]">
                  <p>
                    Onze aanpak sluit aan op aanbestedingen waarin circulariteit, gebruiksduur en verantwoord materiaalgebruik worden meegewogen.
                  </p>
                  <p>
                    Door slim gebruik te maken van bestaand en refurbished meubilair realiseren we functionele werkplekken met een lagere milieu-impact. Zo combineren wij duurzaamheid met een professionele en comfortabele werkomgeving.
                  </p>
                </div>
                <div className="mt-10">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-4 bg-[#1a1a1a] px-8 py-5 text-[14px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-black"
                  >
                    Vraag advies aan
                    <ArrowRight className="h-4 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="mb-[40px] md:mb-[60px]">
              <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black">
                ONZE <span className="font-bold">AANPAK</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Building2 size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Publieke sector
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Specifiek gericht op gemeenten, onderwijsinstellingen en zorgorganisaties. Wij begrijpen de eisen van publieke aanbestedingen.
                </p>
              </div>
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Recycle size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Circulair materiaalgebruik
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Bestaand meubilair als uitgangspunt. Aangevuld met refurbished en duurzaam geproduceerde nieuwe items waar nodig.
                </p>
              </div>
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Users size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Eén aanspreekpunt
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Van inventarisatie tot oplevering: u heeft één vast contactpersoon die het gehele proces begeleidt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other solutions */}
        <section className="bg-white py-[60px] md:py-[80px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <h2 className="text-[20px] md:text-[24px] font-bold uppercase tracking-[0.025em] text-black mb-8">
              Andere oplossingen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {[
                { title: "Refurbished meubilair", href: "/oplossingen/refurbished-meubilair" },
                { title: "Circulair inrichten", href: "/oplossingen/circulair-inrichten" },
                { title: "Duurzaam herstofferen", href: "/oplossingen/duurzaam-herstofferen" },
              ].map((item) => (
                <a key={item.title} href={item.href} className="group flex items-center justify-between bg-[#F1F1F1] p-6 transition-colors hover:bg-[#e5e5e5]">
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
              Neem vrijblijvend contact met ons op voor een adviesgesprek over duurzame kantoorinrichting.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-4 bg-white px-8 py-5 text-[14px] font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#f5f5f5]"
            >
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
