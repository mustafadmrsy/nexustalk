"use client";

import React from "react";
import Image from "next/image";

export default function AboutHeroImage(): React.ReactElement {
  const [showHero, setShowHero] = React.useState(true);
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-emerald-500/30">
      {showHero && (
        <Image
          src="/images/about-hero.jpg"
          alt="Nexus Hakkında görseli"
          fill
          priority
          quality={90}
          sizes="(min-width: 1024px) 1000px, 100vw"
          className="object-cover"
          onError={() => setShowHero(false)}
        />
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5" />
    </div>
  );
}




