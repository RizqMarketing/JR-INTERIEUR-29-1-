import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedBlogPosts } from '@/data/blog-posts';

const BlogGrid = () => {
  const blogPosts = getFeaturedBlogPosts(5);

  return (
    <section className="bg-white py-[60px] md:py-[120px] px-6 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[32px] md:text-[48px] font-light leading-[1.2] uppercase tracking-[0.025em] mb-[40px] text-black">
          INSPIRATIE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px] mb-[40px] md:mb-[60px]">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article className="flex flex-col group cursor-pointer">
                <div className="relative aspect-[4/3] w-full mb-[20px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  />
                </div>

                <span className="text-[14px] font-bold uppercase tracking-wider text-[#555555] mb-[15px]">
                  {post.category}
                </span>

                <h3 className="text-[16px] md:text-[18px] font-bold leading-[1.4] uppercase tracking-[0.025em] mb-[15px] text-black group-hover:text-[#555555] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[14px] md:text-[16px] leading-[1.6] text-black font-normal line-clamp-4">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-4 py-3 px-8 bg-white border border-[#E0E0E0] text-[14px] font-bold uppercase transition-all duration-300 hover:bg-[#F1F1F1]"
          >
            Bekijk alle artikelen
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
