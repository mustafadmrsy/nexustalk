import Link from "next/link";
import React from "react";

export default function Footer(): React.ReactElement {
  return (
    <footer className="mt-12 bg-background/70 backdrop-blur">
      <div className="border-t border-white/10">
        {/* Desktop/Tablet: 4 sütunlu detaylı footer */}
        <div className="mx-auto max-w-6xl px-4 py-12 hidden md:grid grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-foreground/60">Product</h4>
            <ul className="mt-3 space-y-2">
              <li><Link href="/features" className="hover:underline">Features</Link></li>
              <li><Link href="/download" className="hover:underline">Download</Link></li>
              <li><Link href="/changelog" className="hover:underline">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-foreground/60">Company</h4>
            <ul className="mt-3 space-y-2">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/support" className="hover:underline">Support</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-foreground/60">Resources</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="https://github.com/mustafadmrsy/Nexus" target="_blank" rel="noreferrer noopener" className="hover:underline">GitHub Repo</a></li>
              <li><a href="https://github.com/mustafadmrsy/Nexus/blob/main/QUICK_START.md" target="_blank" rel="noreferrer noopener" className="hover:underline">Quick Start</a></li>
              <li><a href="https://github.com/mustafadmrsy/Nexus/blob/main/BUILD_DEPLOY_README.md" target="_blank" rel="noreferrer noopener" className="hover:underline">Build & Deploy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-foreground/60">Follow</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="mailto:mustafadmrsy125@gmail.com" className="hover:underline">Email</a></li>
              <li><a href="https://github.com/mustafadmrsy/Nexus/issues" target="_blank" rel="noreferrer noopener" className="hover:underline">Issues</a></li>
            </ul>
          </div>
        </div>
        {/* Mobile: 4x grid link şeritleri (iki satır) */}
        <div className="mx-auto max-w-6xl px-4 py-8 md:hidden">
          <div className="grid grid-cols-4 gap-3 text-center text-sm">
            <Link href="/features" className="hover:underline">Features</Link>
            <Link href="/download" className="hover:underline">Download</Link>
            <Link href="/changelog" className="hover:underline">Changes</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/support" className="hover:underline">Support</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <a href="https://github.com/mustafadmrsy/Nexus" target="_blank" rel="noreferrer noopener" className="hover:underline">GitHub</a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-6 border-t border-white/10 text-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-foreground/70">© {new Date().getFullYear()} Nexus</p>
          <p className="text-foreground/50">Made with care for real-time communication</p>
        </div>
      </div>
    </footer>
  );
}


