import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle, Bot, Target, TrendingUp } from "lucide-react";

const items = [
  { icon: AlertTriangle, title: "The Problem", desc: "Students often have brilliant ideas but struggle to deliver compelling pitches that capture attention and convey value." },
  { icon: Bot, title: "AI Virtual Judge", desc: "Our AI acts as a virtual panel of judges, evaluating your pitch across multiple dimensions with unbiased, structured analysis." },
  { icon: Target, title: "Pinpoint Weaknesses", desc: "Get precise feedback on structure, clarity, persuasion, and delivery — exactly where your pitch needs improvement." },
  { icon: TrendingUp, title: "Track Growth", desc: "Monitor your progress over multiple iterations and watch your pitch scores climb as you refine your presentation." },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why <span className="gradient-text">PitchAI</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bridge the gap between great ideas and great presentations with AI-powered pitch coaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="fade-up glass rounded-2xl p-6 glow-hover"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
