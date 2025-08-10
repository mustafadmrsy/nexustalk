"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

type DownloadCTAProps = {
  href: string;
  label: string;
  subLabel?: string;
  download?: boolean;
};

export default function DownloadCTA({ href, label, subLabel, download }: DownloadCTAProps): React.ReactElement {
  return (
    <motion.a
      href={href}
      download={download}
      initial={{ y: 6, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 shadow-xl overflow-hidden"
    >
      <span aria-hidden className="absolute inset-0 rounded-xl blur opacity-40 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500" />
      <span
        aria-hidden
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[120%] transition-transform duration-700 group-hover:translate-x-[120%]"
      />
      <span className="relative z-[1] w-full rounded-[12px] bg-black/85 text-foreground px-6 py-3 text-sm font-medium flex items-center justify-center gap-2 backdrop-blur">
        <Download className="h-4 w-4" /> {label}
      </span>
      {subLabel && (
        <span className="absolute -bottom-5 text-[11px] text-foreground/70">{subLabel}</span>
      )}
    </motion.a>
  );
}


