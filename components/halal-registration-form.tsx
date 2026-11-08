"use client"

import { useState, type FormEvent } from "react"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  "SPPG (Makanan & Minuman)",
  "Katering / Resto",
  "Jasa Distribusi",
  "Rumah Potong (RPA)",
  "Lainnya",
]

const terms = [
  "Kebenaran Data & Kewenangan: Data yang diberikan valid. Pelaku usaha memahami bahwa hasil akhir terbitnya sertifikat adalah kewenangan mutlak BPJPH dan MUI. Keterlambatan akibat antrean sistem (SIHALAL), kebijakan pemerintah, atau ketidaksiapan data internal bukan kelalaian pendamping.",
  "Batasan Layanan: Layanan murni bersifat administratif dan audit. Layanan tidak mencakup biaya perbaikan fasilitas usaha, perubahan bahan baku, uji laboratorium (jika diminta auditor), dan izin di luar halal.",
  "Ketentuan Penyelia Halal: Jika Penyelia Halal difasilitasi oleh Pihak Pengelola untuk kelancaran pendaftaran, tanggung jawab dan masa tugas Penyelia Halal tersebut hanya berlaku hingga Sertifikat Halal terbit. Setelahnya, tanggung jawab kepatuhan SJPH kembali ke Pelaku Usaha, dan Pelaku Usaha wajib mengirimkan PIC internal untuk mengikuti Pelatihan Penyelia Halal secara mandiri.",
]

const formatRupiah = (value: string | number) =>
  `Rp ${new Intl.NumberFormat("id-ID").format(Number(value) || 0)}`

function FormField({
  label,
  name,
  type = "text",
  required = true,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-foreground">
        {label}
        {!required && <span className="text-muted-foreground"> (opsional)</span>}
      </span>
      <input
        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </label>
  )
}

export function HalalRegistrationForm() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [baseFee, setBaseFee] = useState("")
  const [additionalFee, setAdditionalFee] = useState("")
  const [receiptNumber, setReceiptNumber] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const totalFee = (Number(baseFee) || 0) + (Number(additionalFee) || 0)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage("")
    setIsGenerating(true)

    try {
      const formData = new FormData(event.currentTarget)
      const chosenCategories = formData.getAll("categories").map(String)
      if (chosenCategories.length === 0) {
        setErrorMessage("Pilih setidaknya satu kategori usaha.")
        return
      }
      const data = Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => [
          key,
          typeof value === "string" ? value.trim() : "",
        ]),
      )
      const now = new Date()
      const datePart = now.toISOString().slice(0, 10).replaceAll("-", "")
      const generatedReceiptNumber = `HALAL-${datePart}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`
      const formattedDate = now.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })

      const { jsPDF } = await import("jspdf")
      const pdf = new jsPDF()
      let y = 18

      const addParagraph = (
        text: string,
        options: { bold?: boolean; size?: number; x?: number; width?: number } = {},
      ) => {
        const { bold = false, size = 10, x = 18, width = 174 } = options
        pdf.setFont("helvetica", bold ? "bold" : "normal")
        pdf.setFontSize(size)
        const lines = pdf.splitTextToSize(text, width) as string[]
        for (const line of lines) {
          if (y > 278) {
            pdf.addPage()
            y = 18
          }
          pdf.text(line, x, y)
          y += size * 0.48 + 1.5
        }
      }

      const addSection = (title: string) => {
        y += 3
        addParagraph(title, { bold: true, size: 11 })
        pdf.setDrawColor(210, 216, 224)
        pdf.line(18, y, 192, y)
        y += 4
      }

      const addEntry = (label: string, value: string) => {
        const lines = pdf.splitTextToSize(value || "-", 130) as string[]
        pdf.setFont("helvetica", "bold")
        pdf.setFontSize(9)
        pdf.text(label, 18, y)
        pdf.setFont("helvetica", "normal")
        lines.forEach((line, index) => {
          if (y > 278) {
            pdf.addPage()
            y = 18
          }
          pdf.text(line, 62, y + index * 5)
        })
        y += Math.max(6, lines.length * 5)
      }

      pdf.setProperties({
        title: `Tanda Terima Pendaftaran Halal ${generatedReceiptNumber}`,
        subject: "Tanda terima pendaftaran sementara layanan pendampingan halal",
        author: "Halal Center Salatiga - PT Mahadewa Widya Sentosa",
      })
      addParagraph("HALAL CENTER SALATIGA", { bold: true, size: 10 })
      addParagraph("PT Mahadewa Widya Sentosa", { size: 9 })
      y += 4
      addParagraph("TANDA TERIMA PENDAFTARAN SEMENTARA", {
        bold: true,
        size: 15,
      })
      addParagraph("Layanan Pendampingan Sertifikasi Halal", { size: 10 })
      y += 2
      addEntry("No. Pendaftaran", generatedReceiptNumber)
      addEntry("Tanggal", formattedDate)

      addSection("A. IDENTITAS PELAKU USAHA")
      addEntry("Nama usaha", String(data.businessName))
      addEntry("Pemilik / PJ", String(data.ownerName))
      addEntry("Bentuk usaha", String(data.businessType))
      addEntry("Alamat usaha", String(data.businessAddress))
      addEntry("No. HP / WA", String(data.phone))
      addEntry("Email", String(data.email))
      addEntry("NIB", String(data.nib))
      addEntry("NPWP", String(data.npwp || "-"))

      addSection("B. KATEGORI & RUANG LINGKUP LAYANAN")
      addEntry(
        "Kategori",
        chosenCategories
          .map((category) =>
            category === "Lainnya"
              ? `Lainnya: ${String(data.otherCategory || "-")}`
              : category,
          )
          .join(", "),
      )
      addParagraph(
        "Ruang lingkup meliputi pendampingan sertifikasi, penyusunan dokumen SJPH, pengajuan via SIHALAL, dan pendampingan audit oleh LPH YIJA Pusat.",
        { size: 9 },
      )

      addSection("C. RINCIAN BIAYA LAYANAN")
      addEntry("Paket layanan", String(data.servicePackage))
      addEntry("Biaya paket dasar", formatRupiah(String(data.baseFee)))
      addEntry("Biaya tambahan", formatRupiah(String(data.additionalFee)))
      addEntry("TOTAL BIAYA", formatRupiah(totalFee))
      addParagraph(
        "Catatan SPPG/Katering: Tambahan menu dikenakan Rp 1.250.000 untuk setiap kelipatan 50 menu.",
        { size: 9 },
      )

      addSection("D. KETENTUAN PEMBAYARAN")
      addParagraph(
        "DP minimal 50% di awal, dan pelunasan dilakukan setelah permohonan diverifikasi oleh BPJPH.",
      )
      addParagraph(
        "Transfer: Bank Mandiri | No. Rek: 1360018585155 | a.n. Ia Mahadewa Putera Dirgantoro",
      )
      addParagraph(
        "Seluruh dana yang telah disetorkan bersifat final dan tidak dapat ditarik/dikembalikan (non-refundable) dalam kondisi apa pun, termasuk pembatalan sepihak.",
      )

      addSection("E. SYARAT & KETENTUAN MENGIKAT")
      addParagraph(
        "Dengan mengirim formulir ini, Pelaku Usaha menyatakan setuju dan tunduk pada ketentuan berikut:",
      )
      terms.forEach((term, index) =>
        addParagraph(`${index + 1}. ${term}`, { size: 9 }),
      )
      addParagraph(
        "Formulir ini bersifat final dan mengikat secara hukum sebagai bukti persetujuan layanan.",
        { bold: true, size: 9 },
      )
      addParagraph(`Salatiga, ${formattedDate}`)
      if (y > 248) {
        pdf.addPage()
        y = 18
      }
      y += 4
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(9)
      pdf.text("PIHAK PELAKU USAHA", 18, y)
      pdf.text("PIHAK PENGELOLA LAYANAN", 112, y)
      y += 22
      pdf.setFont("helvetica", "normal")
      pdf.text(String(data.signatureName), 18, y)
      pdf.text("(........................................)", 112, y)
      pdf.setDrawColor(100, 100, 100)
      pdf.line(18, y - 7, 82, y - 7)
      pdf.line(112, y - 7, 185, y - 7)
      y += 8
      addParagraph(
        "Tanda terima ini adalah bukti pengajuan sementara, bukan Sertifikat Halal dan bukan konfirmasi bahwa sertifikasi telah diterbitkan.",
        { bold: true, size: 9 },
      )
      addParagraph(
        "Dokumen dibuat di perangkat Anda. Data formulir tidak dikirim atau disimpan oleh situs ini.",
        { size: 8 },
      )

      pdf.save(`${generatedReceiptNumber}.pdf`)
      setReceiptNumber(generatedReceiptNumber)
    } catch (error) {
      console.error("Gagal membuat PDF pendaftaran halal:", error)
      setErrorMessage(
        "PDF belum berhasil dibuat. Silakan coba lagi atau gunakan browser terbaru.",
      )
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Halal Center Salatiga
        </span>
        <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
          Formulir Persetujuan Layanan Pendampingan Sertifikasi Halal
        </h1>
        <p className="mt-3 text-muted-foreground">
          PT Mahadewa Widya Sentosa
        </p>
      </header>

      <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-foreground">
        Isi formulir dan unduh tanda terima pendaftaran sementara dalam bentuk
        PDF. Untuk tahap ini, data hanya diproses di perangkat Anda dan tidak
        dikirim atau disimpan oleh situs.
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            A. Identitas Pelaku Usaha
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Nama usaha" name="businessName" />
            <FormField label="Nama pemilik / penanggung jawab" name="ownerName" />
            <label className="block space-y-2">
              <span className="text-sm font-medium text-foreground">Bentuk usaha</span>
              <select
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground"
                name="businessType"
                defaultValue=""
                required
              >
                <option value="" disabled>Pilih bentuk usaha</option>
                <option>Perseorangan</option>
                <option>CV</option>
                <option>PT</option>
                <option>Yayasan</option>
              </select>
            </label>
            <FormField label="No. HP / WhatsApp" name="phone" type="tel" />
            <FormField label="Email" name="email" type="email" />
            <FormField label="NIB" name="nib" />
            <FormField label="NPWP" name="npwp" required={false} />
            <div className="sm:col-span-2">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-foreground">Alamat usaha</span>
                <textarea
                  className="min-h-24 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground"
                  name="businessAddress"
                  required
                />
              </label>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            B. Kategori & Ruang Lingkup Layanan
          </h2>
          <p className="mb-5 text-sm text-muted-foreground">
            Beri tanda centang pada kategori usaha Anda.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-3 text-sm text-foreground">
                <input
                  type="checkbox"
                  name="categories"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={(event) =>
                    setSelectedCategories((current) =>
                      event.target.checked
                        ? [...current, category]
                        : current.filter((item) => item !== category),
                    )
                  }
                  className="h-4 w-4 rounded border-input accent-primary"
                />
                {category}
              </label>
            ))}
          </div>
          {selectedCategories.includes("Lainnya") && (
            <div className="mt-4">
              <FormField
                label="Kategori lainnya"
                name="otherCategory"
                placeholder="Tuliskan kategori usaha"
              />
            </div>
          )}
          <p className="mt-6 rounded-lg bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
            Ruang lingkup meliputi pendampingan sertifikasi, penyusunan dokumen
            SJPH, pengajuan via SIHALAL, dan pendampingan audit oleh LPH YIJA
            Pusat.
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            C. Rincian Biaya Layanan
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Paket layanan" name="servicePackage" />
            <label className="block space-y-2">
              <span className="text-sm font-medium text-foreground">Biaya paket dasar (Rp)</span>
              <input
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground"
                name="baseFee"
                type="number"
                min="0"
                step="1000"
                value={baseFee}
                onChange={(event) => setBaseFee(event.target.value)}
                required
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-foreground">Biaya tambahan (Rp)</span>
              <input
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground"
                name="additionalFee"
                type="number"
                min="0"
                step="1000"
                value={additionalFee}
                onChange={(event) => setAdditionalFee(event.target.value)}
                required
              />
              <span className="block text-xs text-muted-foreground">
                Diisi hanya jika ada biaya tambahan (&gt;50 menu untuk SPPG/Katering).
              </span>
            </label>
            <div className="rounded-lg bg-muted p-4 sm:col-span-2">
              <p className="text-sm text-muted-foreground">Total biaya</p>
              <p className="mt-1 text-2xl font-bold text-foreground">{formatRupiah(totalFee)}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                SPPG/Katering: tambahan menu dikenakan Rp 1.250.000 untuk setiap
                kelipatan 50 menu.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
          <h2 className="mb-5 text-xl font-semibold text-foreground">
            D. Ketentuan Pembayaran
          </h2>
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>
              DP minimal 50% di awal, dan pelunasan dilakukan setelah permohonan
              diverifikasi oleh BPJPH.
            </li>
            <li>
              Pembayaran ditransfer melalui: <strong className="text-foreground">Bank Mandiri | No. Rek: 1360018585155 | a.n. Ia Mahadewa Putera Dirgantoro</strong>
            </li>
            <li>
              <strong className="text-foreground">
                Seluruh dana yang telah disetorkan bersifat final dan tidak dapat
                ditarik/dikembalikan (non-refundable) dalam kondisi apa pun,
                termasuk pembatalan sepihak.
              </strong>
            </li>
          </ol>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
          <h2 className="mb-5 text-xl font-semibold text-foreground">
            E. Syarat & Ketentuan Mengikat
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Dengan mengirim formulir ini, Pelaku Usaha menyatakan setuju dan
            tunduk pada hal-hal berikut:
          </p>
          <ol className="list-decimal space-y-4 pl-5 text-sm leading-relaxed text-muted-foreground">
            {terms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ol>
          <p className="mt-5 text-sm font-medium text-foreground">
            Formulir ini bersifat final dan mengikat secara hukum sebagai bukti
            persetujuan layanan.
          </p>
          <div className="mt-6 max-w-md">
            <FormField
              label="Nama lengkap sebagai tanda persetujuan"
              name="signatureName"
              placeholder="Ketik nama pemilik / penanggung jawab"
            />
          </div>
          <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-foreground">
            <input
              className="mt-1 h-4 w-4 shrink-0 accent-primary"
              type="checkbox"
              name="consent"
              required
            />
            <span>
              Saya menyatakan data yang diisi benar, telah membaca dan menyetujui
              seluruh syarat dan ketentuan di atas, serta meminta dibuatkan tanda
              terima pendaftaran sementara.
            </span>
          </label>
        </section>

        <div className="no-print space-y-4">
          {errorMessage && (
            <p role="alert" className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
              {errorMessage}
            </p>
          )}
          {receiptNumber && (
            <p role="status" className="rounded-lg bg-green-500/10 p-4 text-sm text-foreground">
              PDF berhasil dibuat. Nomor pendaftaran sementara Anda:{" "}
              <strong>{receiptNumber}</strong>. Simpan file PDF yang terunduh
              sebagai bukti pengajuan.
            </p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" size="lg" className="gap-2" disabled={isGenerating}>
              {isGenerating ? (
                <FileText className="h-4 w-4 animate-pulse" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {isGenerating ? "Menyiapkan PDF..." : "Buat & Unduh Tanda Terima PDF"}
            </Button>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Tanda terima ini bersifat sementara, bukan Sertifikat Halal dan bukan
            konfirmasi bahwa sertifikasi telah diterbitkan. Formulir tidak
            dikirimkan ke admin dan tidak disimpan oleh website.
          </p>
        </div>
      </form>
    </div>
  )
}
