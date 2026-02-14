import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Scale, ListChecks, SearchX, GitCompare, TrendingUp, Zap } from "lucide-react";

const features = [
  { icon: Scale, title: "AI Judge Simulation", desc: "Simulates a real judging panel with multi-criteria evaluation.", color: "bg-blue/10 text-blue", ring: "ring-blue/20" },
  { icon: ListChecks, title: "Structured Scoring", desc: "Get scored across clarity, impact, feasibility, and delivery.", color: "bg-green/10 text-green", ring: "ring-green/20" },
  { icon: SearchX, title: "Weakness Detection", desc: "Pinpoints exactly where your pitch loses momentum or clarity.", color: "bg-red/10 text-red", ring: "ring-red/20" },
  { icon: GitCompare, title: "Version Comparison", desc: "Compare iterations side-by-side to see measurable improvement.", color: "bg-yellow/10 text-yellow", ring: "ring-yellow/20" },
  { icon: TrendingUp, title: "Pitch Success Predictor", desc: "AI-driven prediction of how well your pitch will perform.", color: "bg-cyan/10 text-cyan", ring: "ring-cyan/20" },
  { icon: Zap, title: "Instant Feedback", desc: "Real-time analysis and suggestions as you refine your script.", color: "bg-blue/10 text-blue", ring: "ring-blue/20" },
];

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Features</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Everything you need to win
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Powerful tools to craft a pitch that stands out.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="fade-up group rounded-2xl p-6 bg-background border border-border/80 hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-foreground/[0.03] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center mb-4 ring-1 ${f.ring} transition-transform duration-300 group-hover:scale-110`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
