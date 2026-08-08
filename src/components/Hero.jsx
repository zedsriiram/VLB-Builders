import React from 'react';
import { ArrowRight, ShieldCheck, Award, Building2, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="VLB Builders Construction Site"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-75 scale-105 animate-pulse-slow"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1920&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F4B400]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-[#F4B400]/40 text-[#F4B400] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-[#F4B400]" />
              <span>Premium Construction & Architectural Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Crafting Superior <br className="hidden sm:inline" />
              <span className="text-gradient-yellow">Structures & Dreams</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Led by <strong className="text-white">Er. Veebin Victo</strong>, VLB Builders provides end-to-end engineering, 3D elevations, luxury real estate development, swimming pools, RR works, and turnkey construction with uncompromised precision.
            </p>

            {/* Core Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#F4B400] shrink-0" />
                <span>Modern 3D Elevation</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#F4B400] shrink-0" />
                <span>Turnkey Construction</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#F4B400] shrink-0" />
                <span>On-Time Delivery</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#F4B400] hover:bg-[#d99f00] text-black font-extrabold text-base flex items-center justify-center gap-3 shadow-glow-yellow hover:scale-105 transition-all duration-200"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#gallery"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-zinc-900/90 border border-zinc-700 hover:border-[#F4B400] text-white hover:text-[#F4B400] font-bold text-base flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Building2 className="w-5 h-5" />
                <span>View Recent Projects</span>
              </a>
            </div>
          </div>

          {/* Quick Info & Stats Floating Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#F4B400]/10 rounded-full blur-3xl group-hover:bg-[#F4B400]/20 transition-all" />
              
              <div className="flex items-center gap-4 pb-6 border-b border-zinc-800">
                <img
                  src="/images/logo.png"
                  alt="VLB Builders Logo"
                  className="w-14 h-14 object-contain rounded-lg p-1 bg-black/80 border border-[#F4B400]/40"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/60?text=VLB';
                  }}
                />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">VLB BUILDERS</h3>
                  <p className="text-xs text-[#F4B400] font-semibold uppercase tracking-wider">Er. Veebin Victo (Owner)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 my-6 text-left">
                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800">
                  <div className="text-3xl font-black text-[#F4B400]">67+</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Completed Projects</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800">
                  <div className="text-3xl font-black text-[#F4B400]">100%</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Structural Guarantee</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800">
                  <div className="text-3xl font-black text-[#F4B400]">8+</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Specialized Services</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800">
                  <div className="text-3xl font-black text-[#F4B400]">5★</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Client Satisfaction</div>
                </div>
              </div>

              <a
                href="https://wa.me/918525852372?text=Hello%20VLB%20Builders,%20I%20would%20like%20to%20inquire%20about%20your%20construction%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
