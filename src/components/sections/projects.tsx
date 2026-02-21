"use client";

import { useState } from "react";
import Image from "next/image";
import { Smartphone, Gamepad2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const categories = ["all", "app", "game", "utility"] as const;

const categoryLabels: Record<string, string> = {
  all: "All",
  app: "Apps",
  game: "Games",
  utility: "Utilities",
};

export function Projects() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="My Apps"
            subtitle="Published on the App Store & Google Play"
          />
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-4 py-1.5 sm:px-5 sm:py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                  active === cat
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {active === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{categoryLabels[cat]}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-medium text-white border border-white/10">
                        {project.category === "game" ? (
                          <Gamepad2 size={12} />
                        ) : (
                          <Smartphone size={12} />
                        )}
                        {project.category === "game" ? "Game" : project.category === "utility" ? "Utility" : "App"}
                      </span>
                    </div>
                    {/* AI badge */}
                    {project.aiAssisted && (
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-violet-500/20 backdrop-blur-sm text-xs font-medium text-violet-300 border border-violet-400/30">
                          <Sparkles size={11} />
                          Made with AI
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    {/* Store links */}
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-white/5">
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          App Store
                        </a>
                      )}
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M3.18 23.67c-.4-.24-.68-.69-.68-1.2V1.53C2.5.83 2.97.27 3.6.1l10.55 11.9L3.18 23.67zm13.9-9.36l2.74 1.58c1.41.82 1.41 2.15 0 2.97l-3.22 1.85-3.03-3.42 3.51-2.98zM5.03 1.24L16.11 12l-3.51 2.98L5.03 1.24zm11.89 7.89l-2.85 2.42L5.67.55l11.25 8.58z" />
                          </svg>
                          Google Play
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
