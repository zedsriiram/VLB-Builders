import React, { useState } from 'react';
import { Phone, Mail, MapPin, User, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Plan & Estimation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Plan & Estimation',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#141414] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-widest">
            <span>Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let's Build Your <span className="text-[#F4B400]">Vision Together</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Have questions about planning, 3D elevations, costs, or real estate? Connect directly with owner Veebin Victo.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Information & Owner Profile */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Owner Details Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-[#F4B400]/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4 pb-6 border-b border-zinc-800">
                <div className="w-16 h-16 rounded-full bg-[#F4B400] flex items-center justify-center text-black font-black text-2xl border-2 border-white shadow-lg">
                  VV
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Veebin Victo</h3>
                  <p className="text-[#F4B400] text-xs font-semibold uppercase tracking-wider">Owner & Civil Engineer</p>
                  <p className="text-gray-400 text-xs mt-0.5">VLB Builders</p>
                </div>
              </div>

              <div className="space-y-5 pt-6">
                
                {/* Phone Link */}
                <a
                  href="tel:+918525852372"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-zinc-800 hover:border-[#F4B400] transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-[#F4B400]/10 text-[#F4B400] group-hover:bg-[#F4B400] group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Direct Phone Line</div>
                    <div className="text-white font-bold text-base group-hover:text-[#F4B400] transition-colors">
                      +91 85258 52372
                    </div>
                  </div>
                </a>

                {/* Email Link */}
                <a
                  href="mailto:veebin71@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-zinc-800 hover:border-[#F4B400] transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-[#F4B400]/10 text-[#F4B400] group-hover:bg-[#F4B400] group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Official Email</div>
                    <div className="text-white font-bold text-base group-hover:text-[#F4B400] transition-colors">
                      veebin71@gmail.com
                    </div>
                  </div>
                </a>

                {/* Direct WhatsApp CTA */}
                <a
                  href="https://wa.me/918525852372?text=Hello%20Veebin%20Victo,%20I%20am%20interested%20in%20a%20construction%20quote%20from%20VLB%20Builders."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-3 transition-colors shadow-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Instant WhatsApp Message</span>
                </a>

              </div>
            </div>

          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">Request a Quote</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-6">Fill out the form below for a customized project estimation.</p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Thank You for Reaching Out!</h4>
                  <p className="text-emerald-200 text-sm">
                    Your inquiry has been received. Er. Veebin Victo will contact you shortly on <strong>+91 85258 52372</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-zinc-700 text-white text-sm focus:border-[#F4B400] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-zinc-700 text-white text-sm focus:border-[#F4B400] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-zinc-700 text-white text-sm focus:border-[#F4B400] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Service Required</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-zinc-700 text-white text-sm focus:border-[#F4B400] focus:outline-none transition-colors"
                      >
                        <option value="Plan">Plan & Architectural Layout</option>
                        <option value="Estimate">Cost Estimation</option>
                        <option value="3D Elevation">3D Elevation Design</option>
                        <option value="Real Estate">Real Estate & Land</option>
                        <option value="Swimming Pool Works">Swimming Pool Works</option>
                        <option value="R.R Works & Construction">R.R Works & Construction</option>
                        <option value="Building Renovation">Building Renovation</option>
                        <option value="Maintenance Works">Maintenance Works</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Project Details / Location</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, plot area, or specific requirements..."
                      className="w-full px-4 py-3 rounded-lg bg-black/60 border border-zinc-700 text-white text-sm focus:border-[#F4B400] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-[#F4B400] hover:bg-[#d99f00] text-black font-extrabold text-base flex items-center justify-center gap-2 shadow-glow-yellow transition-transform hover:scale-[1.01]"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
