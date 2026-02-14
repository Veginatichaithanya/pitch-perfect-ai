import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto bg-foreground rounded-3xl p-12 md:p-16 text-center relative overflow-hidden fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--blue)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--green)/0.1),transparent_50%)]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-background mb-4 tracking-tight">
            Great Ideas Deserve Great Presentation
          </h2>
          <p className="text-background/70 max-w-lg mx-auto mb-8 text-lg">
            Stop guessing. Start refining with AI-powered feedback that turns good pitches into winning ones.
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground rounded-full px-10 hover:bg-background/90 font-bold shadow-lg hover:shadow-xl transition-all text-base"
          >
            Start Refining Now <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
