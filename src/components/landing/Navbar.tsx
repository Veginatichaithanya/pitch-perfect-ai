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
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center rounded-full bg-background/80 backdrop-blur-lg border border-border transition-all duration-300 ${
        scrolled ? "px-4 py-2 shadow-sm" : "px-5 py-2.5"
      } w-auto max-w-[95%]`}
    >
      <button onClick={() => scrollTo("Home")} className="flex items-center gap-1.5 font-bold text-base px-2 shrink-0">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="gradient-text font-extrabold tracking-tight">PitchAI</span>
      </button>

      <div className="hidden md:flex items-center gap-0.5 mx-1">
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

      <div className="hidden md:flex items-center gap-1.5 ml-1">
        <button
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary font-medium whitespace-nowrap"
          onClick={() => navigate("/login")}
        >
          <LogIn className="w-3.5 h-3.5" /> Log in
        </button>
        <Button
          size="sm"
          className="bg-foreground text-background rounded-full hover:bg-foreground/90 font-medium px-4 h-8 text-[13px] shrink-0"
          onClick={() => navigate("/login")}
        >
          Get Started
        </Button>
      </div>

      <button className="md:hidden text-foreground ml-2 px-1" onClick={() => setOpen(!open)}>
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="absolute top-full mt-2 right-0 left-0 bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-lg p-3 md:hidden">
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
            <Button size="sm" variant="outline" className="rounded-full font-medium" onClick={() => { setOpen(false); navigate("/login"); }}>
              <LogIn className="w-4 h-4 mr-1.5" /> Log in
            </Button>
            <Button size="sm" className="bg-foreground text-background rounded-full hover:bg-foreground/90 font-medium" onClick={() => { setOpen(false); navigate("/login"); }}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
