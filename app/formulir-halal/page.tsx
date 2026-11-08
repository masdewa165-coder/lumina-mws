import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HalalRegistrationFormLoader } from "@/components/halal-registration-form-loader"

export const metadata: Metadata = {
  title: "Formulir Sertifikasi Halal | MWS Group",
  description:
    "Formulir persetujuan layanan pendampingan sertifikasi halal Halal Center Salatiga.",
}

export default function HalalRegistrationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-20 pt-28 sm:pt-32">
        <HalalRegistrationFormLoader />
      </main>
      <Footer />
    </>
  )
}
