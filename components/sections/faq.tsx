"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { HelpCircle, Scale, ShieldCheck, FileCheck, Monitor, BookOpen } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const faqCategories = [
  {
    id: "umum",
    name: "Umum",
    icon: HelpCircle,
    faqs: [
      {
        question: "Apa itu PT Mahadewa Widya Sentosa (MWS Group)?",
        answer: "PT Mahadewa Widya Sentosa adalah perusahaan induk (holding company) yang menaungi berbagai unit bisnis terintegrasi, meliputi konsultasi hukum, sertifikasi halal, perizinan & perpajakan, solusi IT, serta pendidikan keagamaan. Kami hadir untuk memberikan solusi satu pintu bagi kebutuhan bisnis dan masyarakat Indonesia."
      },
      {
        question: "Di mana lokasi kantor MWS Group?",
        answer: "Kantor pusat kami berlokasi di Salatiga, Jawa Tengah. Kami juga melayani klien dari berbagai daerah di Indonesia melalui konsultasi online dan kunjungan lapangan sesuai kebutuhan."
      },
      {
        question: "Bagaimana cara berkonsultasi dengan MWS Group?",
        answer: "Anda dapat menghubungi kami melalui WhatsApp, email, atau langsung mengunjungi kantor kami. Tim kami akan merespons dalam waktu 1x24 jam kerja untuk menjadwalkan sesi konsultasi awal secara gratis."
      },
      {
        question: "Apakah layanan MWS Group terintegrasi satu sama lain?",
        answer: "Ya, keunggulan utama kami adalah integrasi antar unit bisnis. Misalnya, jika Anda membutuhkan sertifikasi halal, kami juga bisa membantu mengurus legalitas usaha (NIB) melalui unit Lumina, sehingga proses menjadi lebih efisien."
      }
    ]
  },
  {
    id: "hukum",
    name: "Layanan Hukum",
    icon: Scale,
    faqs: [
      {
        question: "Apa saja layanan yang ditawarkan Kantor Hukum Mahadewa & Rekan?",
        answer: "Kami menyediakan layanan: (1) Hukum Korporasi & Bisnis - legal audit, drafting kontrak, restrukturisasi perusahaan; (2) Perlindungan HKI - merek, hak cipta, paten, desain industri; (3) Litigasi & Penyelesaian Sengketa - perdata, pidana, TUN; (4) Konsultan Hukum Strategis - retainer lawyer untuk perusahaan."
      },
      {
        question: "Berapa lama proses pendaftaran merek dagang?",
        answer: "Proses pendaftaran merek di DJKI memakan waktu sekitar 6-12 bulan untuk pemeriksaan substantif. Kami akan mendampingi Anda dari awal pengajuan hingga sertifikat merek terbit, termasuk penanganan jika ada sanggahan dari pihak lain."
      },
      {
        question: "Apakah tersedia layanan konsultasi hukum berkelanjutan (retainer)?",
        answer: "Ya, kami menyediakan layanan Retainer Lawyer bagi perusahaan atau perorangan yang membutuhkan nasihat hukum secara berkala. Layanan ini mencakup mitigasi risiko, pendampingan negosiasi, dan update regulasi terbaru yang berdampak pada bisnis Anda."
      },
      {
        question: "Bagaimana pendekatan Kantor Hukum Mahadewa dalam menangani kasus?",
        answer: "Kami menerapkan pendekatan preventif - mencegah masalah hukum jauh lebih baik daripada mengobatinya. Didukung ekosistem MWS Group, kami memahami keterkaitan hukum dengan aspek pajak, perizinan, dan teknologi untuk solusi yang komprehensif."
      }
    ]
  },
  {
    id: "halal",
    name: "Sertifikasi Halal",
    icon: ShieldCheck,
    faqs: [
      {
        question: "Apa itu LPH YIJA Cabang Salatiga?",
        answer: "LPH (Lembaga Pemeriksa Halal) YIJA Cabang Salatiga adalah unit kami yang bertugas melakukan verifikasi teknis dan pemeriksaan mendalam terhadap kehalalan produk. Kami terakreditasi untuk melakukan audit bahan baku, proses produksi, dan verifikasi dokumen sebagai dasar penetapan fatwa halal oleh MUI."
      },
      {
        question: "Siapa yang wajib memiliki sertifikat halal?",
        answer: "Sesuai UU Jaminan Produk Halal, semua pelaku usaha yang memproduksi, mengolah, menyimpan, mengemas, mendistribusikan, menjual, dan menyajikan produk wajib memiliki sertifikat halal. Ini berlaku untuk produk makanan, minuman, obat, kosmetik, produk kimiawi, dan produk biologi."
      },
      {
        question: "Apa perbedaan sertifikasi halal reguler dan self declare?",
        answer: "Sertifikasi reguler dilakukan dengan audit lengkap oleh LPH dan penetapan fatwa MUI. Sedangkan Self Declare (Pernyataan Pelaku Usaha Halal) adalah skema khusus untuk Usaha Mikro dan Kecil (UMK) yang lebih sederhana, namun tetap melalui proses verifikasi dan validasi oleh Pendamping PPH."
      },
      {
        question: "Berapa lama proses sertifikasi halal?",
        answer: "Untuk skema reguler, proses memakan waktu 2-4 bulan tergantung kompleksitas produk dan kelengkapan dokumen. Untuk skema Self Declare UMK, prosesnya lebih cepat sekitar 2-4 minggu. Kami akan mendampingi Anda agar proses berjalan lancar."
      },
      {
        question: "Apakah ada pelatihan tentang sistem jaminan produk halal?",
        answer: "Ya, kami menyediakan In-House Training bagi tim internal perusahaan mengenai regulasi terbaru Jaminan Produk Halal, pendampingan pembuatan Manual SJPH, serta update regulasi dari BPJPH dan standar halal nasional/internasional."
      }
    ]
  },
  {
    id: "perizinan",
    name: "Perizinan & Pajak",
    icon: FileCheck,
    faqs: [
      {
        question: "Apa saja layanan Lumina Everything Solutions?",
        answer: "Lumina menyediakan: (1) Layanan Perizinan Usaha - NIB, izin sektoral, perizinan operasional; (2) Administrasi Pertanahan - sertifikasi tanah, balik nama, pemecahan sertifikat, KKPR; (3) Manajemen Pajak - pelaporan SPT, tax planning, audit pajak, pengurusan NPWP/PKP."
      },
      {
        question: "Berapa lama proses pengurusan NIB?",
        answer: "Dengan sistem OSS RBA (Risk Based Approach), pengurusan NIB bisa selesai dalam 1-3 hari kerja jika semua dokumen lengkap. Untuk izin sektoral tambahan, waktu bervariasi tergantung jenis usaha dan tingkat risiko."
      },
      {
        question: "Apakah Lumina bisa membantu mengurus sertifikat tanah dari awal?",
        answer: "Ya, kami melayani sertifikasi tanah dari dasar (Girik/Letter C) menjadi Sertifikat Hak Milik (SHM). Kami juga membantu balik nama, pemecahan sertifikat, pengecekan keabsahan di BPN, dan pengurusan KKPR (Kesesuaian Kegiatan Pemanfaatan Ruang)."
      },
      {
        question: "Layanan pajak apa saja yang tersedia?",
        answer: "Kami melayani: pelaporan SPT Masa bulanan (PPN, PPh 21, 23, 25), SPT Tahunan Orang Pribadi & Badan, tax planning/perencanaan pajak legal, pendampingan audit & sengketa pajak, serta pengurusan NPWP dan pengukuhan PKP."
      },
      {
        question: "Apakah data dokumen saya aman?",
        answer: "Keamanan dan kerahasiaan data adalah prioritas kami. Semua dokumen aset dan data finansial klien dijaga sepenuhnya dengan sistem keamanan yang ketat dan komitmen profesional dari tim kami."
      }
    ]
  },
  {
    id: "it",
    name: "Solusi IT",
    icon: Monitor,
    faqs: [
      {
        question: "Apa layanan utama Lumita Digital & IT Solutions?",
        answer: "Lumita menyediakan solusi teknologi terintegrasi meliputi: pengembangan website & aplikasi, sistem informasi manajemen, digitalisasi proses bisnis, konsultasi IT, serta pembuatan konten digital dan branding untuk mendukung transformasi digital bisnis Anda."
      },
      {
        question: "Apakah Lumita bisa membuat sistem informasi custom?",
        answer: "Ya, kami mengembangkan sistem informasi yang disesuaikan dengan kebutuhan spesifik bisnis Anda, termasuk sistem manajemen internal, CRM, inventory management, dan integrasi dengan sistem yang sudah ada."
      },
      {
        question: "Bagaimana proses pengembangan aplikasi di Lumita?",
        answer: "Kami mengikuti metodologi agile dengan tahapan: analisis kebutuhan, desain UI/UX, pengembangan, testing, deployment, dan maintenance. Klien dilibatkan di setiap tahap untuk memastikan hasil sesuai ekspektasi."
      }
    ]
  },
  {
    id: "pendidikan",
    name: "Pendidikan & Sosial",
    icon: BookOpen,
    faqs: [
      {
        question: "Apa itu Nahnu Ansorullah?",
        answer: "Nahnu Ansorullah adalah unit dedikasi MWS Group yang bergerak di bidang sosial, pendidikan, dan dakwah keagamaan. Kami percaya kesuksesan bisnis harus berjalan selaras dengan penguatan nilai-nilai spiritual dan kecerdasan intelektual masyarakat."
      },
      {
        question: "Program pendidikan apa yang tersedia?",
        answer: "Kami menyediakan: pengelolaan institusi pendidikan (madrasah/sekolah), pusat pelatihan & kursus kepemimpinan, program beasiswa pendidikan bagi siswa berprestasi dan santri yang membutuhkan."
      },
      {
        question: "Apakah ada layanan bimbingan keagamaan?",
        answer: "Ya, kami menyelenggarakan majelis taklim & pengajian rutin, layanan konsultasi fikih harian, bimbingan praktis ibadah, serta menyediakan literasi keagamaan berupa buku dan konten digital yang mencerahkan."
      },
      {
        question: "Bagaimana cara berkontribusi melalui Nahnu Ansorullah?",
        answer: "Anda dapat berkontribusi melalui program zakat, infak, dan sedekah yang kami kelola. Kami memastikan penyaluran donasi tepat sasaran. Anda juga bisa berpartisipasi dalam program bakti sosial dan pemberdayaan ekonomi umat."
      }
    ]
  }
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("umum")

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory) || faqCategories[0]

  return (
    <section id="faq" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami. Jika tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim kami.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {faqCategories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground border border-border"
                )}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            )
          })}
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <currentCategory.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{currentCategory.name}</h3>
                  <p className="text-sm text-muted-foreground">{currentCategory.faqs.length} pertanyaan</p>
                </div>
              </div>
            </div>
            
            <Accordion type="single" collapsible className="px-6">
              {currentCategory.faqs.map((faq, index) => (
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
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Masih punya pertanyaan lain?
          </p>
          <a
            href="/#kontak"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            Hubungi Tim Kami
          </a>
        </motion.div>
      </div>
    </section>
  )
}
