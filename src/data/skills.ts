import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "PostgreSQL / SQL", level: 88 },
    ],
  },
  {
    title: "Mobile / Apps",
    icon: "Smartphone",
    skills: [
      { name: "iOS (Swift)", level: 85 },
      { name: "Android (Kotlin)", level: 80 },
      { name: "Firebase", level: 88 },
      { name: "Push Notifications", level: 90 },
    ],
  },
  {
    title: "Infrastructure",
    icon: "Wrench",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS / Cloud", level: 82 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Git & GitHub", level: 95 },
    ],
  },
  {
    title: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML / CSS", level: 92 },
    ],
  },
];
