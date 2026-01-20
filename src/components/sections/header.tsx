"use client";

import React, { useState } from 'react';
import { Search, Globe, ChevronDown, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const utilityLinks = [
    { label: 'Over ons', href: '#' },
    { label: 'Webshop', href: '/webshop' },
    { label: 'Blog', href: '/blog' },
    { label: 'Showroom', href: '#' },
  ];

  const mainNavLinks = [
    { label: 'Circulair interieur', hasDropdown: true },
    { label: 'Onderwijs', hasDropdown: true },
    { label: 'Zorg', hasDropdown: false },
    { label: 'Kantoor', hasDropdown: true },
    { label: 'Producten', hasDropdown: true },
    { label: 'Projecten', hasDropdown: true },
    { label: 'Diensten', hasDropdown: true },
  ];

  return (
    <header className="w-full bg-white border-b border-[#E0E0E0] sticky top-0 z-50">
      <div className="flex items-center justify-between h-[50px] px-4 md:px-12">
        <div className="flex items-center h-full">
<a href="/" className="bg-[#1a1a1a] px-4 md:px-6 h-[50px] flex items-center justify-center md:-ml-12 min-w-[140px] md:min-w-[180px]">
              <span className="text-white font-bold text-[18px] md:text-[24px] tracking-tight">JR-Interieur</span>
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
            <button className="relative p-2">
              <ShoppingCart size={18} strokeWidth={1.5} className="text-[#000000]" />
              <span className="absolute top-0 right-0 bg-[#f1f1f1] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-[#E0E0E0]">
                0
              </span>
            </button>
            <button className="p-2 hidden md:block">
              <Search size={18} strokeWidth={1.5} className="text-[#000000]" />
            </button>
            <button className="p-2 hidden md:block">
              <Globe size={18} strokeWidth={1.5} className="text-[#000000]" />
            </button>
            <a
              href="#contact"
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
                  href="#"
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
        <div className="lg:hidden bg-white border-t border-[#E0E0E0] absolute w-full left-0 top-[50px] shadow-lg">
          <nav className="py-4 px-6">
            <ul className="space-y-4">
              {mainNavLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="flex items-center justify-between text-[14px] font-medium text-[#000000] py-2"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-[#E0E0E0] mt-4 pt-4">
              <ul className="space-y-3">
                {utilityLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-[#555555]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
