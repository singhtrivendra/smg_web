
import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
import MapSection from "@/components/MapSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation logoPath="images/shared image (2).jpeg" />
      <main className="flex-grow">
        <div className="mt-16">
          <HeroSection />
          <FeaturesSection />
          <ProductsSection />
          <MapSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
