import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Scissors, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Duurzaam herstofferen voor publieke organisaties | JR-Interieur",
  description: "Duurzaam herstofferen voor overheid en aanbestedingen. Circulair herstoffeerwerk dat levensduur verlengt en afval vermindert.",
};

const benefits = [
  "Levensduur van meubilair aanzienlijk verlengd",
  "Slijtvaste en duurzaam geproduceerde materialen",
  "Voorkomt onnodige vervanging van meubilair",
  "Vermindert afvalstromen en CO2-uitstoot",
  "Direct toepasbaar als circulaire aanbestedingsmaatregel",
];

export default function DuurzaamHerstofferen() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[#1a1a1a] py-[60px] md:py-[100px] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80"
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
                DUURZAAM <span className="font-bold">HERSTOFFEREN</span> VOOR PUBLIEKE ORGANISATIES
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/60 max-w-[550px]">
                Een effectieve maatregel binnen circulaire aanbestedingen die de levensduur van meubilair aanzienlijk verlengt.
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
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                    alt="Duurzaam herstofferen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black mb-8">
                  VAKKUNDIG <span className="font-bold">HERSTOFFEERWERK</span>
                </h2>
                <div className="space-y-6 text-[16px] leading-[1.7] text-[#555555]">
                  <p>
                    Duurzaam herstofferen is een effectieve maatregel binnen circulaire aanbestedingen. Door meubels opnieuw te stofferen met slijtvaste en duurzame materialen wordt de levensduur aanzienlijk verlengd.
                  </p>
                  <p>
                    Dit voorkomt vervanging, vermindert afvalstromen en draagt direct bij aan duurzaamheidscriteria. Het is een concrete stap richting circulair interieur zonder concessies aan kwaliteit of comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px]">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black mb-8">
                  WAAROM <span className="font-bold">HERSTOFFEREN?</span>
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} strokeWidth={1.5} className="text-[#6B8E7B] flex-shrink-0 mt-0.5" />
                      <span className="text-[15px] leading-[1.5] text-[#333333]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 gap-[20px]">
                  <div className="bg-white p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-5">
                      <Scissors size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                    </div>
                    <h3 className="text-[16px] font-bold uppercase tracking-[0.025em] text-black mb-3">Vakmanschap</h3>
                    <p className="text-[14px] leading-[1.6] text-[#555555]">Uitvoering door ervaren stoffeerders met oog voor detail en kwaliteit.</p>
                  </div>
                  <div className="bg-white p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-5">
                      <Shield size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                    </div>
                    <h3 className="text-[16px] font-bold uppercase tracking-[0.025em] text-black mb-3">Slijtvaste materialen</h3>
                    <p className="text-[14px] leading-[1.6] text-[#555555]">Wij werken uitsluitend met hoogwaardige, duurzaam geproduceerde stoffen.</p>
                  </div>
                  <div className="bg-white p-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-5">
                      <Sparkles size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                    </div>
                    <h3 className="text-[16px] font-bold uppercase tracking-[0.025em] text-black mb-3">Als nieuw</h3>
                    <p className="text-[14px] leading-[1.6] text-[#555555]">Het eindresultaat oogt en voelt als nieuw, maar met een fractie van de ecologische impact.</p>
                  </div>
                </div>
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
                { title: "Circulair inrichten", href: "/oplossingen/circulair-inrichten" },
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
              Neem vrijblijvend contact met ons op over de mogelijkheden van duurzaam herstofferen.
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
