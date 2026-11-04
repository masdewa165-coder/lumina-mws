"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "0858-6508-1818",
    href: "https://wa.me/6285865081818"
  },
  {
    icon: Mail,
    label: "Email",
    value: "lumina.salatiga@gmail.com",
    href: "mailto:lumina.salatiga@gmail.com"
  },
  {
    icon: MapPin,
    label: "Kantor Utama",
    value: "Jl. Diponegoro No. 164 Salatiga",
    href: "#"
  },
  {
    icon: MapPin,
    label: "Kantor Cabang",
    value: "Jl. Nakula Sadewa 1, Ruko 1 Depan Perum Graha Dirgantara, Sidomukti, Salatiga",
    href: "#"
  }
]

const serviceOptions = [
  "Konsultasi Hukum & Legal",
  "Sertifikasi Halal",
  "Perizinan & Pajak",
  "IT Solutions",
  "Pendidikan & Keagamaan",
  "Lainnya"
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string

    // Construct WhatsApp message
    const waNumber = "6285865081818" // Menggunakan nomor terbaru
    const text = `Halo, saya ingin berkonsultasi mengenai layanan MWS Group.
    
*Informasi Pengirim:*
Nama: ${name}
No. WA: ${phone}
Email: ${email}
Layanan: ${service}

*Pesan:*
${message}`

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`
    
    // Simulate brief loading for better UX
    await new Promise(resolve => setTimeout(resolve, 800))
    
    setIsLoading(false)
    window.open(waUrl, '_blank')
    setIsSubmitted(true)
    
    // Reset form after submission
    e.currentTarget.reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="kontak" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Kontak
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Siap membantu Anda. Konsultasikan kebutuhan bisnis Anda bersama tim profesional kami.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Kirim Pesan
              </h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Pesan Terkirim!</h4>
                  <p className="text-muted-foreground mt-2">
                    Tim kami akan segera menghubungi Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nama Lengkap
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Masukkan nama Anda"
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        No. WhatsApp
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@contoh.com"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Layanan yang Dibutuhkan
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full h-10 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Pilih layanan</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Jelaskan kebutuhan Anda secara singkat..."
                      rows={4}
                      required
                      className="rounded-xl resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Mengirim...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Kirim Pesan
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-sm font-medium text-muted-foreground">{info.label}</h4>
                  <p className="mt-1 text-foreground font-medium">{info.value}</p>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-green-600 rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Konsultasi via WhatsApp
              </h3>
              <p className="text-white/80 mb-6">
                Hubungi admin kami untuk konsultasi cepat dan mudah
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-green-600 hover:bg-white/90 rounded-full px-8"
              >
                <a
                  href="https://wa.me/6285865081818?text=Halo,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20MWS%20Group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi Sekarang
                </a>
              </Button>
            </motion.div>

          </motion.div>
        </div>

        {/* Lokasi Map Section (Baru) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 border-t border-border pt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Kunjungi Lokasi Kami</h3>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Datang dan konsultasikan kebutuhan bisnis Anda secara langsung di kantor kami.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Utama */}
            <div className="bg-card rounded-3xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Kantor Utama</h4>
                  <p className="text-sm text-muted-foreground mt-1">Jl. Diponegoro No. 164 Salatiga</p>
                </div>
              </div>
              <div className="w-full h-72 rounded-2xl overflow-hidden bg-secondary border border-border/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.33794548065734!2d110.4894096!3d-7.3080753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7947e1ba24f3%3A0xd96754385d5aa4b8!2sKantor%20Hukum%20Mahadewa%20dan%20Rekan!5e0!3m2!1sid!2sid!4v1774842129038!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Map Cabang */}
            <div className="bg-card rounded-3xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Cabang Administrasi</h4>
                  <p className="text-sm text-muted-foreground mt-1 text-balance">Jl. Nakula Sadewa 1, Ruko 1 Depan Perum Graha Dirgantara, Sidomukti</p>
                </div>
              </div>
              <div className="w-full h-72 rounded-2xl overflow-hidden bg-secondary border border-border/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3957.1406185084543!2d110.48907!3d-7.338101000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjAnMTcuMiJTIDExMMKwMjknMjAuNyJF!5e0!3m2!1sid!2sid!4v1774842238590!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
