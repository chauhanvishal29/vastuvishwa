import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PortfolioGrid from "./components/PortfolioGrid";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioGrid />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
