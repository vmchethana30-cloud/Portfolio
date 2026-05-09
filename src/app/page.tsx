import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
