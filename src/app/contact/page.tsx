import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Neem contact op | JR-Interieur",
  description: "Neem vrijblijvend contact op met JR-Interieur voor advies over circulaire kantoorinrichting, refurbished meubilair of herstofferen.",
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero with background image */}
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
                Contact
              </span>
              <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-light leading-[1.1] uppercase tracking-[0.025em] text-white mb-6">
                NEEM <span className="font-bold">CONTACT</span> OP
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-white/60 max-w-[520px]">
                Benieuwd wat wij kunnen betekenen voor uw organisatie? Neem vrijblijvend contact met ons op voor advies of een offerte.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content: Form + Info */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[120px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[60px]">

              {/* Left: Contact Form */}
              <div className="w-full lg:w-[60%]">
                <div className="bg-white p-8 md:p-12">
                  <h2 className="text-[20px] md:text-[24px] font-bold uppercase tracking-[0.025em] text-black mb-2">
                    Stuur een bericht
                  </h2>
                  <p className="text-[14px] leading-[1.6] text-[#555555] mb-8">
                    Vul onderstaand formulier in en wij nemen zo snel mogelijk contact met u op.
                  </p>

                  <form>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="naam" className="block text-[13px] font-bold uppercase tracking-wider text-black mb-2">
                            Naam *
                          </label>
                          <input
                            type="text"
                            id="naam"
                            name="naam"
                            required
                            className="w-full px-4 py-3 border border-[#E0E0E0] text-[15px] text-black bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                            placeholder="Uw volledige naam"
                          />
                        </div>
                        <div>
                          <label htmlFor="organisatie" className="block text-[13px] font-bold uppercase tracking-wider text-black mb-2">
                            Organisatie
                          </label>
                          <input
                            type="text"
                            id="organisatie"
                            name="organisatie"
                            className="w-full px-4 py-3 border border-[#E0E0E0] text-[15px] text-black bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                            placeholder="Naam van uw organisatie"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-[13px] font-bold uppercase tracking-wider text-black mb-2">
                            E-mailadres *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-[#E0E0E0] text-[15px] text-black bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                            placeholder="uw@email.nl"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefoon" className="block text-[13px] font-bold uppercase tracking-wider text-black mb-2">
                            Telefoonnummer
                          </label>
                          <input
                            type="tel"
                            id="telefoon"
                            name="telefoon"
                            className="w-full px-4 py-3 border border-[#E0E0E0] text-[15px] text-black bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                            placeholder="Uw telefoonnummer"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="onderwerp" className="block text-[13px] font-bold uppercase tracking-wider text-black mb-2">
                          Onderwerp
                        </label>
                        <select
                          id="onderwerp"
                          name="onderwerp"
                          className="w-full px-4 py-3 border border-[#E0E0E0] text-[15px] text-black bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors appearance-none"
                        >
                          <option value="">Selecteer een onderwerp</option>
                          <option value="kantoorinrichting">Kantoorinrichting</option>
                          <option value="refurbished">Refurbished meubilair</option>
                          <option value="circulair">Circulair inrichten</option>
                          <option value="herstofferen">Duurzaam herstofferen</option>
                          <option value="aanbesteding">Aanbesteding / offerte</option>
                          <option value="overig">Overig</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="bericht" className="block text-[13px] font-bold uppercase tracking-wider text-black mb-2">
                          Bericht *
                        </label>
                        <textarea
                          id="bericht"
                          name="bericht"
                          rows={6}
                          required
                          className="w-full px-4 py-3 border border-[#E0E0E0] text-[15px] text-black bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors resize-vertical"
                          placeholder="Beschrijf uw vraag of project..."
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="group inline-flex items-center gap-4 bg-[#1a1a1a] px-8 py-5 text-[14px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
                        >
                          Verstuur bericht
                          <ArrowRight className="h-4 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right: Contact Info */}
              <div className="w-full lg:w-[40%] flex flex-col gap-[30px]">
                {/* Direct Contact */}
                <div className="bg-white p-8 md:p-10">
                  <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-6">
                    Direct contact
                  </h3>
                  <div className="space-y-5">
                    <a href="tel:+31123456789" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#F1F1F1] flex-shrink-0">
                        <Phone size={18} strokeWidth={1.5} className="text-[#1a1a1a]" />
                      </div>
                      <div>
                        <span className="block text-[13px] font-bold uppercase tracking-wider text-[#555555] mb-1">Telefoon</span>
                        <span className="text-[15px] text-black group-hover:text-[#c60019] transition-colors">+31 (0)12 345 6789</span>
                      </div>
                    </a>
                    <a href="mailto:info@jr-interieur.nl" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#F1F1F1] flex-shrink-0">
                        <Mail size={18} strokeWidth={1.5} className="text-[#1a1a1a]" />
                      </div>
                      <div>
                        <span className="block text-[13px] font-bold uppercase tracking-wider text-[#555555] mb-1">E-mail</span>
                        <span className="text-[15px] text-black group-hover:text-[#c60019] transition-colors">info@jr-interieur.nl</span>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#F1F1F1] flex-shrink-0">
                        <MapPin size={18} strokeWidth={1.5} className="text-[#1a1a1a]" />
                      </div>
                      <div>
                        <span className="block text-[13px] font-bold uppercase tracking-wider text-[#555555] mb-1">Adres</span>
                        <span className="text-[15px] text-black leading-[1.5]">Nederland</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Beschikbaarheid */}
                <div className="bg-white p-8 md:p-10">
                  <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-black mb-6">
                    Beschikbaarheid
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#F1F1F1] flex-shrink-0">
                      <Clock size={18} strokeWidth={1.5} className="text-[#1a1a1a]" />
                    </div>
                    <div>
                      <div className="space-y-2 text-[15px] text-black">
                        <div className="flex justify-between gap-6">
                          <span>Maandag - Vrijdag</span>
                          <span className="text-[#555555]">08:30 - 17:00</span>
                        </div>
                        <div className="flex justify-between gap-6">
                          <span>Zaterdag - Zondag</span>
                          <span className="text-[#555555]">Gesloten</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick CTA */}
                <div className="bg-[#1a1a1a] p-8 md:p-10">
                  <h3 className="text-[18px] font-bold uppercase tracking-[0.025em] text-white mb-4">
                    Liever direct bellen?
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-white/60 mb-6">
                    Wij staan u graag persoonlijk te woord over uw interieurvraagstuk.
                  </p>
                  <a
                    href="tel:+31123456789"
                    className="group inline-flex items-center gap-3 text-white text-[14px] font-bold uppercase tracking-wider"
                  >
                    <span className="w-10 h-10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/5">
                      <Phone size={16} strokeWidth={1.5} />
                    </span>
                    <span className="group-hover:text-white/80 transition-colors">+31 (0)12 345 6789</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
