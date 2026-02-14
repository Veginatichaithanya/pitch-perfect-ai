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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full bg-background/80 backdrop-blur-lg border border-border ${
        scrolled ? "px-4 py-2 max-w-2xl shadow-sm" : "px-6 py-3 max-w-3xl"
      } w-[92%] transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <button onClick={() => scrollTo("Home")} className="flex items-center gap-2 font-bold text-lg">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="gradient-text font-extrabold tracking-tight">PitchAI</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary font-medium"
            >
              {l}
            </button>
          ))}
          <div className="flex items-center gap-2 ml-3">
            <Button
              size="sm"
              variant="ghost"
              className="rounded-full text-muted-foreground hover:text-foreground font-medium"
              onClick={() => navigate("/login")}
            >
              <LogIn className="w-4 h-4 mr-1.5" /> Log in
            </Button>
            <Button
              size="sm"
              className="bg-foreground text-background rounded-full hover:bg-foreground/90 font-medium px-5"
              onClick={() => navigate("/login")}
            >
              Get Started
            </Button>
          </div>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-1 pb-3 border-t border-border/50 pt-3">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors text-left rounded-lg hover:bg-secondary font-medium"
            >
              {l}
            </button>
          ))}
          <div className="flex flex-col gap-2 mt-2 px-1">
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
    </nav>
  );
}
