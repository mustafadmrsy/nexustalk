import type { Metadata } from "next";
import React from "react";
import { Check, Shield, Cpu, HardDrive, Hash, CalendarDays, FileText, Info, Zap, Mic } from "lucide-react";
import DownloadCTA from "@/components/DownloadCTA";
import PlatformCard from "@/components/PlatformCard";

export const metadata: Metadata = {
  title: "Nexus İndir",
  description: "Windows, macOS ve Linux için Nexus masaüstü uygulamasını indirin.",
};

const features = [
  "Gerçek zamanlı sesli sohbet",
  "Düşük gecikme",
  "Ekran paylaşımı",
  "Topluluk yönetimi",
];

export default function DownloadPage(): React.ReactElement {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-5 items-start">
        {/* Left: copy */}
        <div className="lg:col-span-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            İndir
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Nexus ile modern iletişim</h1>
          <p className="mt-3 text-foreground/70 max-w-prose">Gerçek zamanlı sesli sohbet, düşük gecikme, ekran paylaşımı ve topluluk yönetimi. Hepsi tek bir hafif masaüstü uygulamasında.</p>

          <ul className="mt-6 space-y-2 text-sm text-foreground/80">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" /> {f}
              </li>
            ))}
          </ul>

          {/* Requirements + checksum */}
          {/* Requirements */}
          {/* Kaldırıldı: kullanıcı isteği */}
          {/* <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 p-3 text-sm">
              <Cpu className="h-4 w-4" />
              <p className="mt-1 text-foreground/70">64-bit CPU</p>
            </div>
            <div className="rounded-lg border border-white/10 p-3 text-sm">
              <HardDrive className="h-4 w-4" />
              <p className="mt-1 text-foreground/70">300 MB boş alan</p>
            </div>
            <div className="rounded-lg border border-white/10 p-3 text-sm">
              <Shield className="h-4 w-4" />
              <p className="mt-1 text-foreground/70">Windows 10+</p>
            </div>
          </div> */}

          {/* Rich copy */}
          <div className="mt-8 space-y-4 text-sm leading-6 text-foreground/80">
            <p>
              Nexus; oyun, topluluk ve ekip iletişimi için optimize edilmiş modern bir masaüstü uygulamasıdır. 
              Özünde hızlı başlatma, düşük kaynak tüketimi ve kararlı bağlantı bulunur. Basit kurulumla dakikalar 
              içinde sunucunuza katılabilir, kanal yapılarını ve rollerinizi kolayca yönetebilirsiniz.
            </p>
            <p>
              Arayüz; karanlık temada okunabilirlik, net hiyerarşi ve erişilebilirlik odaklı tasarlandı. 
              Bildirim sistemi rahatsız etmeyecek şekilde inceltilmiş, yoğun anlarda odaklanmanıza yardımcı olur.
            </p>
          </div>

          {/* Why Nexus */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <Zap className="h-5 w-5" />
              <h3 className="mt-2 text-sm font-medium">Hız</h3>
              <p className="text-xs text-foreground/70 mt-1">Düşük gecikme, seri geçişler ve hızlı kurulum.</p>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <Mic className="h-5 w-5" />
              <h3 className="mt-2 text-sm font-medium">Ses Kalitesi</h3>
              <p className="text-xs text-foreground/70 mt-1">Uzun oturumlarda dahi stabil, net ses deneyimi.</p>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-white/5">
              <Shield className="h-5 w-5" />
              <h3 className="mt-2 text-sm font-medium">Güvenlik</h3>
              <p className="text-xs text-foreground/70 mt-1">Güvenli bağlantılar ve şeffaf geliştirme süreci.</p>
            </div>
          </div>

          {/* Install steps */}
          <div className="mt-8">
            <h3 className="text-sm font-medium">Kurulum adımları</h3>
            <ol className="mt-3 space-y-2">
              {[
                "İndirilen dosyayı çalıştırın (kurulum sihirbazını takip edin)",
                "Oturum açın veya hızlıca yeni hesap oluşturun",
                "Sunucunuza katılın, kulaklık/mikrofon testini tamamlayın",
              ].map((s, i) => (
                <li key={s} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-emerald-500/40 text-[11px]">{i+1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Callout */}
          <div className="mt-6 rounded-lg border border-white/10 p-3 text-xs flex items-start gap-2 bg-white/5">
            <Info className="h-4 w-4 mt-0.5" />
            <p>
              Sürüm notları ve gelecekteki platform paketleri için GitHub sayfasını takip edin. Yayınlandığında 
              bu sayfaya otomatik olarak yansıyacaktır.
            </p>
          </div>
        </div>

        {/* Right: single, full Windows card */}
        <div className="lg:col-span-2 self-stretch flex">
          <div className="flex-1">
          const windowsUrl = process.env.NEXT_PUBLIC_WINDOWS_URL ||
            "https://github.com/mustafadmrsy/nexustalk/releases/latest/download/" + encodeURIComponent("Nexus Setup 1.0.3.exe");

          <PlatformCard
              title="Windows"
              subtitle="Önerilen: Nexus Setup 1.0.3.exe"
            cta={<DownloadCTA href={windowsUrl} label="Nexus Setup 1.0.3.exe" subLabel="Windows için" download />}
            footnote=""
            >
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs md:grid-cols-3">
                <div className="rounded-md border border-white/10 p-2 flex items-center gap-2 bg-black/30">
                  <FileText className="h-4 w-4" /> Dosya: 1.0.3 .exe
                </div>
                <div className="rounded-md border border-white/10 p-2 flex items-center gap-2 bg-black/30">
                  <CalendarDays className="h-4 w-4" /> Yayın: yakında
                </div>
                <div className="rounded-md border border-white/10 p-2 flex items-center gap-2 bg-black/30">
                  <Hash className="h-4 w-4" /> SHA256: yakında
                </div>
              </div>

              <p className="mt-4 text-sm text-foreground/85">
                Nexus, hızlı kurulum ve otomatik güncelleme ile sizi anında topluluğunuza bağlar.
                Düşük gecikmeli mimari ve optimize edilmiş ses/video altyapısı sayesinde uzun oturumlarda
                dahi akıcı bir deneyim sunar. Güvenli bağlantılar ve açık yol haritası ile her sürümde
                daha iyi hale gelir.
              </p>

              <ul className="mt-3 text-sm text-foreground/80 space-y-1 list-disc pl-5">
                <li>Otomatik güncelleme entegrasyonu</li>
                <li>Tray menüsü ve arka planda çalıştırma</li>
                <li>Hızlı başlatma ve düşük bellek kullanımı</li>
              </ul>
            </PlatformCard>
          </div>
        </div>
      </div>
    </section>
  );
}
