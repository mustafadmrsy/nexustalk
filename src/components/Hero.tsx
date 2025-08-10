"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero(): React.ReactElement {
  const [showImage, setShowImage] = React.useState(true);
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-purple-600/40 to-cyan-500/40 blur-3xl animate-[spin_30s_linear_infinite]" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/40 to-blue-500/40 blur-3xl animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 md:pt-20 md:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-semibold tracking-tight"
        >
          Nexus
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400"> ile </span>
          modern iletişim
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg text-foreground/75 max-w-2xl"
        >
          Gerçek zamanlı sesli sohbet, düşük gecikme, ekran paylaşımı ve topluluk yönetimi. Hepsi tek bir hafif masaüstü uygulamasında.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 md:mt-8 flex items-center gap-3 flex-wrap"
        >
          <Link href="/features" className="text-sm underline text-foreground/70 hover:text-foreground">
            Özellikleri keşfet
          </Link>
        </motion.div>

        {/* Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12"
        >
          {/* Mobile-specific mockup: bigger, taller frame, object-contain */}
          <div className="md:hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-lg">
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-purple-500/50 via-cyan-500/40 to-emerald-500/50">
              <div className="relative aspect-[3/2] w-full rounded-[18px] overflow-hidden bg-black/30">
                {showImage && (
                  <Image
                    src="/images/hero.png"
                    alt="Nexus uygulama ekran görüntüsü"
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="object-contain"
                    onError={() => setShowImage(false)}
                  />
                )}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
              </div>
            </div>
          </div>

          {/* Desktop/tablet mockup: original wide presentation */}
          <div className="hidden md:block rounded-2xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 overflow-hidden">
            <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-emerald-500/40">
              <motion.div
                whileHover={{ rotateX: 2, rotateY: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 150, damping: 14 }}
                style={{ transformPerspective: 1000 }}
                className="relative aspect-[16/9] w-full overflow-hidden rounded-[calc(theme(borderRadius.xl)-1px)] bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-emerald-500/20"
              >
                {showImage && (
                  <Image
                    src="/images/hero.png"
                    alt="Nexus uygulama ekran görüntüsü"
                    fill
                    priority
                    quality={90}
                    sizes="(min-width: 1024px) 1000px, 100vw"
                    className="object-cover"
                    onError={() => setShowImage(false)}
                  />
                )}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


