import React from 'react';
import { Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] mt-auto font-sans">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="/" className="text-white font-bold text-[28px] tracking-tight inline-block mb-6">
              JR-INTERIEUR
            </a>
            <p className="text-[15px] leading-[1.7] text-white/60 mb-8 max-w-[320px]">
              Specialist in circulaire kantoorinrichting voor overheid en publieke organisaties.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors"
            >
              Neem contact op
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white mb-6">
                Oplossingen
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="/oplossingen/kantoorinrichting" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Kantoorinrichting
                  </a>
                </li>
                <li>
                  <a href="/oplossingen/refurbished-meubilair" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Refurbished meubilair
                  </a>
                </li>
                <li>
                  <a href="/oplossingen/circulair-inrichten" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Circulair inrichten
                  </a>
                </li>
                <li>
                  <a href="/oplossingen/duurzaam-herstofferen" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Duurzaam herstofferen
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white mb-6">
                Bedrijf
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="/over-ons" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Over ons
                  </a>
                </li>
                <li>
                  <a href="/werkwijze" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Werkwijze
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-[14px] text-white/60 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@jr-interieur.nl" className="flex items-center gap-3 text-[14px] text-white/60 hover:text-white transition-colors">
                  <Mail size={16} strokeWidth={1.5} />
                  info@jr-interieur.nl
                </a>
              </li>
              <li>
                <a href="tel:+31123456789" className="flex items-center gap-3 text-[14px] text-white/60 hover:text-white transition-colors">
                  <Phone size={16} strokeWidth={1.5} />
                  +31 (0)12 345 6789
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-[14px] text-white/60">
                  <MapPin size={16} strokeWidth={1.5} />
                  Nederland
                </span>
              </li>
            </ul>

            {/* LinkedIn */}
            <div className="mt-8">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors border border-white/20 hover:border-white/40 hover:bg-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-[13px] text-white/40">
              &copy; 2026 JR-Interieur. Alle rechten voorbehouden.
            </span>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">
                Algemene voorwaarden
              </a>
              <a href="#" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
