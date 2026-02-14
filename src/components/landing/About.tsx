import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle, Bot, Target, TrendingUp } from "lucide-react";

const items = [
  { icon: AlertTriangle, title: "The Problem", desc: "Students often have brilliant ideas but struggle to deliver compelling pitches that capture attention and convey value.", color: "bg-red/10 text-red" },
  { icon: Bot, title: "AI Virtual Judge", desc: "Our AI acts as a virtual panel of judges, evaluating your pitch across multiple dimensions with unbiased, structured analysis.", color: "bg-blue/10 text-blue" },
  { icon: Target, title: "Pinpoint Weaknesses", desc: "Get precise feedback on structure, clarity, persuasion, and delivery — exactly where your pitch needs improvement.", color: "bg-yellow/10 text-yellow" },
  { icon: TrendingUp, title: "Track Growth", desc: "Monitor your progress over multiple iterations and watch your pitch scores climb as you refine your presentation.", color: "bg-green/10 text-green" },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
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
              className="fade-up card-elevated rounded-2xl p-6"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6" />
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
