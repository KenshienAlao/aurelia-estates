import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedResidence from "@/components/FeaturedResidence";
import SelectedProperties from "@/components/SelectedProperties";
import Locations from "@/components/Locations";
import BrandStory from "@/components/BrandStory";
import TeamAndTestimonial from "@/components/TeamAndTestimonial";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import NotFound from "@/components/NotFound";
import isKnownRoute from "./lib/known-route";

function App() {
  const [isHome, setIsHome] = useState(isKnownRoute);

  useEffect(() => {
    const handlePopState = () => {
      setIsHome(isKnownRoute());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (!isHome) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <FeaturedResidence />
        <SelectedProperties />
        <Locations />
        <BrandStory />
        <TeamAndTestimonial />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
