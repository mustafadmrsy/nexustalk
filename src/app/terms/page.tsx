import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kullanım Şartları — Nexus",
  description: "Nexus kullanım koşulları ve lisans bilgileri.",
};

export default function TermsPage(): React.ReactElement {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 prose prose-invert">
      <h1>Kullanım Şartları</h1>
      <p>
        Bu bir örnek metindir. Ürününüzün kullanım koşulları, lisans ve sorumluluk sınırlamaları burada yer almalıdır.
      </p>
    </section>
  );
}


