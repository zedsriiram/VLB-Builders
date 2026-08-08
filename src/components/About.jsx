import React from 'react';
import { UserCheck, ShieldAlert, Award, Compass, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#141414] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#F4B400]/30 shadow-2xl group">
              <img
                src="/images/about.jpg"
                alt="VLB Builders Engineering Team"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/hero.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-white/10">
                <div className="flex items-center gap-3">
                   <img
  src="/images/veebin.jpeg"
  alt="Veebin Victo"
  className="w-12 h-12 rounded-full object-cover"
/>
                  <div>
                    <h4 className="text-white font-bold text-base">Veebin Victo</h4>
                    <p className="text-[#F4B400] text-xs font-semibold">Founder & Lead Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background blur badge */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#F4B400]/20 rounded-full blur-3xl -z-0" />
          </div>

          {/* About Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#F4B400]/30 text-[#F4B400] text-xs font-bold uppercase tracking-widest">
              <span>About VLB Builders</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Building Legacy with <span className="text-[#F4B400]">Unmatched Engineering</span> & Integrity
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              At <strong>VLB Builders</strong>, we believe every structure tells a story. Managed under the visionary leadership of <strong>Veebin Victo</strong>, our firm delivers complete construction solutions from initial architectural blueprint planning to final key handover.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Whether you are planning a modern residential home, commercial complex, custom 3D elevation design, swimming pool, structural renovation, or heavy RR works, our experienced team blends state-of-the-art civil engineering standards with transparent pricing.
            </p>

            {/* Core Values / Badges */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F4B400]/10 text-[#F4B400] shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">3D Elevation & Planning</h4>
                  <p className="text-gray-400 text-xs mt-1">Realistic 3D visual models before break-ground.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F4B400]/10 text-[#F4B400] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Certified Materials</h4>
                  <p className="text-gray-400 text-xs mt-1">Strict grade steel, concrete & quality finishes.</p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="pt-2 space-y-2">
              {[
                'Transparent estimation & detailed cost breakdown',
                'Custom residential & commercial elevation modeling',
                'Comprehensive structural guarantee & maintenance support'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-gray-200">
                  <CheckCircle className="w-4 h-4 text-[#F4B400] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
