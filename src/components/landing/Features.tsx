import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Scale, ListChecks, SearchX, GitCompare, TrendingUp, Zap } from "lucide-react";

const features = [
  { icon: Scale, title: "AI Judge Simulation", desc: "Simulates a real judging panel with multi-criteria evaluation." },
  { icon: ListChecks, title: "Structured Scoring", desc: "Get scored across clarity, impact, feasibility, and delivery." },
  { icon: SearchX, title: "Weakness Detection", desc: "Pinpoints exactly where your pitch loses momentum or clarity." },
  { icon: GitCompare, title: "Version Comparison", desc: "Compare iterations side-by-side to see measurable improvement." },
  { icon: TrendingUp, title: "Pitch Success Predictor", desc: "AI-driven prediction of how well your pitch will perform." },
  { icon: Zap, title: "Instant Feedback", desc: "Real-time analysis and suggestions as you refine your script." },
];

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to craft a pitch that wins.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="fade-up glass rounded-2xl p-6 glow-hover group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:gradient-bg transition-colors duration-300">
                <f.icon className="w-6 h-6 text-accent group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
