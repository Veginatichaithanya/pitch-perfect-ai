import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const scrollY = useParallax();
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      <div
        className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full bg-blue/8 blur-[100px] animate-pulse-glow"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-1/4 right-[15%] w-96 h-96 rounded-full bg-green/6 blur-[120px] animate-pulse-glow"
        style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-yellow/6 blur-[80px] animate-float"
        style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.2}px))` }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 mb-8 text-sm text-muted-foreground border border-border animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          AI-Powered Pitch Refinement
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-foreground tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Turn Your Ideas into{" "}
          <span className="gradient-text">Winning Pitches</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          AI-powered platform that evaluates and improves student pitch scripts with structured scoring and real-time feedback.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="bg-foreground text-background rounded-full px-8 shadow-lg hover:shadow-xl hover:bg-foreground/90 transition-all font-semibold text-base" onClick={() => navigate("/login")}>
            Get Started Free <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-border hover:bg-secondary font-medium text-base" onClick={() => navigate("/login")}>
            <LogIn className="w-4 h-4 mr-1.5" /> Log in
          </Button>
        </div>
      </div>
    </section>
  );
}
