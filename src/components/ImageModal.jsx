import React from 'react';
import { X, ZoomIn, MapPin, Tag } from 'lucide-react';

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-4xl w-full bg-[#161616] border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:text-[#F4B400] border border-white/20 transition-all hover:scale-110"
          aria-label="Close Preview"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Large Image Frame */}
        <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-contain max-h-[70vh]"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
            }}
          />
        </div>

        {/* Image Details Footer */}
        <div className="p-6 bg-[#1A1A1A] border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md bg-[#F4B400]/20 text-[#F4B400] border border-[#F4B400]/40 text-xs font-bold uppercase">
                {image.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">{image.title}</h3>
            <p className="text-gray-400 text-xs mt-1">{image.subtitle || 'VLB Builders Project Execution'}</p>
          </div>

          <a
            href={`https://wa.me/918525852372?text=Hello%20VLB%20Builders,%20I%20saw%20project%20"${encodeURIComponent(image.title)}"%20and%20want%20to%20know%20more.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg bg-[#F4B400] hover:bg-[#d99f00] text-black font-bold text-sm whitespace-nowrap shadow-glow-yellow transition-transform hover:scale-105"
          >
            Inquire About Similar Project
          </a>
        </div>
      </div>
    </div>
  );
}
