import { useState, useEffect } from "react";
import Header from "./Component/Header.jsx";
import Hero from "./Component/Hero.jsx";
import AboutUs from "./Component/About.jsx";
import FeaturedProduucts from "./Component/ProductSection.jsx";
import Solutions from "./Component/Solutions.jsx";
import News from "./Component/NewsSection.jsx";
import ContactForm from "./Component/ContactForm.jsx";
import Footer from "./Component/Footer.jsx";
import HighLightsComponnet from "./Component/HighLightsComponnet.jsx";
import { useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturedProduucts />
      <Solutions />
      {/* <News /> */}
      <HighLightsComponnet />
      <ContactForm />
    </>
  );
}

export default Home;
