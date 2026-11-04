"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Scale, 
  Shield, 
  FileCheck, 
  Monitor, 
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "hukum",
    icon: Scale,
    title: "Kantor Hukum Mahadewa & Rekan",
    subtitle: "Konsultan Hukum & Legal Corporate",
    description: "Pilar utama kami dalam perlindungan hukum. Menyediakan layanan jasa hukum yang mencakup advokasi, konsultan hukum bisnis, litigasi, hingga pengurusan Hak Kekayaan Intelektual (HKI).",
    features: [
      "Legal Audit & Legal Opinion",
      "Drafting & Review Kontrak",
      "Perlindungan HKI (Merek, Paten, Hak Cipta)",
      "Litigasi & Penyelesaian Sengketa",
      "Konsultan Hukum Strategis (Retainer)"
    ],
    color: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    id: "halal",
    icon: Shield,
    title: "Halal Center Salatiga",
    subtitle: "Sertifikasi Halal",
    description: "Mendampingi UMK dan pelaku usaha di Salatiga dan sekitarnya dalam proses sertifikasi halal melalui pendampingan PPH jalur Self-Declare, konsultasi sertifikasi reguler, serta pelatihan dan edukasi halal.",
    features: [
      "Pendampingan PPH jalur Self-Declare untuk UMK",
      "Konsultasi sertifikasi halal jalur reguler",
      "Pelatihan penyelia halal dan juru sembelih halal",
      "Edukasi Sistem Jaminan Produk Halal (SJPH)",
      "Pendampingan bagi UMK dan pelaku usaha"
    ],
    applicationUrl: "https://halal-center-salatiga.vercel.app/",
    color: "bg-green-100",
    iconColor: "text-green-700"
  },
  {
    id: "perizinan",
    icon: FileCheck,
    title: "Lumina Everything Solutions",
    subtitle: "Perizinan & Pertanahan",
    description: "Partner strategis dalam administrasi bisnis dan aset melalui pengurusan perizinan usaha serta layanan administrasi pertanahan.",
    features: [
      "Pengurusan NIB & Izin Usaha (OSS)",
      "Pengurusan izin sektoral dan operasional",
      "Sertifikasi & Balik Nama Tanah",
      "Administrasi Pertanahan",
      "Perizinan Tata Ruang (KKPR)"
    ],
    taxComingSoon: true,
    color: "bg-blue-100",
    iconColor: "text-blue-700"
  },
  {
    id: "it",
    icon: Monitor,
    title: "Lumita Digital & IT Solutions",
    subtitle: "Transformasi Digital",
    description: "Berfokus pada transformasi digital dengan menyediakan solusi teknologi informasi, pengembangan sistem, dan perangkat digital yang inovatif.",
    features: [
      "Pengembangan Website & Aplikasi",
      "Sistem Informasi Manajemen",
      "Konsultasi IT & Digital",
      "E-Commerce Solutions",
      "Maintenance & Support"
    ],
    color: "bg-purple-100",
    iconColor: "text-purple-700"
  },
  {
    id: "pendidikan",
    icon: BookOpen,
    title: "Nahnu Ansorullah",
    subtitle: "Pendidikan & Keagamaan",
    description: "Wujud tanggung jawab sosial dan pengabdian melalui layanan di bidang pendidikan dan keagamaan untuk membentuk generasi yang cerdas dan berakhlak mulia.",
    features: [
      "Pengelolaan Institusi Pendidikan",
      "Majelis Taklim & Pengajian",
      "Program Beasiswa",
      "Manajemen Zakat & Infak",
      "Konsultasi Keluarga Sakinah"
    ],
    color: "bg-amber-100",
    iconColor: "text-amber-700"
  }
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="layanan" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Layanan Kami
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Lima Pilar Bisnis Strategis
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ekosistem solusi menyeluruh yang saling bersinergi untuk memenuhi 
            kebutuhan bisnis dan masyarakat Indonesia
          </p>
        </motion.div>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-3xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {service.subtitle}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    {"applicationUrl" in service && service.applicationUrl ? (
                      <Button asChild variant="outline" className="rounded-full">
                        <a href={service.applicationUrl} target="_blank" rel="noopener noreferrer">
                          Ajukan Sertifikasi Halal
                          <ArrowUpRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant="outline" className="rounded-full">
                        <Link href="#kontak">
                          Konsultasi Gratis
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                    {"taxComingSoon" in service && service.taxComingSoon && (
                      <p className="mt-4 text-sm text-muted-foreground" role="status">
                        Layanan perpajakan sementara belum tersedia (Coming Soon).
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-secondary/50 rounded-2xl p-6">
                  <h4 className="font-semibold text-foreground mb-4">Layanan Unggulan:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${service.iconColor} shrink-0 mt-0.5`} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-primary rounded-3xl p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Mengapa Memilih MWS Group?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              { title: "Pendekatan Preventif", desc: "Mencegah masalah lebih baik daripada mengobati" },
              { title: "Keahlian Multidisiplin", desc: "Pemahaman lintas sektor yang terintegrasi" },
              { title: "Integritas Tinggi", desc: "Menjaga kerahasiaan dan etika profesional" },
              { title: "Proses Terintegrasi", desc: "Satu pintu untuk semua kebutuhan bisnis" }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h4 className="font-semibold text-primary-foreground">{item.title}</h4>
                <p className="mt-2 text-sm text-primary-foreground/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
