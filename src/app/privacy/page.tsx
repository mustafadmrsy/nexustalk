import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Nexus",
  description: "Nexus gizlilik politikası ve veri işleme ilkeleri.",
};

export default function PrivacyPage(): React.ReactElement {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 prose prose-invert">
      <h1>Gizlilik Politikası</h1>
      <p>
        Bu bir örnek metindir. Ürününüz için gerçek gizlilik metnini buraya ekleyin. Toplanan veriler, işleme amaçları ve saklama süreleri açıkça belirtilmelidir.
      </p>
    </section>
  );
}


