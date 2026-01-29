import type { Metadata } from "next";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import UspBlocks from "@/components/sections/education-links";
import CollectionGrid from "@/components/sections/collection-grid";
import CircularDesign from "@/components/sections/circular-design";
import SolutionHighlights from "@/components/sections/learning-healthcare";
import HighlightedProducts from "@/components/sections/highlighted-products";
import BlogGrid from "@/components/sections/blog-grid";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Circulaire kantoorinrichting voor overheid | JR-Interieur",
  description: "Duurzame interieurinrichting voor overheid en publieke organisaties. Specialist in refurbished meubilair en herstofferen.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Introductie */}
        <section className="bg-[#1a1a1a] py-[60px] md:py-[100px]">
          <div className="container mx-auto px-6 md:px-8 max-w-[1440px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
              <div className="lg:w-1/3">
                <div className="border-l-2 border-[#6B8E7B] pl-6">
                  <span className="text-[12px] font-medium uppercase tracking-[0.3em] text-white/40 block mb-3">
                    Over ons
                  </span>
                  <h2 className="text-[24px] md:text-[32px] font-light uppercase leading-[1.2] text-white">
                    Specialist in <span className="font-bold">circulair</span> interieur
                  </h2>
                </div>
              </div>
              <div className="lg:w-2/3 space-y-6">
                <p className="text-[16px] md:text-[17px] leading-[1.8] text-white/70">
                  Wij zijn gespecialiseerd in circulaire kantoorinrichting, refurbished meubilair en duurzaam herstoffeerwerk. Wij sluiten aan op aanbestedingen waarin circulariteit, levensduurverlenging en maatschappelijk verantwoord inkopen (MVI) centraal staan.
                </p>
                <p className="text-[16px] md:text-[17px] leading-[1.8] text-white/70">
                  Door bestaand meubilair als uitgangspunt te nemen beperken wij verspilling, verlagen we kosten en leveren we aantoonbare verduurzaming.
                </p>
                <p className="text-[16px] md:text-[17px] leading-[1.8] text-white font-medium">
                  JR&#8209;Interieur is een praktische, uitvoerende partner die meedenkt van inventarisatie tot realisatie.
                </p>
              </div>
            </div>
          </div>
        </section>

        <UspBlocks />
        <CollectionGrid />
        <CircularDesign />
        <SolutionHighlights />
        <HighlightedProducts />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
