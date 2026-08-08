import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Projects', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-lg border border-[#F4B400]/40 p-1 bg-black/60 group-hover:border-[#F4B400] transition-colors">
              <img
                src="/images/logo.png"
                alt="VLB Builders Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/40x40/111/F4B400?text=VLB';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white group-hover:text-[#F4B400] transition-colors">
                VLB <span className="text-[#F4B400]">BUILDERS</span>
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 uppercase font-medium">
                Pr. Veebin Victo
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#F4B400] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F4B400] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918525852372"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F4B400] hover:bg-[#d99f00] text-black font-bold text-sm shadow-glow-yellow hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>+91 85258 52372</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-gray-300 hover:text-[#F4B400] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#F4B400] hover:bg-zinc-800/60"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="tel:+918525852372"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#F4B400] text-black font-bold text-base"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call Us: +91 85258 52372</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
