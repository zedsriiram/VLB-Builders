import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#F4B400] selection:text-black">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/918525852372?text=Hello%20VLB%20Builders,%20I%20would%20like%20to%20get%20a%20construction%20quote."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110 group border border-emerald-400/30"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-16 bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            WhatsApp Inquiry
          </span>
        </a>

        {/* Floating Call Button */}
        <a
          href="tel:+918525852372"
          aria-label="Call VLB Builders"
          className="w-13 h-13 p-3 rounded-full bg-[#F4B400] hover:bg-[#d99f00] text-black shadow-glow-yellow flex items-center justify-center transition-transform hover:scale-110 group"
        >
          <Phone className="w-6 h-6 fill-current" />
          <span className="absolute right-16 bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-zinc-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Call +91 85258 52372
          </span>
        </a>
      </div>
    </div>
  );
}
