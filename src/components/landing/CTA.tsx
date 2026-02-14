import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--cyan)/0.2),transparent_60%)]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-foreground mb-4 tracking-tight">
            Great Ideas Deserve Great Presentation
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Stop guessing. Start refining with AI-powered feedback that turns good pitches into winning ones.
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground rounded-full px-10 hover:bg-background/90 font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Refining Now <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
