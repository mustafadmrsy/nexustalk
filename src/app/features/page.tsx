import type { Metadata } from "next";
import React from "react";
import FeatureGrid from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Özellikler — Nexus",
  description: "Nexus'un öne çıkan özelliklerini keşfedin.",
};

export default function FeaturesPage(): React.ReactElement {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <h1 className="text-3xl font-semibold">Nexus Özellikleri</h1>
        <p className="mt-2 text-foreground/70 max-w-2xl">
          Gerçek zamanlı iletişim için tasarlandı. Sesli kanallar, ekran paylaşımı, moderasyon ve daha fazlası.
        </p>
      </section>
      <FeatureGrid />
    </>
  );
}


