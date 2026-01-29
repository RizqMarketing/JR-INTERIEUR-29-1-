import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { icon: <Twitter size={18} />, href: "#", name: "Twitter" },
    { icon: <Facebook size={18} />, href: "#", name: "Facebook" },
    { icon: <Instagram size={18} />, href: "#", name: "Instagram" },
    { icon: <Linkedin size={18} />, href: "#", name: "LinkedIn" },
  ];

  const footerLinks = [
    {
      title: "Oplossingen",
      links: [
        { label: "Kantoorinrichting", href: "/oplossingen/kantoorinrichting" },
        { label: "Refurbished meubilair", href: "/oplossingen/refurbished-meubilair" },
        { label: "Circulair inrichten", href: "/oplossingen/circulair-inrichten" },
        { label: "Duurzaam herstofferen", href: "/oplossingen/duurzaam-herstofferen" },
      ],
      secondarySection: {
        title: "Werkwijze",
        links: [
          { label: "Onze werkwijze", href: "/werkwijze" },
        ]
      }
    },
    {
      title: "Over ons",
      links: [
        { label: "Over JR-Interieur", href: "/over-ons" },
      ],
      secondarySection: {
        title: "Informatie",
        links: [
          { label: "Blog", href: "/blog" },
        ]
      }
    },
    {
      title: "Contact",
      links: [
        { label: "Neem contact op", href: "/contact" },
      ],
      secondarySection: {
        title: "Adres",
        links: [
          { label: "Nederland", href: "#" },
        ]
      }
    },
  ];

  return (
    <footer className="bg-[#F1F1F1] mt-auto font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          {footerLinks.map((column, idx) => (
            <div key={idx} className="flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col gap-4">
                <h4 className="text-[14px] font-bold uppercase tracking-wider text-black">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[14px] text-[#555555] hover:text-[#C60019] transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-[14px] font-bold uppercase tracking-wider text-black">
                  {column.secondarySection.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {column.secondarySection.links?.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[14px] text-[#555555] hover:text-[#1a1a1a] transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1a1a1a] py-8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <a href="/" className="text-white font-bold text-[22px] md:text-[26px] tracking-tight">
              JR-INTERIEUR
            </a>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors border border-white/20 hover:border-white/40"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-8 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-[12px] text-white/50">&copy; 2026 JR-Interieur. Alle rechten voorbehouden.</span>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                <a href="#" className="text-[12px] text-white/50 hover:text-white transition-colors">
                  Algemene voorwaarden
                </a>
                <a href="#" className="text-[12px] text-white/50 hover:text-white transition-colors">
                  Privacy & Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
