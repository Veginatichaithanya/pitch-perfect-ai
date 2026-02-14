import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Scale, ListChecks, SearchX, GitCompare, TrendingUp, Zap } from "lucide-react";

const features = [
  { icon: Scale, title: "AI Judge Simulation", desc: "Simulates a real judging panel with multi-criteria evaluation.", color: "bg-blue/10 text-blue" },
  { icon: ListChecks, title: "Structured Scoring", desc: "Get scored across clarity, impact, feasibility, and delivery.", color: "bg-green/10 text-green" },
  { icon: SearchX, title: "Weakness Detection", desc: "Pinpoints exactly where your pitch loses momentum or clarity.", color: "bg-red/10 text-red" },
  { icon: GitCompare, title: "Version Comparison", desc: "Compare iterations side-by-side to see measurable improvement.", color: "bg-yellow/10 text-yellow" },
  { icon: TrendingUp, title: "Pitch Success Predictor", desc: "AI-driven prediction of how well your pitch will perform.", color: "bg-cyan/10 text-cyan" },
  { icon: Zap, title: "Instant Feedback", desc: "Real-time analysis and suggestions as you refine your script.", color: "bg-blue/10 text-blue" },
];

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
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
              className="fade-up card-elevated rounded-2xl p-6 group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <f.icon className="w-6 h-6" />
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
