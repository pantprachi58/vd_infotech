import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoreServices from "@/components/CoreServices";
import CaseStudies from "@/components/CaseStudies";
import Industries from "@/components/Industries";
import Consultation from "@/components/Consultation";
import StatsBar from "@/components/StatsBar";
import WhatWeDo from "@/components/WhatWeDo";
// import Ecosystem from "@/components/Ecosystem";
import Tools from "@/components/Tools";
import Process from "@/components/Process";
import Experts from "@/components/Experts";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import GrowthEcosystem from "@/components/Ecosystem";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
       <main>
        <Hero />
        <CoreServices />
        <CaseStudies />
        <Industries /> 
         <Consultation />
        <StatsBar />
        <WhatWeDo />
        <GrowthEcosystem/>
        <Tools />
        <Process />
        <Experts />
        <Clients />
        <Testimonials />
        <Pricing />
         <Blog />
        <Faq />
        <FinalCta />
       </main> 
        <Footer />
    </>
  );
}
