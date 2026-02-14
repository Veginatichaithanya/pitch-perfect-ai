import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto gradient-bg rounded-3xl p-12 md:p-16 text-center relative overflow-hidden fade-up">
        {/* Decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--glow)/0.3),transparent_60%)]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Great Ideas Deserve Great Presentation
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Stop guessing. Start refining with AI-powered feedback that turns good pitches into winning ones.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground text-background rounded-full px-10 hover:bg-primary-foreground/90 glow-hover font-semibold"
          >
            Start Refining Now <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
