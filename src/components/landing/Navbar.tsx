import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = ["Home", "About", "How It Works", "Features", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full transition-all duration-500 ${
        scrolled ? "px-4 py-2 max-w-2xl shadow-md" : "px-6 py-3 max-w-3xl"
      } w-[92%]`}
    >
      <div className="flex items-center justify-between">
        <button onClick={() => scrollTo("Home")} className="flex items-center gap-2 font-bold text-lg">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="gradient-text">PitchAI</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary"
            >
              {l}
            </button>
          ))}
          <Button
            size="sm"
            className="ml-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            onClick={() => scrollTo("Home")}
          >
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-1 pb-2">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-left rounded-lg hover:bg-secondary"
            >
              {l}
            </button>
          ))}
          <Button
            size="sm"
            className="mt-1 bg-primary text-primary-foreground rounded-full hover:bg-primary/90"
            onClick={() => scrollTo("Home")}
          >
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
