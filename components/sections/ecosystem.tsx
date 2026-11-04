import {
  ArrowUpRight,
  GraduationCap,
  MapPinned,
  Scale,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react"

const projects = [
  {
    name: "Halal Center Salatiga",
    category: "Pendampingan halal",
    description:
      "Pendampingan sertifikasi halal, edukasi, dan konsultasi bagi UMK serta pelaku usaha di Salatiga dan sekitarnya.",
    highlights: ["Pendampingan PPH", "Konsultasi halal", "Pelatihan dan edukasi"],
    href: "https://halal-center-salatiga.vercel.app/",
    icon: ShieldCheck,
    iconStyle: "bg-emerald-500/10 text-emerald-700",
  },
  {
    name: "Pengacara",
    category: "Layanan hukum",
    description:
      "Kanal informasi dan layanan untuk kebutuhan konsultasi serta pendampingan hukum.",
    highlights: ["Konsultasi hukum", "Informasi layanan", "Pendampingan profesional"],
    href: "https://pengacara-five.vercel.app/",
    icon: Scale,
    iconStyle: "bg-blue-500/10 text-blue-700",
  },
  {
    name: "Fazawa Project",
    category: "Coaching & riset hukum",
    description:
      "Private Legal Coaching & Research Assistance bersama praktisi hukum, advokat, PPAT, dan akademisi profesional.",
    highlights: ["Coaching hukum privat", "Pendampingan riset", "Praktisi dan akademisi"],
    href: "https://fazawa-project.vercel.app/",
    icon: GraduationCap,
    iconStyle: "bg-violet-500/10 text-violet-700",
  },
  {
    name: "PastiK Baik",
    category: "Produk UMKM pilihan",
    description:
      "Temukan pilihan produk UMKM halal yang dikurasi untuk mendukung usaha lokal dan belanja yang lebih bermakna.",
    highlights: ["Produk UMKM pilihan", "Pilihan produk halal", "Dukung usaha lokal"],
    href: "https://pastikbaik.vercel.app/",
    icon: ShoppingBag,
    iconStyle: "bg-amber-500/10 text-amber-700",
  },
  {
    name: "JELITA HALAL",
    category: "Ekosistem halal digital",
    description:
      "Jendela Elektronik Layanan Informasi dan Terpadu Halal dengan visi “Satu Data, Satu Peta, Satu Ekosistem Halal Indonesia”.",
    highlights: [
      "JELITA MAP — peta geospasial ekosistem halal",
      "JELITA VERIFY — verifikasi sertifikat melalui QR",
      "JELITA MARKET — direktori produk UMKM halal",
      "JELITA PENDAMPING — workspace pendamping PPH",
    ],
    href: "https://www.jelitahalal.id/",
    icon: MapPinned,
    iconStyle: "bg-teal-500/10 text-teal-700",
  },
]

export function EcosystemSection() {
  return (
    <section id="ekosistem" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Terhubung dalam satu ekosistem
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Karya Digital & Mitra MWS
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Jelajahi berbagai platform dan inisiatif terkait PT Mahadewa Widya
            Sentosa—mulai dari layanan hukum dan halal hingga pendampingan serta
            produk UMKM pilihan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${project.iconStyle}`}
                >
                  <project.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-foreground">
                {project.name}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
                aria-label={`Kunjungi website ${project.name} (membuka tab baru)`}
              >
                Kunjungi website
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
