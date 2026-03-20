import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import CabinetFeature from "@/components/sections/CabinetFeature";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <CabinetFeature />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
