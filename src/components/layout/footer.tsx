import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialIcons = [
  { icon: Github, href: "https://github.com/nicolajhansen97", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nicolaj-m%C3%B8ller-hansen-6460371b5/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nicolajdeveloper@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              NH.
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              Crafting digital experiences from Denmark.
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Nicolaj Hansen. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
