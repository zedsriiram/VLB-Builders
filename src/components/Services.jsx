import React, { useState } from 'react';
import {
  FileText,
  Calculator,
  Box,
  Home,
  Waves,
  Hammer,
  Wrench,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import ServiceModal from './ServiceModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 'plan',
      title: 'Plan & Architectural Drafting',
      description: 'Comprehensive 2D & 3D floor plans crafted strictly according to Vastu, structural safety, and government approval standards.',
      fullDescription: 'Our architectural design and planning services encompass site analysis, structural engineering blueprints, spatial layout optimization, Vastu compliance, and local municipal permit approvals. We ensure every square foot is maximized for elegance and functionality.',
      icon: <FileText className="w-7 h-7" />,
      features: [
        '2D Architectural Floor Plans & Layouts',
        'Structural Engineering & Load Calculations',
        'Vastu Shastra Compliant Designs',
        'Government Sanction & Permit Blueprints'
      ]
    },
    {
      id: 'estimate',
      title: 'Cost Estimation & Budgeting',
      description: 'Accurate, transparent material and labor cost calculations to ensure your project stays strictly within budget.',
      fullDescription: 'Avoid unexpected costs with our itemized quantity estimation and budgeting solutions. We provide crystal-clear breakdowns covering raw materials, labor, finishes, plumbing, electricals, and timeline milestones before starting construction.',
      icon: <Calculator className="w-7 h-7" />,
      features: [
        'Detailed Material Quantity Estimation',
        'Labor & Schedule Budget Breakdown',
        'Cost-Optimization & Alternative Materials',
        'Zero Hidden Fee Commitment'
      ]
    },
    {
      id: '3d-elevation',
      title: '3D Elevation Design',
      description: 'Ultra-realistic 3D exterior and interior architectural visualizations to experience your home before construction begins.',
      fullDescription: 'Experience your dream home in photorealistic 3D detail. Our elevation services showcase lighting, texture, color palettes, cladding, landscaping, and night views so you can refine aesthetic choices prior to construction.',
      icon: <Box className="w-7 h-7" />,
      features: [
        'Modern Exterior Modern Facade 3D Renderings',
        'Interior Room 3D Visualization',
        'Daylight & Night Mode Illumination Previews',
        'Material & Texture Customization'
      ]
    },
    {
      id: 'real-estate',
      title: 'Real Estate & Land Development',
      description: 'Assisting clients in identifying premium plots, property valuation, turnkey construction, and profitable property investments.',
      fullDescription: 'VLB Builders connects clients with prime residential and commercial real estate assets. We offer complete property development services, land acquisition advice, property valuation, and turnkey building construction.',
      icon: <Home className="w-7 h-7" />,
      features: [
        'Prime Residential & Commercial Land Sourcing',
        'Turnkey Villa & Commercial Development',
        'Property Legal Guidance & Documentation',
        'High-Return Investment Properties'
      ]
    },
    {
      id: 'swimming-pool',
      title: 'Swimming Pool Works',
      description: 'End-to-end design, excavation, concrete casting, waterproofing, tiling, and filtration system installation for luxury pools.',
      fullDescription: 'Transform your outdoor space with custom-engineered swimming pools. From infinity edge designs and indoor plunge pools to luxury resort pools, we handle excavation, reinforced RCC casting, waterproofing, filtration, and underwater LED lighting.',
      icon: <Waves className="w-7 h-7" />,
      features: [
        'Custom RCC Concrete Swimming Pool Construction',
        'Advanced Multi-Stage Water Filtration Systems',
        'Guaranteed Leak-Proof Waterproofing',
        'Jacuzzi, Infinity Edge & LED Light Integration'
      ]
    },
    {
      id: 'rr-works',
      title: 'R.R Works & Heavy Construction',
      description: 'Random Rubble (R.R) masonry, foundation retaining walls, compound walls, and heavy civil structural construction.',
      fullDescription: 'Our R.R (Random Rubble) works and heavy construction services focus on robust foundation building, retaining walls for soil slope stabilization, stone masonry, and durable reinforced concrete structures engineered for decades of endurance.',
      icon: <Hammer className="w-7 h-7" />,
      features: [
        'Random Rubble (R.R) Stone Masonry',
        'Heavy Reinforced RCC Civil Construction',
        'Slope & Retaining Wall Engineering',
        'Boundary & Perimeter Security Walls'
      ]
    },
    {
      id: 'renovation',
      title: 'Building Renovation',
      description: 'Modernizing outdated structural layouts, exterior remodeling, space expansion, and structural reinforcement.',
      fullDescription: 'Breathe new life into existing buildings with our full-service structural renovation. We handle floor addition, exterior facade modernizations, wall removal for open-concept living, tile replacement, and complete interior overhauls.',
      icon: <Sparkles className="w-7 h-7" />,
      features: [
        'Structural Modernization & Layout Expansion',
        'Exterior Elevation Face-Lifts',
        'Bathroom & Kitchen Luxury Refurbishment',
        'Roofing & Waterproofing Overhauls'
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance Works',
      description: 'Prompt repair, plumbing, electrical upgrades, painting, waterproofing, and ongoing structural upkeep services.',
      fullDescription: 'Keep your property in pristine condition with VLB Builders’ ongoing maintenance services. We provide leak repair, weather-shield painting, plumbing/electrical upgrades, crack injection, and preventative structural care.',
      icon: <Wrench className="w-7 h-7" />,
      features: [
        'Terrace & Exterior Leak Waterproofing',
        'Exterior & Interior Weather-Shield Painting',
        'Plumbing & Electrical Infrastructure Upgrades',
        'Periodic Structural Inspection & Repairs'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-widest">
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Comprehensive <span className="text-[#F4B400]">Construction Services</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            From initial concept drawings to turnkey key handover, VLB Builders delivers top-tier civil engineering and architectural excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle top yellow accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F4B400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 text-[#F4B400] flex items-center justify-center mb-5 group-hover:bg-[#F4B400] group-hover:text-black group-hover:border-[#F4B400] transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F4B400] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-[#F4B400] group-hover:translate-x-1 transition-transform">
                <span>Explore Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
