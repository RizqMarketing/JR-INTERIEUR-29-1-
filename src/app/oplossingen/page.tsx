import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Duurzame interieuroplossingen voor overheid en aanbestedingen | JR-Interieur",
  description: "Circulaire kantoorinrichting, refurbished meubilair en herstofferen voor publieke opdrachtgevers.",
};

const solutions = [
  {
    title: "Kantoorinrichting",
    description: "Duurzame kantoorinrichting voor gemeenten, onderwijsinstellingen en andere publieke opdrachtgevers. Onze aanpak sluit aan op aanbestedingen waarin circulariteit en verantwoord materiaalgebruik worden meegewogen.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    href: "/oplossingen/kantoorinrichting",
  },
  {
    title: "Refurbished meubilair",
    description: "Bestaand meubilair reviseren tot technisch en visueel hoogwaardig niveau. Bij uitstek geschikt voor aanbestedingen waarin hergebruik en levensduurverlenging worden gewaardeerd.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    href: "/oplossingen/refurbished-meubilair",
  },
  {
    title: "Circulair inrichten",
    description: "Circulaire beleidsdoelstellingen vertalen naar praktische en uitvoerbare interieuroplossingen. Van hergebruik van bestaand meubilair tot bewuste materiaalkeuzes.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    href: "/oplossingen/circulair-inrichten",
  },
  {
    title: "Duurzaam herstofferen",
    description: "Meubels opnieuw stofferen met slijtvaste en duurzame materialen voor aanzienlijke levensduurverlenging. Voorkomt vervanging en vermindert afvalstromen.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    href: "/oplossingen/duurzaam-herstofferen",
  },
];

const benefits = [
  "Aansluiting op MVI- en circulaire aanbestedingseisen",
  "Aantoonbare verduurzaming van bestaand interieur",
  "Levensduurverlenging door refurbishing en herstofferen",
  "Eén aanspreekpunt van advies tot uitvoering",
  "Praktische, uitvoerbare oplossingen — geen theorie",
  "Kostenbesparend door hergebruik van bestaand meubilair",
];

export default function Oplossingen() {
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
            <div className="max-w-[800px]">
              <span className="inline-block text-[12px] font-medium uppercase tracking-[0.3em] text-white/50 mb-6">
                Oplossingen
              </span>
              <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-light leading-[1.1] uppercase tracking-[0.025em] text-white mb-6">
                DUURZAME <span className="font-bold">INTERIEUROPLOSSINGEN</span> VOOR OVERHEID EN PUBLIEKE ORGANISATIES
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/60 max-w-[600px]">
                Onze oplossingen zijn ontwikkeld voor opdrachtgevers die moeten voldoen aan aanbestedingscriteria op het gebied van duurzaamheid, circulariteit en maatschappelijk verantwoord inkopen (MVI).
              </p>
            </div>
          </div>
        </section>

        {/* Intro + Benefits */}
        <section className="bg-white py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px]">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black mb-8">
                  UITVOERBARE <span className="font-bold">OPLOSSINGEN</span>
                </h2>
                <div className="space-y-6 text-[16px] leading-[1.7] text-[#555555]">
                  <p>
                    Wij leveren geen theoretische plannen, maar uitvoerbare oplossingen met hergebruik, refurbishing en levensduurverlenging van bestaand meubilair.
                  </p>
                  <p>
                    Elke oplossing is gericht op publieke organisaties die concreet willen verduurzamen binnen hun huisvesting en interieurinrichting.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-[#F1F1F1] p-8 md:p-10">
                  <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-6">
                    Waarom JR-Interieur
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

        {/* Solutions Grid */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[120px]">
          <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
            <div className="mb-[40px] md:mb-[60px]">
              <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black">
                ONZE <span className="font-bold">DIENSTEN</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              {solutions.map((solution, index) => (
                <a
                  key={index}
                  href={solution.href}
                  className="group block bg-white overflow-hidden"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-[18px] md:text-[22px] font-bold leading-[1.3] uppercase tracking-[0.025em] text-[#000000] group-hover:text-[#c60019] transition-colors duration-300 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-[#555555] mb-6">
                      {solution.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-wider text-[#000000] group-hover:text-[#c60019] transition-colors">
                      Meer informatie
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                    </span>
                  </div>
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
            <span className="inline-block text-[12px] font-medium uppercase tracking-[0.3em] text-white/50 mb-6">
              Neem contact op
            </span>
            <h2 className="text-[28px] md:text-[48px] font-light uppercase tracking-[0.025em] text-white mb-6">
              Klaar voor <span className="font-bold">interieuradvies?</span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-white/60 max-w-[500px] mx-auto mb-10">
              Benieuwd wat wij kunnen betekenen voor uw organisatie? Neem vrijblijvend contact met ons op voor advies of een offerte.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-4 bg-white px-8 py-5 text-[14px] font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#f5f5f5] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
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
