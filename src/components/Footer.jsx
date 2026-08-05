import React from 'react';
import { Phone, Mail, ChevronRight, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-zinc-900 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="VLB Builders Logo"
                className="h-10 w-auto object-contain rounded p-0.5 bg-black border border-[#F4B400]/40"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/40?text=VLB';
                }}
              />
              <span className="text-xl font-extrabold text-white tracking-wider">
                VLB <span className="text-[#F4B400]">BUILDERS</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Premier construction company specializing in architectural 2D/3D planning, precise estimation, turnkey villa construction, swimming pools, RR works, and structural renovation.
            </p>

            <div className="pt-2">
              <div className="text-white text-xs font-bold uppercase tracking-wider">Owner & Civil Engineer:</div>
              <div className="text-[#F4B400] text-sm font-semibold">Veebin Victo</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-l-2 border-[#F4B400] pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About Us', 'Services', 'Why Us', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-[#F4B400] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#F4B400]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-l-2 border-[#F4B400] pl-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                'Plan & Approval',
                'Cost Estimation',
                '3D Elevation',
                'Real Estate',
                'Swimming Pool Works',
                'R.R Works & Masonry',
                'Building Renovation',
                'Maintenance Works'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-[#F4B400] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-l-2 border-[#F4B400] pl-2">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="tel:+918525852372" className="flex items-center gap-2 hover:text-[#F4B400] transition-colors">
                  <Phone className="w-4 h-4 text-[#F4B400] shrink-0" />
                  <span>+91 85258 52372</span>
                </a>
              </li>
              <li>
                <a href="mailto:veebin71@gmail.com" className="flex items-center gap-2 hover:text-[#F4B400] transition-colors">
                  <Mail className="w-4 h-4 text-[#F4B400] shrink-0" />
                  <span>veebin71@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} VLB Builders (Veebin Victo). All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-[#F4B400] transition-colors flex items-center gap-1">
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3 text-[#F4B400]" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
