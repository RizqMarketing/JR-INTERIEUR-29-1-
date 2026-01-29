import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { ArrowRight, ClipboardList, PenTool, Wrench, CheckSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Onze werkwijze | JR-Interieur",
  description: "Van inventarisatie tot realisatie. Ontdek onze werkwijze voor circulaire interieurinrichting bij overheid en publieke organisaties.",
};

const steps = [
  {
    number: "01",
    icon: <ClipboardList size={28} strokeWidth={1.5} />,
    title: "Inventarisatie",
    description: "We brengen wensen, doelen en bestaande meubels in kaart. Zo krijgen we een helder beeld van de huidige situatie en de mogelijkheden voor hergebruik en verduurzaming.",
    details: "We analyseren het huidige interieur, beoordelen de staat van bestaand meubilair en inventariseren welke items geschikt zijn voor hergebruik, refurbishing of herstoffering.",
  },
  {
    number: "02",
    icon: <PenTool size={28} strokeWidth={1.5} />,
    title: "Advies & ontwerp",
    description: "Op basis van de inventarisatie maken we een praktisch ontwerp met focus op circulariteit. We adviseren over hergebruik, refurbishing en aanvulling met duurzame materialen.",
    details: "Ons ontwerp sluit aan op de eisen van uw aanbesteding. We maken inzichtelijk welke circulaire maatregelen worden toegepast en wat dit oplevert aan duurzaamheidswinst.",
  },
  {
    number: "03",
    icon: <Wrench size={28} strokeWidth={1.5} />,
    title: "Refurbish & herstofferen",
    description: "Uitvoering in eigen beheer of met vaste partners. Bestaand meubilair wordt vakkundig gerefurbished en herstoffeerd tot een technisch en visueel hoogwaardig niveau.",
    details: "We werken uitsluitend met slijtvaste en duurzaam geproduceerde materialen. Elk meubel wordt grondig gecontroleerd en waar nodig voorzien van nieuwe onderdelen.",
  },
  {
    number: "04",
    icon: <CheckSquare size={28} strokeWidth={1.5} />,
    title: "Realisatie",
    description: "Montage, inrichting en oplevering. We zorgen voor een naadloze uitvoering en leveren het eindresultaat op volgens afspraak.",
    details: "Na oplevering evalueren we het resultaat en zorgen we voor documentatie die u kunt gebruiken voor de verantwoording van circulaire maatregelen.",
  },
];

export default function Werkwijze() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[#1a1a1a] py-[60px] md:py-[100px] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
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
                Werkwijze
              </span>
              <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-light leading-[1.1] uppercase tracking-[0.025em] text-white mb-6">
                ONZE <span className="font-bold">WERKWIJZE</span>
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/60 max-w-[550px]">
                Heldere communicatie en korte lijnen staan centraal in onze aanpak. Van het eerste gesprek tot de oplevering werken we gestructureerd en transparant.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-white py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={step.number} className={`flex flex-col md:flex-row gap-8 md:gap-16 py-[40px] md:py-[60px] ${index < steps.length - 1 ? 'border-b border-[#E0E0E0]' : ''}`}>
                  <div className="md:w-[200px] flex-shrink-0 flex items-start gap-6">
                    <span className="text-[56px] md:text-[72px] font-light text-[#E0E0E0] leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1]">
                        {step.icon}
                      </div>
                      <h2 className="text-[20px] md:text-[28px] font-bold uppercase tracking-[0.025em] text-black">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-[16px] leading-[1.7] text-[#555555] mb-4 max-w-[600px]">
                      {step.description}
                    </p>
                    <p className="text-[15px] leading-[1.7] text-[#777777] max-w-[600px]">
                      {step.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary strip */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[80px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full lg:w-2/3">
                <h2 className="text-[24px] md:text-[32px] font-light leading-[1.2] uppercase tracking-[0.025em] text-black mb-4">
                  KORTE LIJNEN, <span className="font-bold">HELDER RESULTAAT</span>
                </h2>
                <p className="text-[16px] leading-[1.7] text-[#555555] max-w-[600px]">
                  Gedurende het hele traject bent u in contact met één vast aanspreekpunt. Wij houden u op de hoogte van de voortgang en stemmen tussentijds af waar nodig. Zo weet u altijd waar u aan toe bent.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-4 bg-[#1a1a1a] px-8 py-5 text-[14px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-black"
                >
                  Start een gesprek
                  <ArrowRight className="h-4 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                </a>
              </div>
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
              Neem vrijblijvend contact met ons op en ontdek hoe wij uw interieur duurzaam kunnen herinrichten.
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
