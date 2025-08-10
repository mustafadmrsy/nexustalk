"use client";

import React from "react";
import { motion } from "framer-motion";

type PlatformCardProps = {
  title: string;
  subtitle?: string;
  cta?: React.ReactNode;
  footnote?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

export default function PlatformCard({ title, subtitle, cta, footnote, disabled, children }: PlatformCardProps): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      whileHover={disabled ? undefined : { scale: 1.02, y: -2 }}
      className={`group relative rounded-2xl p-[1px] transition-colors ${
        disabled
          ? "bg-white/10"
          : "bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-emerald-500/30 hover:from-purple-500/50 hover:via-cyan-500/50 hover:to-emerald-500/50"
      }`}
    >
      <div className="rounded-[1rem] bg-black/80 backdrop-blur border border-white/10 p-5 shadow-md group-hover:shadow-emerald-500/10 transition-shadow">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            {subtitle && <p className="text-xs text-foreground/70 mt-0.5">{subtitle}</p>}
          </div>
          {cta}
        </div>
        {children}
        {footnote && (
          <p className="mt-3 text-[11px] text-center text-foreground/60">{footnote}</p>
        )}
      </div>
    </motion.div>
  );
}


