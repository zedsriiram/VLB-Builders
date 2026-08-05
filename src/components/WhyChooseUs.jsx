import React from 'react';
import { ShieldCheck, Clock, Layers, DollarSign, Award, ThumbsUp } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#F4B400]" />,
      title: 'Structural Safety & Quality Guarantee',
      description: 'We adhere to IS Code structural standards, testing all steel, cement, and aggregates for maximum lifespan.'
    },
    {
      icon: <Clock className="w-8 h-8 text-[#F4B400]" />,
      title: 'Strict On-Time Delivery',
      description: 'Our project managers follow milestone tracking schedules to ensure keys are handed over strictly on schedule.'
    },
    {
      icon: <Layers className="w-8 h-8 text-[#F4B400]" />,
      title: '3D Visualization Prior to Build',
      description: 'Eliminate guesswork with 3D elevations and spatial layouts created before pouring the foundation.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#F4B400]" />,
      title: 'Transparent Budgeting & Pricing',
      description: 'Zero hidden charges. Itemized estimation contracts protect you against unexpected material cost spikes.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#F4B400]" />,
      title: 'Expert Engineering Leadership',
      description: 'Direct site supervision and structural planning led by Er. Veebin Victo and certified site engineers.'
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-[#F4B400]" />,
      title: 'Complete Turnkey Solutions',
      description: 'From soil testing and site clearance to swimming pools, interior fit-outs, and maintenance.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#161616] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-widest">
            <span>Why Choose VLB Builders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Engineered for <span className="text-[#F4B400]">Enduring Excellence</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We combine civil engineering precision, luxury architectural styling, and client-first transparency to deliver dream properties.
          </p>
        </div>

        {/* Grid of Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#F4B400]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-xl bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#F4B400]/50 transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4B400] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#1A1A1A] to-zinc-900 border border-[#F4B400]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-xl font-bold text-white">Ready to Start Your Dream Construction Project?</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Speak with founder & lead engineer Er. Veebin Victo today.</p>
          </div>
          <a
            href="tel:+918525852372"
            className="px-8 py-3.5 rounded-lg bg-[#F4B400] hover:bg-[#d99f00] text-black font-extrabold text-sm whitespace-nowrap shadow-glow-yellow transition-all hover:scale-105"
          >
            Call +91 85258 52372
          </a>
        </div>

      </div>
    </section>
  );
}
