"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { SectionHeading } from "@/components/ui/section-heading";

const stats = [
  { value: 4, suffix: "", label: "Published Apps" },
  { value: 2, suffix: "", label: "Platforms" },
  { value: 5, suffix: "+", label: "Years Coding" },
  { value: 100, suffix: "%", label: "Passion" },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="About Me"
            subtitle="Get to know the person behind the code"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-2">
                <div className="rounded-xl overflow-hidden aspect-square bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                  <Image
                    src="/images/hero-avatar.svg"
                    alt="Nicolaj Hansen"
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl -z-10 opacity-20 blur-xl" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Passionate about creating{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  digital experiences
                </span>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                I&apos;m Nicolaj, a backend developer from Denmark who loves building
                robust systems and shipping real products. I&apos;ve published multiple
                apps on both the App Store and Google Play, from gaming tools to
                utility apps used by people around the world.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My focus is on server architecture, APIs, databases, and the
                invisible infrastructure that makes great apps possible. When
                I&apos;m not writing backend code, I&apos;m exploring new technologies
                or working on my next app idea.
              </p>

              <div className="h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
