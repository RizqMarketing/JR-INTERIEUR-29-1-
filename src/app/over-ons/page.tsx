import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { ArrowRight, Handshake, MessageSquare, TrendingUp, Building2, Recycle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Over JR-Interieur | Betrouwbare partner voor circulaire aanbestedingen",
  description: "JR-Interieur werkt voor overheden en semipublieke organisaties die duurzaamheid concreet willen toepassen in hun huisvesting.",
};

export default function OverOns() {
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
                Over ons
              </span>
              <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-light leading-[1.1] uppercase tracking-[0.025em] text-white mb-6">
                BETROUWBARE PARTNER VOOR <span className="font-bold">CIRCULAIRE AANBESTEDINGEN</span>
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/60 max-w-[550px]">
                JR-Interieur werkt voor overheden en semipublieke organisaties die duurzaamheid concreet willen toepassen in hun huisvesting.
              </p>
            </div>
          </div>
        </section>

        {/* About content */}
        <section className="bg-white py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[80px]">
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="JR-Interieur kantoor"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">JR-Interieur</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black mb-8">
                  WIE <span className="font-bold">WIJ ZIJN</span>
                </h2>
                <div className="space-y-6 text-[16px] leading-[1.7] text-[#555555]">
                  <p>
                    JR-Interieur werkt voor overheden en semipublieke organisaties die duurzaamheid concreet willen toepassen in hun huisvesting. Wij begrijpen aanbestedingsprocessen en weten hoe circulaire ambities vertaald moeten worden naar uitvoerbare oplossingen.
                  </p>
                  <p>
                    Onze kracht ligt in praktisch handelen, duidelijke communicatie en aantoonbare verduurzaming van bestaand interieur. Wij zijn geen adviesbureau, maar een uitvoerende partner die meedenkt en meewerkt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="mb-[40px] md:mb-[60px]">
              <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black">
                ONZE <span className="font-bold">KERNWAARDEN</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Handshake size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Praktisch handelen
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Wij leveren geen theoretische plannen, maar uitvoerbare oplossingen. Van inventarisatie tot realisatie — wij doen wat we zeggen.
                </p>
              </div>
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <MessageSquare size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Duidelijke communicatie
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Korte lijnen en heldere afspraken. U heeft één vast aanspreekpunt en weet altijd waar u aan toe bent.
                </p>
              </div>
              <div className="bg-white p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <TrendingUp size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-4">
                  Aantoonbare verduurzaming
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#555555]">
                  Concrete resultaten die bijdragen aan uw circulaire en duurzaamheidsdoelstellingen. Meetbaar en verantwoordbaar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="bg-white py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="mb-[40px] md:mb-[60px] max-w-[700px]">
              <h2 className="text-[28px] md:text-[40px] font-light leading-[1.1] uppercase tracking-[0.025em] text-black mb-6">
                ONZE <span className="font-bold">EXPERTISE</span>
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#555555]">
                Met kennis van aanbestedingsprocessen en ervaring in de publieke sector bieden wij gerichte oplossingen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              <div className="border border-[#E0E0E0] p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Building2 size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[16px] font-bold uppercase tracking-[0.025em] text-black mb-3">
                  Publieke sector
                </h3>
                <p className="text-[14px] leading-[1.6] text-[#555555]">
                  Gemeenten, onderwijsinstellingen, zorgorganisaties en andere overheidsinstanties.
                </p>
              </div>
              <div className="border border-[#E0E0E0] p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Recycle size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[16px] font-bold uppercase tracking-[0.025em] text-black mb-3">
                  Circulariteit & MVI
                </h3>
                <p className="text-[14px] leading-[1.6] text-[#555555]">
                  Aansluiting op maatschappelijk verantwoord inkopen en circulaire aanbestedingseisen.
                </p>
              </div>
              <div className="border border-[#E0E0E0] p-8 md:p-10">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F1F1F1] mb-6">
                  <Users size={24} strokeWidth={1.5} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-[16px] font-bold uppercase tracking-[0.025em] text-black mb-3">
                  Volledige ontzorging
                </h3>
                <p className="text-[14px] leading-[1.6] text-[#555555]">
                  Van advies en ontwerp tot refurbishing, herstoffering en oplevering. Alles onder één dak.
                </p>
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
              Neem vrijblijvend contact met ons op en ontdek wat JR-Interieur voor uw organisatie kan betekenen.
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
