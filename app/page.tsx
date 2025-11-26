import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      {/* Projects-first layout inspired by BIG (big.dk), without a hero banner */}
      <Projects />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
