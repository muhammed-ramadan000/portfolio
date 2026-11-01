"use client";

import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT, SITE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";
import type { ContactLink } from "@/types";

const ICONS: Record<ContactLink["icon"], typeof Mail> = {
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
};

export default function Contact() {
  const email = CONTACT.find((c) => c.icon === "mail")!;
  const whatsapp = CONTACT.find((c) => c.icon === "whatsapp")!;

  return (
    <section id="contact" className="relative px-6 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="// 05_contact"
          title="Let's build something."
          description={`Based in ${SITE.location}, working with clients everywhere. Open to full-time roles and freelance projects.`}
        />

        <RevealOnScroll>
          <GlassCard className="p-6 sm:p-10" glow="amber">
            <div className="flex flex-wrap gap-4">
              <MagneticButton href={email.href} variant="primary">
                <Mail className="h-4 w-4" />
                Email Me
              </MagneticButton>
              <MagneticButton href={whatsapp.href} variant="ghost">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </MagneticButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {CONTACT.map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-line px-4 py-3.5 transition-colors duration-300 hover:border-teal/50 hover:bg-white/5"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/5 text-teal transition-colors group-hover:bg-teal/15">
                      <Icon className="h-[1.125rem] w-[1.125rem]" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted">{item.label}</span>
                      <span className="block text-sm font-medium text-ink">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
