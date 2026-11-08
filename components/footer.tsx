"use client"

import Link from "next/link"
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  layanan: [
    { name: "Konsultan Hukum", href: "/#hukum" },
    { name: "Sertifikasi Halal", href: "/#halal" },
    { name: "Formulir Halal", href: "/formulir-halal" },
    { name: "Perizinan & Pertanahan", href: "/#perizinan" },
    { name: "IT Solutions", href: "/#it" },
    { name: "Pendidikan", href: "/#pendidikan" },
  ],
  perusahaan: [
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Ekosistem Digital", href: "/#ekosistem" },
    { name: "Tim", href: "/#tim" },
    { name: "Karir", href: "/karir" },
    { name: "Visi & Misi", href: "/tentang-kami" },
    { name: "Kontak", href: "/#kontak" },
  ],
  legal: [
    { name: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    { name: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  ]
}

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/lumina_solution/", label: "Instagram" }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-primary-foreground shadow-sm shrink-0 border-2 border-primary-foreground/20">
                <img 
                  src="/images/image1.png" 
                  alt="MWS Group Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg">MWS Group</div>
                <div className="text-xs text-primary-foreground/70">PT Mahadewa Widya Sentosa</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Perusahaan induk penyedia layanan terpadu yang paling tepercaya 
              di Indonesia dengan mengedepankan aspek hukum, kepatuhan pajak, 
              teknologi, dan kemaslahatan masyarakat.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Layanan</h3>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Perusahaan</h3>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-lg mt-8 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80 text-sm space-y-2">
                  <p><strong>Utama:</strong><br />Jl. Diponegoro No. 164 Salatiga</p>
                  <p><strong>Cabang:</strong><br />Jl. Nakula Sadewa 1, Ruko 1 Depan Perumahan Graha Dirgantara, Sidomukti, Salatiga</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <a
                  href="tel:+6285865081818"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  0858-6508-1818
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <a
                  href="mailto:lumina.salatiga@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  lumina.salatiga@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/70 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} PT Mahadewa Widya Sentosa. Seluruh hak cipta dilindungi.
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
