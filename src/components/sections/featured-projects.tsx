import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "Kantoor",
    title: "MODERNE WERKPLEKKEN",
    description: "Flexibele werkplekken met focus op ergonomie en samenwerking",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
  },
  {
    id: 2,
    category: "Onderwijs",
    title: "LEEROMGEVINGEN",
    description: "Inspirerende ruimtes voor moderne onderwijsmethoden",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
  },
  {
    id: 3,
    category: "Zorg",
    title: "ZORGOMGEVINGEN",
    description: "Rustige omgevingen met focus op welzijn",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80",
  },
  {
    id: 4,
    category: "Kantoor",
    title: "VERGADERRUIMTES",
    description: "Professionele ruimtes voor effectieve meetings",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&q=80",
  },
  {
    id: 5,
    category: "Circulair",
    title: "DUURZAAM INTERIEUR",
    description: "Inrichting met refurbished en circulair meubilair",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-[#f1f1f1] py-[60px] md:py-[120px]">
      <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
        <div className="mb-[40px] md:mb-[60px]">
          <h2 className="text-[32px] md:text-[48px] font-light leading-[1.2] uppercase tracking-[0.025em] text-[#000000]">
            Onze Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] mb-[20px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
              </div>

              <div className="space-y-[10px]">
                <span className="block text-[14px] font-bold uppercase tracking-wider text-[#555555]">
                  {project.category}
                </span>
                <h3 className="text-[16px] md:text-[18px] font-bold leading-[1.4] uppercase text-[#000000] min-h-[40px]">
                  {project.title}
                </h3>
                <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-[#000000] line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[40px] md:mt-[60px] flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-4 bg-white px-8 py-4 text-[14px] font-bold transition-all duration-300 hover:bg-black hover:text-white group"
          >
            Bekijk alle projecten
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              <svg
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M0 6H22M22 6L17 1M22 6L17 11" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
