import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";

const quickLinks = ["Home", "About", "How It Works", "Features", "Contact"];
const socials = [
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Mail, href: "#" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="border-t border-border/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="gradient-text">PitchAI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered pitch refinement for students and innovators.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
            <div className="flex flex-col gap-1.5">
              {quickLinks.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:gradient-bg transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PitchAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
