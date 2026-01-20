import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import EducationLinks from "@/components/sections/education-links";
import CollectionGrid from "@/components/sections/collection-grid";
import CircularDesign from "@/components/sections/circular-design";
import FeaturedProjects from "@/components/sections/featured-projects";
import LearningHealthcare from "@/components/sections/learning-healthcare";
import HighlightedProducts from "@/components/sections/highlighted-products";

import BlogGrid from "@/components/sections/blog-grid";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EducationLinks />
        <CollectionGrid />
        <CircularDesign />
        <FeaturedProjects />
        <LearningHealthcare />
        <HighlightedProducts />

        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
