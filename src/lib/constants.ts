import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Nicolaj Hansen",
  title: "Nicolaj Hansen — Web Developer",
  description:
    "Creative web developer from Denmark, building modern digital experiences with passion and precision.",
  url: "https://nicolajhansen.dev",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/nicolajhansen97", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/nicolaj-m%C3%B8ller-hansen-6460371b5/", icon: "Linkedin" },
  { platform: "Email", url: "mailto:nicolajdeveloper@gmail.com", icon: "Mail" },
];
