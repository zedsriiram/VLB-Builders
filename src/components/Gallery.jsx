import React, { useState } from 'react';
import { Eye, Filter, ArrowUpRight } from 'lucide-react';
import ImageModal from './ImageModal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Residential', '3D Elevation', 'Pool & RR Works', 'Renovation'];

   const categories = ['All', 'Residential', '3D Elevation', 'Pool & RR Works', 'Theatre Concept', 'Landscaping', 'Renovation'];

const projects = [
  { id: 1, src: '/images/project1.jpg', title: 'Modern Villa Elevation', category: '3D Elevation' },
  { id: 2, src: '/images/project2.jpg', title: 'Luxury House Construction', category: '3D Elevation' },
  { id: 3, src: '/images/project3.jpg', title: 'Custom Interior Elevation', category: '3D Elevation' },
  { id: 4, src: '/images/project4.jpg', title: 'Contemporary Residence', category: 'Residential' },
  { id: 5, src: '/images/project5.jpg', title: 'Bedroom Interior Design', category: 'Residential' },
  { id: 6, src: '/images/project6.jpg', title: 'Acoustic Wall & Upgrade', category: 'Theatre Concept' },
  { id: 7, src: '/images/project7.jpg', title: 'Swimming Pool Project', category: 'Pool & RR Works' },
  { id: 8, src: '/images/project8.jpg', title: 'Swimming Pool Installation', category: 'Pool & RR Works' },
  { id: 9, src: '/images/project9.jpg', title: 'Compact Duplex Elevation', category: '3D Elevation' },
  { id: 10, src: '/images/project10.jpg', title: 'Commercial Landscaping Bench Works', category: 'Landscaping' },
  { id: 11, src: '/images/project11.jpg', title: 'Exterior Wall Remodeling', category: 'Renovation' },
  { id: 12, src: '/images/project12.jpg', title: 'Specific Interior Features', category: 'Residential' },
  { id: 13, src: '/images/project13.jpg', title: 'Modern Bedroom Features', category: 'Residential' },
  { id: 14, src: '/images/project14.jpg', title: 'Home Theatre Concept', category: 'Theatre Concept' },
  { id: 15, src: '/images/project15.jpg', title: 'Complete Gardening & Landscaping', category: 'Landscaping' },
  { id: 16, src: '/images/project16.jpg', title: 'Standard Room Sizing', category: 'Residential' },
  { id: 17, src: '/images/project17.jpg', title: 'Facade Design', category: 'Renovation' }
];

  const filteredProjects = activeCategory === 'All'
    ? projectImages
    : projectImages.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-widest">
            <span>Project Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Portfolio of <span className="text-[#F4B400]">Craftsmanship</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Explore recent construction projects, 3D elevation renders, swimming pools, and structural renovations completed by VLB Builders.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#F4B400] text-black shadow-glow-yellow scale-105'
                  : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-[#F4B400]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedImage(project)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#F4B400]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="aspect-[4/3] overflow-hidden bg-zinc-950 relative">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#F4B400] text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-[#F4B400] text-[11px] font-bold tracking-wider uppercase border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 bg-gradient-to-b from-zinc-900 to-[#181818]">
                <h3 className="text-base font-bold text-white group-hover:text-[#F4B400] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#F4B400] transition-colors" />
                </h3>
                <p className="text-gray-400 text-xs mt-1">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Image Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
