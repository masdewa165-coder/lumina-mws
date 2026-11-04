"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Scale, Monitor, Users } from "lucide-react"
import Image from "next/image"

const FOUNDER_IMAGES = {
  founder1: "/images/foto_mahadewa.jpeg",
  founder2: "/images/foto_lina.jpeg"
}

const founders = [
  {
    name: "Ia Mahadewa PD, S.H., M.Kn.",
    role: "Founder & Chief Executive Leader",
    description: "Sosok inisiator utama sekaligus penggerak utama di balik 90% ekosistem bisnis PT Mahadewa Widya Sentosa. Dengan latar belakang pendidikan hukum yang kuat sebagai Sarjana Hukum (S.H.) dan Magister Kenotariatan (M.Kn.), beliau membawa keahlian teknis dan praktis dalam menavigasi kompleksitas dunia hukum dan legalitas di Indonesia.",
    expertise: [
      "Advokasi & Litigasi",
      "Hukum Korporasi",
      "Administrasi Pertanahan",
      "Hak Kekayaan Intelektual"
    ],
    icon: Scale,
    color: "bg-primary",
    image: FOUNDER_IMAGES.founder1
  },
  {
    name: "Lina Annisa W., S.Kom.",
    role: "Co-Founder & Strategic Management Advisor",
    description: "Sebagai pendamping strategis, beliau membawa perspektif manajemen dan teknologi ke dalam struktur perusahaan. Dengan latar belakang pendidikan Sarjana Komputer (S.Kom.), berperan penting dalam memberikan saran manajemen, pertimbangan strategis, serta memastikan tata kelola perusahaan tetap adaptif terhadap perkembangan teknologi.",
    expertise: [
      "Manajemen Strategis",
      "Teknologi Informasi",
      "Tata Kelola Perusahaan",
      "Transformasi Digital"
    ],
    icon: Monitor,
    color: "bg-accent",
    image: FOUNDER_IMAGES.founder2
  }
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="tim" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Tim Kami
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Founder & Leadership
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Keberhasilan PT Mahadewa Widya Sentosa tidak lepas dari visi dan sinergi 
            kedua pendirinya yang menggabungkan kepakaran hukum dengan inovasi manajemen digital.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-3xl border border-border overflow-hidden"
            >
              <div className="p-8">
                {/* Avatar & Info */}
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-border">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                    <p className="text-primary font-medium mt-1">{founder.role}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {founder.description}
                </p>

                {/* Expertise */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Keahlian:</h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Synergy Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-card rounded-3xl border border-border p-8 lg:p-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Sinergi Pendiri: Harmoni Hukum & Manajemen
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            PT Mahadewa Widya Sentosa dibangun di atas landasan kepercayaan dan dedikasi. 
            Kombinasi kepakaran Ia Mahadewa di bidang hukum dan Lina Annisa di bidang 
            manajemen teknologi menciptakan sebuah entitas bisnis yang unik. Perpaduan 
            ini memastikan bahwa setiap solusi yang diberikan kepada klien telah melalui 
            proses pertimbangan hukum yang matang sekaligus didukung oleh manajemen yang 
            profesional dan transparan.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
