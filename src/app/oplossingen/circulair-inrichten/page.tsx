import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Recycle, FileCheck, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Circulair inrichten binnen aanbestedingen | JR-Interieur",
  description: "Circulair inrichten voor overheid en publieke organisaties. Praktische interieuroplossingen voor circulaire aanbestedingen.",
};

const principles = [
  "Hergebruik van bestaand meubilair als uitgangspunt",
  "Bewuste materiaalkeuzes bij nieuwe aanschaf",
  "Levensduurverlenging door refurbishing en herstofferen",
  "Aantoonbare bijdrage aan circulaire doelstellingen",
  "Concrete rapportage voor aanbestedingsverantwoording",
];

export default function CirculairInrichten() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[#1a1a1a] py-[60px] md:py-[100px] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
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
                <span className="font-bold">CIRCULAIR</span> INRICHTEN BINNEN AANBESTEDINGEN
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/60 max-w-[550px]">
                Wij vertalen circulaire beleidsdoelstellingen naar praktische en uitvoerbare interieuroplossingen.
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
                  VAN BELEID NAAR <span className="font-bold">PRAKTIJK</span>
                </h2>
                <div className="space-y-6 text-[16px] leading-[1.7] text-[#555555]">
                  <p>
                    Circulair inrichten vormt een belangrijk onderdeel van veel overheidsaanbestedingen. Wij vertalen circulaire beleidsdoelstellingen naar praktische en uitvoerbare interieuroplossingen.
                  </p>
                  <p>
                    Van hergebruik van bestaand meubilair tot bewuste materiaalkeuzes: circulariteit wordt bij ons concreet toegepast.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-[#F1F1F1] p-8 md:p-10">
                  <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-6">
                    Circulaire principes
                  </h3>
                  <ul className="space-y-4">
                    {principles.map((principle, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} strokeWidth={1.5} className="text-[#6B8E7B] flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] leading-[1.5] text-[#333333]">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach cards */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="mb-[40px] md:mb-[60px]">
              <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black">
                HOE WIJ <span className="font-bold">CIRCULARITEIT</span> TOEPASSEN
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Recycle size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Hergebruik
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Bestaand meubilair wordt geïnventariseerd en waar mogelijk hergebruikt. Dit bespaart grondstoffen en vermindert afval.
                </p>
              </div>
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <FileCheck size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Verantwoording
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Wij documenteren circulaire maatregelen zodat u kunt aantonen dat aan aanbestedingscriteria wordt voldaan.
                </p>
              </div>
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Target size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Doelgericht
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Elke maatregel is gericht op concrete verduurzaming. Geen greenwashing, maar aantoonbare resultaten.
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
                { title: "Kantoorinrichting", href: "/oplossingen/kantoorinrichting" },
                { title: "Refurbished meubilair", href: "/oplossingen/refurbished-meubilair" },
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
              Neem vrijblijvend contact met ons op over circulaire interieurinrichting.
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
