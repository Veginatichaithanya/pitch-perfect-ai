import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Upload, Brain, BarChart3, Pencil, LineChart } from "lucide-react";

const steps = [
  { icon: Upload, title: "Submit Pitch", desc: "Upload your pitch script or paste it directly.", color: "bg-blue/10 text-blue", ring: "ring-blue/20" },
  { icon: Brain, title: "AI Evaluation", desc: "Our AI analyzes structure, clarity, and impact.", color: "bg-green/10 text-green", ring: "ring-green/20" },
  { icon: BarChart3, title: "Score & Feedback", desc: "Receive detailed scores across key dimensions.", color: "bg-yellow/10 text-yellow", ring: "ring-yellow/20" },
  { icon: Pencil, title: "Improve Pitch", desc: "Apply targeted suggestions to refine your pitch.", color: "bg-red/10 text-red", ring: "ring-red/20" },
  { icon: LineChart, title: "Track Progress", desc: "Monitor improvements across iterations.", color: "bg-cyan/10 text-cyan", ring: "ring-cyan/20" },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 px-4 bg-secondary/40" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">How it works</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Five steps to a perfect pitch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From submission to success — a streamlined refinement process.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="fade-up flex flex-col items-center text-center group"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={`relative z-10 w-14 h-14 rounded-2xl ${step.color} ring-1 ${step.ring} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-primary/70 uppercase tracking-widest mb-1.5">Step {i + 1}</span>
                <h3 className="font-bold mb-1 text-sm">{step.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
