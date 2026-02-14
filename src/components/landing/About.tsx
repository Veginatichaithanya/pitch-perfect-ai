import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle, Bot, Target, TrendingUp } from "lucide-react";

const items = [
  { icon: AlertTriangle, title: "The Problem", desc: "Students often have brilliant ideas but struggle to deliver compelling pitches that capture attention and convey value.", color: "bg-red/10 text-red", ring: "ring-red/20" },
  { icon: Bot, title: "AI Virtual Judge", desc: "Our AI acts as a virtual panel of judges, evaluating your pitch across multiple dimensions with unbiased, structured analysis.", color: "bg-blue/10 text-blue", ring: "ring-blue/20" },
  { icon: Target, title: "Pinpoint Weaknesses", desc: "Get precise feedback on structure, clarity, persuasion, and delivery — exactly where your pitch needs improvement.", color: "bg-yellow/10 text-yellow", ring: "ring-yellow/20" },
  { icon: TrendingUp, title: "Track Growth", desc: "Monitor your progress over multiple iterations and watch your pitch scores climb as you refine your presentation.", color: "bg-green/10 text-green", ring: "ring-green/20" },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Why PitchAI</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Pitch smarter, not harder
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Bridge the gap between great ideas and great presentations with AI-powered pitch coaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="fade-up group rounded-2xl p-6 bg-background border border-border/80 hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-foreground/[0.03] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-4 ring-1 ${item.ring} transition-transform duration-300 group-hover:scale-110`}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
