import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Alliance Center for Last War",
    description:
      "Alliance management tool for Last War Survival. Coordinate activities, manage roles, schedule events across timezones, and get push notification reminders.",
    image: "/images/projects/project-1.svg",
    tags: ["iOS", "Android", "Push Notifications", "Real-time Sync"],
    category: "app",
    appStoreUrl: "https://apps.apple.com/dk/app/alliance-center-for-last-war/id6758313587",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nicolajhansen97.aclw",
  },
  {
    id: "2",
    title: "Freezely",
    description:
      "Track your freezer inventory, reduce food waste, and share with family. Features expiration alerts, custom compartments, and real-time sync across devices.",
    image: "/images/projects/project-2.svg",
    tags: ["iOS", "Android", "Family Sharing", "Inventory"],
    category: "utility",
    appStoreUrl: "https://apps.apple.com/dk/app/freezely/id6759265489",
  },
  {
    id: "3",
    title: "Count Runners",
    description:
      "A fun running game combining math challenges with obstacle avoidance. Guide your crowd through math gates, outsmart enemies, and grow your team.",
    image: "/images/projects/project-3.svg",
    tags: ["iOS", "Android", "Game", "Math"],
    category: "game",
    appStoreUrl: "https://apps.apple.com/dk/app/count-runners/id6758559815",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.Nicolaj.CountRunners",
  },
  {
    id: "4",
    title: "Hangman Classic",
    description:
      "The classic Hangman word-guessing game. Choose from multiple categories or play two-player mode where you create your own words. No ads, no tracking.",
    image: "/images/projects/project-4.svg",
    tags: ["iOS", "Android", "Puzzle", "Multiplayer"],
    category: "game",
    appStoreUrl: "https://apps.apple.com/dk/app/hangman-classic/id6448302320",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nicolaj.hangman",
  },
];
