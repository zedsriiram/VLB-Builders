import React from 'react';
import { X, CheckCircle, ArrowRight, Phone } from 'lucide-react';

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#181818] border border-zinc-700 w-full max-w-2xl rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-gray-400 hover:text-white hover:bg-zinc-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 mb-4">
          <div className="p-3 rounded-xl bg-[#F4B400]/10 text-[#F4B400] border border-[#F4B400]/30">
            {service.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
            <p className="text-xs text-[#F4B400] font-semibold uppercase tracking-wider">VLB Builders Specialty</p>
          </div>
        </div>

        {/* Modal Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {service.fullDescription || service.description}
        </p>

        {/* Key Features List */}
        <div className="space-y-3 mb-6 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">What We Offer:</h4>
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-[#F4B400] shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={`https://wa.me/918525852372?text=Hello%20VLB%20Builders,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-[#F4B400] hover:bg-[#d99f00] text-black font-bold text-sm flex items-center justify-center gap-2 shadow-glow-yellow transition-colors"
          >
            <span>Inquire for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+918525852372"
            className="w-full sm:w-auto py-3 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-zinc-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 85258 52372</span>
          </a>
        </div>
      </div>
    </div>
  );
}
