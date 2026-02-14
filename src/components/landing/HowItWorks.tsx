import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Upload, Brain, BarChart3, Pencil, LineChart } from "lucide-react";

const steps = [
  { icon: Upload, title: "Submit Pitch", desc: "Upload your pitch script or paste it directly.", color: "bg-blue/10 text-blue" },
  { icon: Brain, title: "AI Evaluation", desc: "Our AI analyzes structure, clarity, and impact.", color: "bg-green/10 text-green" },
  { icon: BarChart3, title: "Score & Feedback", desc: "Receive detailed scores across key dimensions.", color: "bg-yellow/10 text-yellow" },
  { icon: Pencil, title: "Improve Pitch", desc: "Apply targeted suggestions to refine your pitch.", color: "bg-red/10 text-red" },
  { icon: LineChart, title: "Track Progress", desc: "Monitor improvements across iterations.", color: "bg-cyan/10 text-cyan" },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 px-4 bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Five simple steps to transform your pitch from good to unforgettable.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="fade-up flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={`relative z-10 w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-4 transition-shadow hover:shadow-md`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-primary mb-2">Step {i + 1}</span>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
