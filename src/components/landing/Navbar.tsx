import { useEffect, useState } from "react";
import { Menu, X, Sparkles, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const links = ["Home", "About", "How It Works", "Features", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 w-[92%] max-w-4xl justify-center">
      {/* Pill navbar */}
      <nav
        className={`flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-lg border border-border transition-all duration-300 ${
          scrolled ? "px-3 py-1.5 shadow-sm" : "px-5 py-2.5"
        }`}
      >
        <button onClick={() => scrollTo("Home")} className="flex items-center gap-1.5 font-bold text-base mr-2 shrink-0">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="gradient-text font-extrabold tracking-tight">PitchAI</span>
        </button>

        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="px-2.5 py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary font-medium whitespace-nowrap"
            >
              {l}
            </button>
          ))}
        </div>

        <button
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary font-medium ml-1"
          onClick={() => navigate("/login")}
        >
          <LogIn className="w-3.5 h-3.5" /> Log in
        </button>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground ml-1" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Get Started - outside pill */}
      <Button
        size="sm"
        className="hidden md:inline-flex bg-foreground text-background rounded-full hover:bg-foreground/90 font-medium px-5 h-9 text-[13px] shrink-0 transition-all duration-200 hover:shadow-md"
        onClick={() => navigate("/login")}
      >
        Get Started
      </Button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-lg p-3 md:hidden">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="w-full px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors text-left rounded-lg hover:bg-secondary font-medium"
            >
              {l}
            </button>
          ))}
          <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-border">
            <Button
              size="sm"
              variant="outline"
              className="rounded-full font-medium"
              onClick={() => { setOpen(false); navigate("/login"); }}
            >
              <LogIn className="w-4 h-4 mr-1.5" /> Log in
            </Button>
            <Button
              size="sm"
              className="bg-foreground text-background rounded-full hover:bg-foreground/90 font-medium"
              onClick={() => { setOpen(false); navigate("/login"); }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
