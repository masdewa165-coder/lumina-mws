"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  CheckCircle2, 
  Target, 
  Heart, 
  Lightbulb, 
  Users,
  Scale,
  ShieldCheck,
  FileCheck,
  Monitor,
  BookOpen,
  ArrowRight,
  Quote
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const IMAGES = {
  aboutBg: "/images/image2.png",
  founder1: "/images/foto_mahadewa.jpeg",
  founder2: "/images/foto_lina.jpeg",
  servicesBg: "/images/image4.jpeg",
  teamBg: "/images/image5.jpeg",
  gallery1: "/images/image1.png"
}

const galleryImages = [
  IMAGES.gallery1,
  IMAGES.teamBg,
  IMAGES.servicesBg,
  IMAGES.aboutBg,
  "/images/image6.jpeg",
  "/images/image7.jpeg"
]

const coreValues = [
  {
    icon: Heart,
    title: "Integritas",
    description: "Menjunjung tinggi kejujuran dan etika dalam setiap layanan."
  },
  {
    icon: Users,
    title: "Sinergi",
    description: "Menghubungkan berbagai keahlian untuk memberikan solusi terbaik bagi klien."
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    description: "Selalu beradaptasi dengan teknologi dan regulasi terbaru."
  },
  {
    icon: Target,
    title: "Pelayanan Prima",
    description: "Mengutamakan kepuasan klien dengan proses yang efisien dan hasil yang akurat."
  }
]

const businessPillars = [
  {
    icon: Scale,
    title: "Kantor Hukum Mahadewa & Rekan",
    description: "Pilar utama kami dalam perlindungan hukum. Kami menyediakan layanan jasa hukum yang mencakup advokasi, konsultan hukum bisnis (legal corporate), litigasi, hingga pengurusan Hak Kekayaan Intelektual (HKI). Kami memastikan setiap langkah strategis Anda memiliki landasan hukum yang kokoh dan aman."
  },
  {
    icon: ShieldCheck,
    title: "Halal Center Salatiga",
    description: "Kami mendampingi UMK dan pelaku usaha dalam proses sertifikasi halal melalui pendampingan PPH jalur Self-Declare, konsultasi sertifikasi reguler, serta pelatihan dan edukasi Sistem Jaminan Produk Halal."
  },
  {
    icon: FileCheck,
    title: "Lumina: Layanan Perizinan & Pertanahan",
    description: "Lumina adalah partner strategis dalam administrasi bisnis dan aset, termasuk pengurusan perizinan usaha (OSS/NIB) dan administrasi pertanahan. Layanan perpajakan sementara belum tersedia (Coming Soon)."
  },
  {
    icon: Monitor,
    title: "Lumita Digital & IT Solutions",
    description: "Unit ini berfokus pada transformasi digital. Kami menyediakan solusi teknologi informasi, pengembangan sistem, dan perangkat digital yang inovatif guna meningkatkan efisiensi operasional bisnis Anda di era industri 4.0."
  },
  {
    icon: BookOpen,
    title: "Nahnu Ansorullah: Layanan Pendidikan & Keagamaan",
    description: "Sebagai wujud tanggung jawab sosial dan pengabdian, kami mengelola layanan di bidang pendidikan dan keagamaan. Kami berkomitmen membentuk generasi yang cerdas secara intelektual dan memiliki akhlak mulia melalui bimbingan yang tepat."
  }
]

const founders = [
  {
    name: "Ia Mahadewa PD, S.H., M.Kn.",
    role: "Founder & Chief Executive Leader",
    description: "Beliau merupakan sosok inisiator utama sekaligus penggerak utama di balik 90% ekosistem bisnis PT Mahadewa Widya Sentosa. Dengan latar belakang pendidikan hukum yang kuat sebagai Sarjana Hukum (S.H.) dan Magister Kenotariatan (M.Kn.), Ia Mahadewa membawa keahlian teknis dan praktis dalam menavigasi kompleksitas dunia hukum dan legalitas di Indonesia.",
    expertise: ["Advokasi", "Konsultasi Hukum Korporasi", "Administrasi Pertanahan", "Hak Kekayaan Intelektual"],
    quote: "Kepemimpinannya yang visioner menjadi pilar utama dalam menghadirkan solusi satu pintu yang terintegrasi bagi para klien.",
    image: IMAGES.founder1
  },
  {
    name: "Lina Annisa W., S.Kom.",
    role: "Co-Founder & Strategic Management Advisor",
    description: "Sebagai pendamping strategis, Ibu Lina Annisa membawa perspektif manajemen dan teknologi ke dalam struktur perusahaan. Dengan latar belakang pendidikan Sarjana Komputer (S.Kom.), beliau berperan penting dalam memberikan saran manajemen, pertimbangan strategis, serta memastikan tata kelola perusahaan tetap adaptif terhadap perkembangan teknologi.",
    expertise: ["Manajemen Strategis", "Teknologi Informasi", "Tata Kelola Perusahaan", "Inovasi Digital"],
    quote: "Peran beliau sebagai penasihat manajemen memastikan bahwa PT Mahadewa Widya Sentosa tidak hanya kuat secara hukum, tetapi juga efisien secara operasional dan inovatif secara digital.",
    image: IMAGES.founder2
  }
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

export default function TentangKamiPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.aboutBg}
              alt="About MWS Group"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
                Tentang Kami
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
                PT Mahadewa Widya Sentosa
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Solusi Terintegrasi untuk Masa Depan Bisnis dan Masyarakat
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Introduction */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  PT Mahadewa Widya Sentosa adalah perusahaan induk (holding) yang berdedikasi 
                  untuk memberikan layanan profesional lintas sektor di bawah satu atap. Kami 
                  hadir sebagai jawaban atas kebutuhan dunia usaha dan masyarakat akan mitra 
                  yang andal dalam menghadapi kompleksitas legalitas, regulasi, teknologi, 
                  hingga nilai-nilai spiritual.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dengan semangat profesionalisme dan integritas, kami mengelola lima unit 
                  bisnis strategis yang saling bersinergi untuk menciptakan ekosistem solusi 
                  yang menyeluruh.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Business Pillars */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Lima Unit Bisnis Strategis
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Pilar Bisnis Kami
              </h2>
            </AnimatedSection>

            <div className="space-y-8">
              {businessPillars.map((pillar, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true, amount: 0.3 })
                
                return (
                  <motion.div
                    key={pillar.title}
                    ref={ref}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <pillar.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Nilai-Nilai Kami
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Core Values
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true, amount: 0.3 })
                
                return (
                  <motion.div
                    key={value.title}
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
                Visi Perusahaan
              </span>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif text-primary-foreground leading-relaxed max-w-4xl mx-auto text-balance">
                &ldquo;Menjadi perusahaan induk penyedia layanan terpadu yang paling tepercaya 
                di Indonesia dengan mengedepankan aspek hukum, kepatuhan pajak, teknologi, 
                dan kemaslahatan masyarakat.&rdquo;
              </blockquote>
            </AnimatedSection>
          </div>
        </section>

        {/* Founders */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Pendiri Perusahaan
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Founder
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Keberhasilan PT Mahadewa Widya Sentosa tidak lepas dari visi dan sinergi kedua 
                pendirinya yang menggabungkan kepakaran hukum dengan inovasi manajemen digital.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8">
              {founders.map((founder, index) => {
                const ref = useRef(null)
                const isInView = useInView(ref, { once: true, amount: 0.3 })
                
                return (
                  <motion.div
                    key={founder.name}
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-card rounded-3xl border border-border p-8 hover:shadow-xl transition-shadow"
                  >
                    {/* Founder Image */}
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 border-4 border-border shadow-lg">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                      <p className="text-primary font-medium mt-1">{founder.role}</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {founder.description}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {founder.expertise.map((item) => (
                        <span 
                          key={item}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <div className="bg-secondary/50 rounded-xl p-4 relative">
                      <Quote className="w-6 h-6 text-primary/30 absolute top-3 left-3" />
                      <p className="text-sm text-muted-foreground italic pl-8">
                        {founder.quote}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Synergy Section */}
            <AnimatedSection className="mt-16">
              <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/20">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Sinergi Pendiri: Harmoni Hukum & Manajemen
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    PT Mahadewa Widya Sentosa dibangun di atas landasan kepercayaan dan dedikasi. 
                    Kombinasi kepakaran Ia Mahadewa di bidang hukum dan Lina Annisa di bidang 
                    manajemen teknologi menciptakan sebuah entitas bisnis yang unik. Perpaduan 
                    ini memastikan bahwa setiap solusi yang diberikan kepada klien telah melalui 
                    proses pertimbangan hukum yang matang sekaligus didukung oleh manajemen yang 
                    profesional dan transparan.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Dokumentasi
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                Galeri Perusahaan
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Momen dan dokumentasi aktivitas kami dalam memberikan layanan terbaik bagi klien.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4 lg:gap-6">
              {galleryImages.map((src, index) => {
                let gridClass = "col-span-1";
                if (index === 0) gridClass = "sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2";
                else if (index === 1 || index === 2) gridClass = "col-span-1 md:col-span-1 md:row-span-1";
                else if (index === 3) gridClass = "sm:col-span-2 md:col-span-2 md:row-span-1";
                else if (index === 4 || index === 5) gridClass = "col-span-1 sm:col-span-1 md:col-span-2 md:row-span-1";

                return (
                  <AnimatedSection 
                    key={index} 
                    className={`relative rounded-3xl overflow-hidden group hover:shadow-2xl transition-all border border-border/10 ${gridClass}`}
                  >
                    <Image
                      src={src}
                      alt={`Dokumentasi PT Mahadewa Widya Sentosa ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                    
                    {/* Gradien bayangan tipis di bawah untuk efek kedalaman */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Siap Bermitra dengan Kami?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Hubungi kami untuk konsultasi gratis dan temukan solusi terbaik untuk 
                kebutuhan bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/#kontak">
                    Hubungi Kami
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link href="/#layanan">
                    Lihat Layanan
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
