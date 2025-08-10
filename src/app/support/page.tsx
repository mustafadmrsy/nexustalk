import type { Metadata } from "next";
import React from "react";
import { Mail, Github, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexus Destek",
  description: "Nexus için iletişim ve destek kanalları.",
};

const channels = [
  {
    icon: Mail,
    title: "E-posta",
    desc: "Sorularınız ve talepleriniz için e-posta ile ulaşın.",
    action: { href: "mailto:mustafadmrsy125@gmail.com", label: "mustafadmrsy125@gmail.com" },
  },
  {
    icon: Github,
    title: "Hata Bildirimi",
    desc: "Karşılaştığınız hataları veya önerilerinizi Issues üzerinden iletin.",
    action: { href: "https://github.com/mustafadmrsy/Nexus/issues", label: "GitHub Issues" },
  },
  {
    icon: FileText,
    title: "Hızlı Başlangıç",
    desc: "Kurulum ve kullanım için kısa rehber.",
    action: { href: "https://github.com/mustafadmrsy/Nexus/blob/main/QUICK_START.md", label: "Quick Start" },
  },
];

export default function SupportPage(): React.ReactElement {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Destek</h1>
      <p className="mt-2 text-foreground/70 max-w-2xl">Sorununuzu en hızlı şekilde çözebilmek için aşağıdaki kanallardan birini kullanın.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {channels.map((c) => (
          <div key={c.title} className="rounded-xl border border-black/5 dark:border-white/10 p-5 bg-black/5 dark:bg-white/5">
            <c.icon className="h-6 w-6" />
            <h3 className="mt-3 font-medium">{c.title}</h3>
            <p className="text-sm text-foreground/70 mt-1">{c.desc}</p>
            <a className="inline-flex mt-3 text-sm underline" href={c.action.href} target={c.action.href.startsWith('http') ? "_blank" : undefined} rel={c.action.href.startsWith('http') ? "noreferrer noopener" : undefined}>
              {c.action.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}


