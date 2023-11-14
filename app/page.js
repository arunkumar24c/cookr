import React from "react";
import Hero from "./homecomponent/Hero";
import Banner from "./homecomponent/Banner";
import Download from "./homecomponent/Download";
import Testimonial from "./homecomponent/Testimonial";
import HowIts from "./homecomponent/HowIts";
import Contact from "./homecomponent/Contact";
import Card from "./homecomponent/Card";
import Faq from "./homecomponent/Faq";

export const metadata = {
  title: "Cooker",
  description: " Description",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Download />

      <Banner />
      <Card />

      <HowIts />
      <Testimonial />
      <Contact />

      <Faq />
    </main>
  );
}
