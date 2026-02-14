import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Upload, Brain, BarChart3, Pencil, LineChart } from "lucide-react";

const steps = [
  { icon: Upload, title: "Submit Pitch", desc: "Upload your pitch script or paste it directly." },
  { icon: Brain, title: "AI Evaluation", desc: "Our AI analyzes structure, clarity, and impact." },
  { icon: BarChart3, title: "Score & Feedback", desc: "Receive detailed scores across key dimensions." },
  { icon: Pencil, title: "Improve Pitch", desc: "Apply targeted suggestions to refine your pitch." },
  { icon: LineChart, title: "Track Progress", desc: "Monitor improvements across iterations." },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Five simple steps to transform your pitch from good to unforgettable.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 gradient-bg opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="fade-up flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4 glow-hover">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-mono text-accent mb-2">Step {i + 1}</span>
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
