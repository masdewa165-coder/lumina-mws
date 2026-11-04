import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-foreground mb-8">Kebijakan Privasi</h1>
          <p className="text-muted-foreground leading-relaxed">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Pendahuluan</h2>
          <p className="text-muted-foreground">
            Kami di PT Mahadewa Widya Sentosa (MWS Group) menghargai privasi Anda. 
            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
            dan melindungi informasi pribadi Anda saat Anda mengunjungi situs kami 
            maupun menggunakan layanan kami.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Informasi yang Kami Kumpulkan</h2>
          <p className="text-muted-foreground">
            Kami hanya mengumpulkan informasi yang Anda berikan secara sukarela melalui 
            formulir kontak atau WhatsApp, seperti nama, alamat email, dan nomor telepon, 
            dengan tujuan untuk memberikan layanan konsultasi yang Anda butuhkan.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Keamanan Data</h2>
          <p className="text-muted-foreground">
            Data Anda kami lindungi dengan komitmen kerahasiaan layanan tingkat tinggi, 
            dan tidak akan pernah dijual maupun dibagikan ke pihak ketiga tanpa 
            persetujuan hukum dari Anda.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
