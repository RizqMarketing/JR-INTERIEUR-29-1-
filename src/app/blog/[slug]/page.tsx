import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blog-posts';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artikel niet gevonden | JR-Interieur',
    };
  }

  return {
    title: `${post.title} | JR-Interieur Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const relatedPosts = allPosts
    .filter((_, index) => index !== currentIndex)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white pt-[40px] md:pt-[60px] px-6 md:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-[14px]">
                <li>
                  <Link href="/" className="text-[#555555] hover:text-black transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-[#999999]">/</li>
                <li>
                  <Link href="/blog" className="text-[#555555] hover:text-black transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="text-[#999999]">/</li>
                <li className="text-black font-medium truncate max-w-[200px]">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Article Header */}
            <div className="max-w-[900px]">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-block px-4 py-2 bg-[#6B8E7B] text-white text-[12px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-[14px] text-[#555555]">
                  {post.date}
                </span>
                <span className="text-[14px] text-[#555555]">
                  • {post.readTime} leestijd
                </span>
              </div>

              <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-light leading-[1.1] uppercase tracking-[0.025em] mb-6 text-black">
                {post.title}
              </h1>

              <p className="text-[18px] md:text-[20px] leading-[1.7] text-[#555555] mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 pb-8 border-b border-[#E0E0E0]">
                <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                  <span className="text-white font-bold text-[14px]">JR</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black">{post.author}</p>
                  <p className="text-[13px] text-[#555555]">Interieurspecialisten</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-[40px] md:py-[60px] px-6 md:px-8 lg:px-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-[60px] md:pb-[100px] px-6 md:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Sidebar - Share */}
              <aside className="lg:col-span-2 order-2 lg:order-1">
                <div className="lg:sticky lg:top-[140px]">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#555555] mb-4">
                    Delen
                  </p>
                  <div className="flex lg:flex-col gap-3">
                    <button
                      className="w-10 h-10 flex items-center justify-center border border-[#E0E0E0] hover:bg-[#F1F1F1] transition-colors"
                      aria-label="Deel op LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </button>
                    <button
                      className="w-10 h-10 flex items-center justify-center border border-[#E0E0E0] hover:bg-[#F1F1F1] transition-colors"
                      aria-label="Deel op Twitter"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button
                      className="w-10 h-10 flex items-center justify-center border border-[#E0E0E0] hover:bg-[#F1F1F1] transition-colors"
                      aria-label="Deel via e-mail"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </button>
                    <button
                      className="w-10 h-10 flex items-center justify-center border border-[#E0E0E0] hover:bg-[#F1F1F1] transition-colors"
                      aria-label="Kopieer link"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                    </button>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-8 order-1 lg:order-2">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                />
              </article>

              {/* Empty space for symmetry */}
              <div className="lg:col-span-2 order-3 hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* Author CTA */}
        <section className="bg-[#F1F1F1] py-[60px] md:py-[80px] px-6 md:px-8 lg:px-16">
          <div className="max-w-[900px] mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-[28px] md:text-[36px]">JR</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[20px] md:text-[24px] font-bold uppercase tracking-[0.025em] mb-3 text-black">
                  JR-Interieur
                </h3>
                <p className="text-[16px] leading-[1.7] text-[#555555] mb-6">
                  Al meer dan 25 jaar uw partner in duurzaam en circulair interieurontwerp.
                  Van kantoren tot onderwijsinstellingen, van zorginrichtingen tot hybride werkplekken.
                  Wij denken graag met u mee.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#6B8E7B] text-white text-[14px] font-bold uppercase tracking-wider hover:bg-[#5a7a69] transition-colors"
                >
                  Neem contact op
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="bg-white py-[60px] md:py-[100px] px-6 md:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-[28px] md:text-[36px] font-light leading-[1.2] uppercase tracking-[0.025em] mb-[40px] md:mb-[60px] text-black">
              GERELATEERDE ARTIKELEN
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {relatedPosts.map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group">
                  <article className="flex flex-col">
                    <div className="relative aspect-[4/3] w-full mb-5 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[12px] font-bold uppercase tracking-wider text-[#6B8E7B]">
                        {relatedPost.category}
                      </span>
                      <span className="text-[12px] text-[#999999]">•</span>
                      <span className="text-[12px] text-[#555555]">
                        {relatedPost.readTime} leestijd
                      </span>
                    </div>

                    <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.35] uppercase tracking-[0.025em] mb-3 text-black group-hover:text-[#555555] transition-colors">
                      {relatedPost.title}
                    </h3>

                    <p className="text-[14px] leading-[1.6] text-[#555555] line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-12 md:mt-16">
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
      </main>
      <Footer />
    </div>
  );
}

function formatContent(content: string): string {
  const lines = content.trim().split('\n');
  const result: string[] = [];
  let inList = false;
  let listType = '';
  let currentParagraph: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        result.push(`<p>${text}</p>`);
      }
      currentParagraph = [];
    }
  };

  const closeList = () => {
    if (inList) {
      result.push(listType === 'ul' ? '</ul>' : '</ol>');
      inList = false;
      listType = '';
    }
  };

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Empty line - flush paragraph and close list
    if (line === '') {
      flushParagraph();
      closeList();
      continue;
    }

    // H2 header
    if (line.startsWith('## ')) {
      flushParagraph();
      closeList();
      const headerText = line.substring(3);
      result.push(`<h2>${headerText}</h2>`);
      continue;
    }

    // H3 header
    if (line.startsWith('### ')) {
      flushParagraph();
      closeList();
      const headerText = line.substring(4);
      result.push(`<h3>${headerText}</h3>`);
      continue;
    }

    // Unordered list item
    if (line.startsWith('- ')) {
      flushParagraph();
      if (!inList || listType !== 'ul') {
        closeList();
        result.push('<ul>');
        inList = true;
        listType = 'ul';
      }
      let itemText = line.substring(2);
      // Process inline formatting
      itemText = itemText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      itemText = itemText.replace(/\*([^*]+)\*/g, '<em>$1</em>');
      result.push(`<li>${itemText}</li>`);
      continue;
    }

    // Numbered list item
    const numberedMatch = line.match(/^(\d+)\. (.+)$/);
    if (numberedMatch) {
      flushParagraph();
      if (!inList || listType !== 'ol') {
        closeList();
        result.push('<ol>');
        inList = true;
        listType = 'ol';
      }
      let itemText = numberedMatch[2];
      // Process inline formatting
      itemText = itemText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      itemText = itemText.replace(/\*([^*]+)\*/g, '<em>$1</em>');
      result.push(`<li>${itemText}</li>`);
      continue;
    }

    // Regular text - add to current paragraph
    closeList();
    // Process inline formatting
    line = line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    line = line.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    currentParagraph.push(line);
  }

  // Flush any remaining content
  flushParagraph();
  closeList();

  return result.join('\n');
}
