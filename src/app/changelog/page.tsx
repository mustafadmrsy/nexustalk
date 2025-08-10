import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Nexus Changelog",
  description: "Nexus sürüm notları ve değişiklik listesi.",
};

export default function ChangelogPage(): React.ReactElement {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Sürüm Notları</h1>
      <p className="mt-2 text-foreground/70 max-w-2xl">
        En güncel değişiklikler ve geçmiş sürümler için GitHub üzerindeki yayınlar sayfasını ziyaret edin.
        Şu anda repoda yayın (release) listelenmediyse, binary indirmeleri doğrudan bu site üzerinden paylaşabilirsiniz.
      </p>
      <div className="mt-6">
        <Link
          href={"https://github.com/mustafadmrsy/Nexus/releases"}
          target="_blank"
          className="underline"
        >
          GitHub Releases
        </Link>
      </div>
    </section>
  );
}


