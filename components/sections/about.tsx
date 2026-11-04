"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Target, Heart, Lightbulb, Users } from "lucide-react"

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
  "Kantor Hukum Mahadewa & Rekan",
  "LPH Salatiga YIJA & P3H",
  "Lumina: Layanan Perizinan & Pajak",
  "Lumita Digital & IT Solutions",
  "Nahnu Ansorullah: Pendidikan & Keagamaan"
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="tentang" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Tentang Kami
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            PT Mahadewa Widya Sentosa
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Solusi Terintegrasi untuk Masa Depan Bisnis dan Masyarakat
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-foreground leading-relaxed mb-6">
              PT Mahadewa Widya Sentosa adalah perusahaan induk (holding) yang berdedikasi 
              untuk memberikan layanan profesional lintas sektor di bawah satu atap. Kami 
              hadir sebagai jawaban atas kebutuhan dunia usaha dan masyarakat akan mitra 
              yang andal dalam menghadapi kompleksitas legalitas, regulasi, teknologi, 
              hingga nilai-nilai spiritual.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dengan semangat profesionalisme dan integritas, kami mengelola lima unit 
              bisnis strategis yang saling bersinergi untuk menciptakan ekosistem solusi 
              yang menyeluruh.
            </p>

            {/* Business Pillars */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">Pilar Bisnis Kami:</h3>
              <ul className="space-y-3">
                {businessPillars.map((pillar, index) => (
                  <motion.li
                    key={pillar}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{pillar}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-card rounded-3xl border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Vision */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Visi Perusahaan</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi perusahaan induk penyedia layanan terpadu yang paling tepercaya 
                  di Indonesia dengan mengedepankan aspek hukum, kepatuhan pajak, teknologi, 
                  dan kemaslahatan masyarakat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
