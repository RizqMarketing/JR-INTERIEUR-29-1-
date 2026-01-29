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
