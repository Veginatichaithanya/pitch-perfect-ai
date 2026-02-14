import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import WaveDivider from "@/components/landing/WaveDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <WaveDivider color="hsl(var(--secondary) / 0.3)" />
      <About />
      <WaveDivider color="hsl(var(--secondary) / 0.4)" />
      <HowItWorks />
      <WaveDivider color="hsl(var(--secondary) / 0.4)" flip />
      <Features />
      <WaveDivider color="hsl(var(--secondary) / 0.3)" />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
