"use client"

import dynamic from "next/dynamic"

const HalalRegistrationForm = dynamic(
  () =>
    import("@/components/halal-registration-form").then(
      (module) => module.HalalRegistrationForm,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center text-muted-foreground">
        Memuat formulir pendaftaran...
      </div>
    ),
  },
)

export function HalalRegistrationFormLoader() {
  return <HalalRegistrationForm />
}
