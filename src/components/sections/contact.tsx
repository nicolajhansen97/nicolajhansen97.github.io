"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Replace YOUR_FORM_ID with the ID from formspree.io/dashboard after creating a free form
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const contactInfo = [
  { icon: Mail, label: "Email", value: "nicolajdeveloper@gmail.com" },
  { icon: MapPin, label: "Location", value: "Denmark" },
];

type FormState = { success: boolean; message: string } | null;

export function Contact() {
  const [state, setState] = useState<FormState>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setState(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    // Basic client-side validation
    if (data.name.length < 2) {
      setState({ success: false, message: "Name must be at least 2 characters" });
      setIsPending(false);
      return;
    }
    if (!data.email.includes("@")) {
      setState({ success: false, message: "Invalid email address" });
      setIsPending(false);
      return;
    }
    if (data.subject.length < 5) {
      setState({ success: false, message: "Subject must be at least 5 characters" });
      setIsPending(false);
      return;
    }
    if (data.message.length < 10) {
      setState({ success: false, message: "Message must be at least 10 characters" });
      setIsPending(false);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState({ success: true, message: "Message sent! I'll get back to you soon." });
        form.reset();
      } else {
        setState({ success: false, message: "Something went wrong. Please try again." });
      }
    } catch {
      setState({ success: false, message: "Network error. Please try again." });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a question or want to say hi? Reach out!"
          />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Let&apos;s build something{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    amazing
                  </span>
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  I&apos;m always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <Icon className="text-cyan-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">{label}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input name="name" label="Name" placeholder="Your name" required />
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <Input name="subject" label="Subject" placeholder="Project Inquiry" required />
              <Textarea
                name="message"
                label="Message"
                placeholder="Tell me about your project..."
                required
              />

              {state && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    state.success
                      ? "bg-green-400/10 text-green-400 border border-green-400/20"
                      : "bg-red-400/10 text-red-400 border border-red-400/20"
                  }`}
                >
                  {state.message}
                </div>
              )}

              <Button type="submit" size="lg" disabled={isPending} className="w-full sm:w-auto">
                {isPending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
