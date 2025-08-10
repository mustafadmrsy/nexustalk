"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Sadeleştirilmiş navigasyon
const navItems: Array<{ href: string; label: string }> = [
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/changelog", label: "Changelog" },
  { href: "/support", label: "Support" },
];

export default function Navbar(): React.ReactElement {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/70">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-xl p-[1px] bg-gradient-to-br from-purple-500/40 via-cyan-500/40 to-emerald-500/40">
              <div className="h-full w-full rounded-[11px] bg-background overflow-hidden flex items-center justify-center">
                <Image src="/images/logo.png" alt="Nexus logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </div>
            <span className="font-semibold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400">Nexus</span>
          </Link>

          <nav className="relative hidden md:flex items-center gap-2 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href} className="relative px-2 py-1.5">
                  <Link
                    href={item.href}
                    className="px-2 py-1 rounded-md transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] w-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 rounded"
                    />
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/download"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition"
            >
              Download
            </Link>
            <a
              href="https://github.com/mustafadmrsy/Nexus"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-3 py-2 text-sm font-medium hover:bg-white/5 transition"
            >
              GitHub
            </a>
            <button
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 px-3 py-2 text-sm font-medium hover:bg-white/5 transition"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="md:hidden border-b border-white/10 bg-background/95 backdrop-blur"
          >
            <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="px-2 py-2 rounded-md hover:bg-white/5">
                  {item.label}
                </Link>
              ))}
              <Link href="/download" className="w-full inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition">
                Download
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


