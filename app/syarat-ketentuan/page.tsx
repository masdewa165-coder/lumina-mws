import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsConditions() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-foreground mb-8">Syarat & Ketentuan</h1>
          <p className="text-muted-foreground leading-relaxed">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Penerimaan Syarat</h2>
          <p className="text-muted-foreground">
            Dengan mengakses dan menggunakan situs web PT Mahadewa Widya Sentosa (MWS Group), 
            Anda setuju untuk terikat oleh Syarat dan Ketentuan berikut. Jika Anda tidak setuju 
            dengan bagian mana pun dari syarat ini, Anda dilarang menggunakan atau mengakses 
            situs ini.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Layanan Konsultasi</h2>
          <p className="text-muted-foreground">
            Informasi yang disediakan di situs ini bersifat umum dan tidak serta-merta 
            menggantikan saran maupun konsultasi dari profesional secara komprehensif. 
            Layanan formal hanya dimulai setelah adanya ikatan kerja sama yang disetujui bersama.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Hak Cipta</h2>
          <p className="text-muted-foreground">
            Seluruh materi konten, merek dagang, dan aset digital dalam website ini 
            sepenuhnya adalah hak milik intelektual (HAKI) dari PT Mahadewa Widya Sentosa 
            dan dilindungi oleh undang-undang.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
