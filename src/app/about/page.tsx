import type { Metadata } from "next";
import React from "react";
import AboutHeroImage from "@/components/AboutHeroImage";
import Link from "next/link";
import { Shield, Zap, Sparkles, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkında — Nexus",
  description: "Nexus ile gerçek bağlantılar kurun: sade, hızlı ve güvenli iletişim deneyimi.",
};

export default function AboutPage(): React.ReactElement {
  return (
    <>
      {/* Hero (opsiyonel görsel) */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Hakkında
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Gerçek bağlantılar için modern iletişim
            </h1>
            <p className="mt-4 text-foreground/70 max-w-prose">
              Nexus, hayatınızdaki en değerli insanlarla aranızdaki mesafeleri kaldırmak için tasarlanmış modern bir sohbet uygulamasıdır. Hızlı ve yoğun yaşam temposunda, kesintisiz iletişim bir ihtiyaçtır — Nexus bu ihtiyaç için var.
            </p>
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <Link href="/download" className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium shadow hover:opacity-90 transition">
                Uygulamayı indir
              </Link>
              <a href="https://github.com/mustafadmrsy/Nexus" target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                GitHub
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 p-3 overflow-hidden">
            <AboutHeroImage />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Zap, title: "Hız", desc: "Düşük gecikme ve akıcı deneyim." },
            { Icon: Shield, title: "Güvenlik", desc: "Güvenli bağlantılar ve veri koruma." },
            { Icon: Sparkles, title: "Sadelik", desc: "Dağınıklıktan uzak, odaklı tasarım." },
            { Icon: HeartHandshake, title: "Topluluk", desc: "İnsanları bir araya getiren araçlar." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/5 dark:border-white/10 p-5 bg-black/5 dark:bg-white/5">
              <Icon className="h-6 w-6" />
              <h3 className="mt-3 font-medium">{title}</h3>
              <p className="text-sm text-foreground/70 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { k: "3+", v: "Platform" },
            { k: "Realtime", v: "Mesajlaşma" },
            { k: "Electron", v: "Masaüstü" },
            { k: "Open", v: "Kaynak" },
          ].map((s) => (
            <div key={s.v} className="rounded-lg border border-black/5 dark:border-white/10 p-4 bg-black/5 dark:bg-white/5 text-center">
              <div className="text-xl font-semibold">{s.k}</div>
              <div className="text-xs text-foreground/70 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="mx-auto max-w-3xl px-4 py-12 prose prose-invert">
        <p><strong>Nexus</strong>, sevdiklerinizle kolay ve kesintisiz iletişim kurmanız için tasarlandı. Arkadaşlarınızla, ailenizle ya da iş arkadaşlarınızla ister bire bir ister grup sohbetlerinde, dilediğiniz an bağlantıda kalabilirsiniz.</p>
        <p>Mesajlaşma deneyiminizi mümkün olduğunca sade, hızlı ve güvenli kılmak için tasarlandı. Karmaşık ayarlara boğulmadan, sadece sohbetin keyfine odaklanın.</p>
        <p>Nexus’un sade ve şık arayüzü herkes için erişilebilir. İster teknolojiyle arası iyi olan, ister ilk kez böyle bir uygulama kullanan biri olun; kısa sürede alışabileceğiniz bir deneyim sunar.</p>
        <p>Sadece mesajlaşmakla kalmayın; fotoğraflar, videolar ve dosyalarla anılarınızı canlı tutun. Özel sohbet odalarında ya da açık gruplarda kendinizi ifade edin.</p>
        <p>Nexus, iletişimi sadece kelimelerle sınırlamaz — duygularınızı da taşıyan bir köprü kurar. Mesajlarınız, paylaşımlarınız ve seslerinizle anlarınızı daha anlamlı kılar.</p>
        <p>Sevdiklerinizle bağı güçlendirmek ve iletişimi kolaylaştırmak için Nexus’u keşfedin. Çünkü gerçek bağlantılar, hayatı güzelleştirir.</p>
      </section>
    </>
  );
}


