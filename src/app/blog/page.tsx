import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { getAllBlogPosts } from '@/data/blog-posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog & Inspiratie | JR-Interieur",
  description: "Ontdek onze blog met inspiratie, tips en inzichten over duurzaam interieurontwerp, ergonomie, en de nieuwste trends in kantoor-, onderwijs- en zorginrichting.",
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[100px] px-6 md:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[800px]">
              <span className="text-[14px] font-bold uppercase tracking-wider text-[#555555] mb-4 block">
                Blog & Inspiratie
              </span>
              <h1 className="text-[36px] md:text-[56px] lg:text-[72px] font-light leading-[1.1] uppercase tracking-[0.025em] mb-6 text-black">
                KENNIS EN<br />INSPIRATIE
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px]">
                Ontdek de nieuwste inzichten over duurzaam interieurontwerp, ergonomie,
                en innovatieve oplossingen voor kantoor, onderwijs en zorg.
                Onze experts delen hun kennis en ervaring.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-white py-[60px] md:py-[100px] px-6 md:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto">
            {/* Featured Post (First Post) */}
            <div className="mb-[60px] md:mb-[80px]">
              <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[14px] font-bold uppercase tracking-wider text-[#6B8E7B]">
                        {blogPosts[0].category}
                      </span>
                      <span className="text-[14px] text-[#555555]">
                        {blogPosts[0].date}
                      </span>
                    </div>
                    <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-light leading-[1.15] uppercase tracking-[0.025em] mb-6 text-black group-hover:text-[#555555] transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[14px] font-bold uppercase tracking-wider text-black">
                      <span>Lees meer</span>
                      <span className="text-xl transition-transform group-hover:translate-x-2">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>

            {/* Divider */}
            <div className="border-t border-[#E0E0E0] mb-[60px] md:mb-[80px]"></div>

            {/* Rest of Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
              {blogPosts.slice(1).map((post, index) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                  <article className="flex flex-col h-full">
                    <div className="relative aspect-[4/3] w-full mb-5 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[12px] font-bold uppercase tracking-wider text-[#6B8E7B]">
                        {post.category}
                      </span>
                      <span className="text-[12px] text-[#999999]">•</span>
                      <span className="text-[12px] text-[#555555]">
                        {post.readTime} leestijd
                      </span>
                    </div>

                    <h3 className="text-[16px] md:text-[18px] font-bold leading-[1.35] uppercase tracking-[0.025em] mb-3 text-black group-hover:text-[#555555] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-[14px] leading-[1.6] text-[#555555] line-clamp-3 mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    <span className="text-[13px] text-[#999999]">
                      {post.date}
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
