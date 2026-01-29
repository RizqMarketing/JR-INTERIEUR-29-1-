"use client";

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const utilityLinks = [
    { label: 'Werkwijze', href: '/werkwijze' },
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const mainNavLinks = [
    { label: 'Oplossingen', href: '/oplossingen', hasDropdown: true },
    { label: 'Kantoorinrichting', href: '/oplossingen/kantoorinrichting', hasDropdown: false },
    { label: 'Refurbished meubilair', href: '/oplossingen/refurbished-meubilair', hasDropdown: false },
    { label: 'Circulair inrichten', href: '/oplossingen/circulair-inrichten', hasDropdown: false },
    { label: 'Duurzaam herstofferen', href: '/oplossingen/duurzaam-herstofferen', hasDropdown: false },
  ];

  return (
    <header className="w-full bg-white border-b border-[#E0E0E0] sticky top-0 z-50">
      <div className="flex items-center justify-between h-[50px] pr-4 md:px-12">
        <div className="flex items-center h-full">
          <a href="/" className="bg-[#1a1a1a] px-4 md:px-6 h-[51px] -mb-px flex items-center justify-center md:-ml-12 min-w-[140px] md:min-w-[180px]">
            <span className="text-white font-bold text-[18px] md:text-[24px] tracking-tight">JR-INTERIEUR</span>
          </a>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden xl:flex items-center gap-5">
            {utilityLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-[#555555] hover:text-[#000000] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="/contact"
              className="hidden lg:flex items-center justify-center bg-[#6B8E7B] text-white text-[13px] font-bold px-5 h-[50px] md:-mr-12"
            >
              Contact
            </a>
            <button
              className="p-2 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-[#f1f1f1] hidden lg:block">
        <nav className="flex items-center justify-center h-[55px] px-6">
          <ul className="flex items-center gap-6 xl:gap-8 h-full">
            {mainNavLinks.map((item) => (
              <li key={item.label} className="h-full flex items-center group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 text-[14px] font-normal text-[#555555] hover:text-[#000000] transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={14} strokeWidth={2} className="text-[#555555]" />
                  )}
                </a>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1a1a1a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E0E0E0] w-full left-0 shadow-lg">
          <nav className="py-6 px-6">
            <ul className="space-y-1">
              <li>
                <a href="/" className="block text-[15px] font-medium text-[#000000] py-3 border-b border-[#f1f1f1]">
                  Home
                </a>
              </li>
              <li>
                <a href="/oplossingen" className="block text-[15px] font-medium text-[#000000] py-3 border-b border-[#f1f1f1]">
                  Oplossingen
                </a>
              </li>
              <li>
                <a href="/werkwijze" className="block text-[15px] font-medium text-[#000000] py-3 border-b border-[#f1f1f1]">
                  Werkwijze
                </a>
              </li>
              <li>
                <a href="/over-ons" className="block text-[15px] font-medium text-[#000000] py-3 border-b border-[#f1f1f1]">
                  Over ons
                </a>
              </li>
              <li>
                <a href="/blog" className="block text-[15px] font-medium text-[#000000] py-3 border-b border-[#f1f1f1]">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="block text-[15px] font-bold text-[#6B8E7B] py-3">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
