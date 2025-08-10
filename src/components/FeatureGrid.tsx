"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Mic, MonitorUp, Server, Users } from "lucide-react";

const features = [
  { icon: Zap, title: "Düşük gecikme", desc: "Gerçek zamanlı iletişim için optimize altyapı." },
  { icon: Mic, title: "Sesli kanallar", desc: "Net ve stabil sesli görüşmeler." },
  { icon: MonitorUp, title: "Ekran paylaşımı", desc: "Yüksek kalite ve düşük gecikme." },
  { icon: Shield, title: "Güvenlik", desc: "Güvenli bağlantılar ve veri koruma." },
  { icon: Server, title: "Ölçeklenebilir", desc: "Büyük topluluklar için güçlü altyapı." },
  { icon: Users, title: "Topluluk", desc: "Roller, izinler ve moderasyon araçları." },
];

export default function FeatureGrid(): React.ReactElement {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold"
      >
        Öne çıkan özellikler
      </motion.h2>
      <div className="mt-6 md:mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-xl border border-black/5 dark:border-white/10 p-5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            <f.icon className="h-6 w-6" />
            <h3 className="mt-3 font-medium">{f.title}</h3>
            <p className="text-sm text-foreground/70 mt-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


