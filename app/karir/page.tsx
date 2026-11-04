"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Rocket,
  Handshake,
  Network,
  ShieldCheck,
  Building2,
  BadgeCheck,
  Scale,
  Palette,
  Smartphone,
  BookOpen,
  CheckCircle2,
  Users,
  TrendingUp,
  Award,
  IdCard,
  MapPin,
  Crown,
  ArrowRight,
  ArrowDown,
  ClipboardList,
  UserCheck,
  MessageSquare,
  GraduationCap as GradIcon,
  Sparkles,
  Infinity as InfinityIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const REGISTER_URL = "https://forms.gle/YddJce3AkaiTFNwz8"

const stats = [
  { value: "100+", label: "Target Mitra Profesional", icon: Users },
  { value: "1.000+", label: "Target UMKM Didampingi", icon: TrendingUp },
  { value: "8+", label: "Layanan Profesional", icon: ShieldCheck },
  { value: "∞", label: "Peluang Pengembangan & Penghasilan", icon: InfinityIcon },
]

const whatYouDo = [
  "Membangun relasi dengan pelaku UMKM.",
  "Mengidentifikasi kebutuhan usaha.",
  "Memberikan edukasi mengenai layanan yang tersedia.",
  "Menghubungkan UMKM dengan layanan profesional.",
  "Mendampingi proses hingga layanan selesai.",
  "Menjadi bagian dari ekosistem pengembangan UMKM Indonesia.",
]

const services = [
  { icon: ShieldCheck, title: "Sertifikasi Halal", emoji: "🕌" },
  { icon: Building2, title: "Legalitas Usaha (NIB & Perizinan)", emoji: "🏢" },
  { icon: BadgeCheck, title: "Pendaftaran Merek (HAKI)", emoji: "™️" },
  { icon: Scale, title: "Konsultasi Hukum Bisnis", emoji: "⚖️" },
  { icon: Palette, title: "Branding & Desain", emoji: "🎨" },
  { icon: Smartphone, title: "Digital Marketing", emoji: "📱" },
  { icon: BookOpen, title: "Pelatihan & Pengembangan UMKM", emoji: "📚" },
]

const benefits = [
  { icon: Award, title: "Komisi Menarik", description: "Komisi menarik berdasarkan layanan yang berhasil direalisasikan." },
  { icon: Sparkles, title: "Waktu Kerja Fleksibel", description: "Atur waktu kerja Anda sendiri sesuai aktivitas utama." },
  { icon: BookOpen, title: "Pelatihan Berkala", description: "Pelatihan dan pembekalan secara berkala dari tim profesional." },
  { icon: Award, title: "Sertifikat Mitra Profesional", description: "Sertifikat resmi sebagai pengakuan kompetensi mitra." },
  { icon: IdCard, title: "ID Card Mitra", description: "Kartu identitas resmi sebagai Mitra Pendamping UMKM." },
  { icon: MapPin, title: "Koordinator Wilayah", description: "Kesempatan menjadi Koordinator Wilayah di daerah Anda." },
  { icon: Network, title: "Jaringan Profesional", description: "Bergabung dalam jaringan Halal Center Salatiga & Lumina MWS." },
  { icon: TrendingUp, title: "Perluas Relasi", description: "Kesempatan memperluas relasi dan pengalaman profesional." },
]

const whoCanJoin = [
  "Mahasiswa",
  "Fresh Graduate",
  "Freelancer",
  "Guru & Dosen",
  "Pendamping UMKM",
  "Pelaku Usaha",
  "Karyawan (penghasilan tambahan)",
  "Ibu Rumah Tangga",
  "Profesional berbagai bidang",
]

const levels = [
  { icon: Users, badge: "🟢", title: "MPU Associate", description: "Mengikuti pelatihan dasar dan mulai mendampingi UMKM." },
  { icon: ShieldCheck, badge: "🔵", title: "MPU Professional", description: "Aktif menjalankan pendampingan dan membangun portofolio." },
  { icon: Award, badge: "🟠", title: "MPU Senior", description: "Membimbing mitra baru serta menangani proyek yang lebih kompleks." },
  { icon: Crown, badge: "👑", title: "Koordinator Wilayah", description: "Memimpin pengembangan jaringan mitra di wilayah masing-masing." },
]

const steps = [
  { icon: ClipboardList, title: "Isi Formulir Pendaftaran", description: "Lengkapi data diri melalui formulir online." },
  { icon: UserCheck, title: "Verifikasi Data", description: "Tim kami akan melakukan pengecekan administrasi." },
  { icon: MessageSquare, title: "Wawancara Singkat", description: "Dilaksanakan secara online atau offline sesuai kebutuhan." },
  { icon: GradIcon, title: "Pelatihan Dasar", description: "Peserta akan memperoleh pembekalan mengenai layanan dan sistem kemitraan." },
  { icon: Rocket, title: "Resmi Menjadi Mitra", description: "Siap mendampingi UMKM dan memperoleh peluang penghasilan." },
]

const faqs = [
  { question: "Apakah ini pekerjaan tetap?", answer: "Bukan. Program ini merupakan kemitraan profesional dengan sistem yang fleksibel." },
  { question: "Apakah ada gaji bulanan?", answer: "Tidak. Mitra memperoleh komisi dari layanan yang berhasil direalisasikan." },
  { question: "Apakah harus memiliki pengalaman?", answer: "Tidak. Kami menyediakan pelatihan sebelum mitra mulai menjalankan tugas." },
  { question: "Apakah saya harus tinggal di Salatiga?", answer: "Tidak. Program ini terbuka untuk berbagai daerah." },
  { question: "Apakah ada biaya pendaftaran?", answer: "Tidak. Pendaftaran dan pelatihan awal tidak dipungut biaya." },
  { question: "Apakah saya bisa tetap bekerja di tempat lain?", answer: "Bisa. Program ini dirancang fleksibel sehingga dapat dijalankan bersamaan dengan aktivitas utama Anda." },
]

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function RegisterButton({ label = "Daftar Menjadi Mitra", size = "lg", className = "" }: { label?: string; size?: "lg" | "default"; className?: string }) {
  return (
    <Button asChild size={size} className={`rounded-full ${className}`}>
      <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
        <Rocket className="w-5 h-5 mr-2" />
        {label}
      </a>
    </Button>
  )
}

export default function KarirPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Stat Cards */}
        <section className="pt-28 pb-8 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true, amount: 0.3 })
                return (
                  <motion.div
                    key={stat.label}
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_50%)]" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
                🚀 Program Mitra Pendamping UMKM (MPU)
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
                Menjadi Mitra Pendamping UMKM (MPU)
              </h1>
              <p className="text-xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-4">
                Bantu UMKM Naik Kelas, Bangun Kariermu Bersama Kami.
              </p>
              <p className="text-base text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed mb-10">
                Program kemitraan profesional dari Halal Center Salatiga dan Lumina MWS untuk
                membangun jaringan pendamping UMKM yang siap memberikan solusi di bidang
                sertifikasi halal, legalitas usaha, branding, digitalisasi, hingga pengembangan bisnis.
              </p>
              <div className="flex justify-center">
                <RegisterButton label="Daftar Menjadi Mitra Sekarang" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is MPU */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Tentang Program</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Apa itu Mitra Pendamping UMKM (MPU)?
              </h2>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-card rounded-2xl border border-border p-8 lg:p-10 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Handshake className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Mitra Pendamping UMKM (MPU) adalah program kemitraan profesional yang bertugas
                      membantu pelaku UMKM dalam mengenali kebutuhan usahanya, memberikan edukasi
                      mengenai layanan yang tersedia, serta menghubungkan mereka dengan solusi yang
                      tepat melalui Halal Center Salatiga dan Lumina MWS.
                    </p>
                    <p>
                      MPU bukan hanya menawarkan layanan, tetapi menjadi mitra yang mendampingi UMKM
                      agar dapat berkembang secara berkelanjutan.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What You Will Do */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Peran Mitra</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Apa yang Akan Anda Lakukan?
              </h2>
              <p className="mt-4 text-muted-foreground">Sebagai Mitra Pendamping UMKM, Anda akan:</p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-4">
              {whatYouDo.map((item, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true, amount: 0.3 })
                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex items-start gap-3 bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Accompanied */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Lingkup Layanan</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Layanan yang Didampingi
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Sebagai MPU, Anda akan memperkenalkan berbagai layanan profesional, antara lain:
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true, amount: 0.3 })
                return (
                  <motion.div
                    key={service.title}
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Keuntungan</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Mengapa Bergabung Bersama Kami?
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((benefit, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true, amount: 0.3 })
                return (
                  <motion.div
                    key={benefit.title}
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Repeated CTA after benefits */}
            <AnimatedSection className="text-center mt-14">
              <div className="inline-flex flex-col items-center gap-4 bg-card rounded-3xl border border-primary/20 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-foreground">Siap memulai perjalanan Anda sebagai MPU?</h3>
                <RegisterButton />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Who Can Join */}
        <section className="py-20 bg-background">
          {/* Standalone image */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
            <AnimatedSection>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-[2/3] rounded-3xl overflow-hidden border border-border shadow-lg">
                  <Image
                    src="/images/karir.jpeg"
                    alt="Mitra Pendamping UMKM (MPU)"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Kandidat</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Siapa yang Cocok Bergabung?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Program ini terbuka bagi siapa saja yang memiliki semangat belajar dan ingin berkembang.
              </p>
            </AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {whoCanJoin.map((role, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true, amount: 0.3 })
                return (
                  <motion.span
                    key={role}
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors"
                  >
                    {role}
                  </motion.span>
                )
              })}
            </div>
            <AnimatedSection className="mt-10">
              <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 text-center max-w-3xl mx-auto">
                <p className="text-muted-foreground leading-relaxed">
                  Tidak harus memiliki pengalaman sebelumnya. Kami akan memberikan pembekalan dan
                  pelatihan sebelum mulai menjalankan program.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Partnership Levels */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Jenjang Karier</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Jenjang Kemitraan
              </h2>
            </AnimatedSection>
            <div className="space-y-4">
              {levels.map((level, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true, amount: 0.3 })
                return (
                  <div key={level.title}>
                    <motion.div
                      ref={ref}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <level.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground">
                            <span className="mr-2">{level.badge}</span>{level.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">{level.description}</p>
                        </div>
                      </div>
                    </motion.div>
                    {index < levels.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Join Flow */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">Proses</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Alur Bergabung
              </h2>
            </AnimatedSection>
            <div className="space-y-4">
              {steps.map((step, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true, amount: 0.3 })
                return (
                  <div key={step.title}>
                    <motion.div
                      ref={ref}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-5">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 flex-1">
                          <step.icon className="w-6 h-6 text-primary shrink-0" />
                          <div>
                            <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    {index < steps.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">FAQ</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Pertanyaan yang Sering Diajukan
              </h2>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                <Accordion type="single" collapsible className="px-6">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-medium text-foreground pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_50%)]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 text-balance">
                Mari Bertumbuh Bersama
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                Kami percaya bahwa keberhasilan UMKM akan memberikan dampak positif bagi
                perekonomian masyarakat. Melalui Program Mitra Pendamping UMKM (MPU), Anda tidak
                hanya memperoleh peluang penghasilan, tetapi juga menjadi bagian dari gerakan yang
                membantu UMKM berkembang dan naik kelas.
              </p>
              <p className="text-primary-foreground/90 text-lg font-medium mb-2">
                🚀 Siap Menjadi Mitra Pendamping UMKM?
              </p>
              <p className="text-primary-foreground/70 mb-8">
                Daftar sekarang dan bergabung bersama Halal Center Salatiga &amp; Lumina MWS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8">
                  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                    <Rocket className="w-5 h-5 mr-2" />
                    Daftar Sekarang
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
                  <Link href="/#kontak">
                    Hubungi Kami
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
