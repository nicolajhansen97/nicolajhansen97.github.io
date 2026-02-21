export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "app" | "game" | "utility" | "web";
  appStoreUrl?: string;
  playStoreUrl?: string;
  liveUrl?: string;
  sourceUrl?: string;
  aiAssisted?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
