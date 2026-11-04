import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lumina-mws.com'),
  title: 'PT Mahadewa Widya Sentosa | MWS Group - Solusi Terintegrasi untuk Bisnis',
  description: 'PT Mahadewa Widya Sentosa adalah perusahaan induk penyedia layanan terpadu: Konsultan Hukum, Sertifikasi Halal, Perizinan & Perpajakan, IT Solutions, dan Pendidikan Keagamaan di Indonesia.',
  keywords: ['MWS Group', 'PT Mahadewa Widya Sentosa', 'Konsultan Hukum', 'Sertifikasi Halal', 'Perizinan Usaha', 'IT Solutions', 'Legal Corporate', 'Indonesia'],
  authors: [{ name: 'PT Mahadewa Widya Sentosa' }],
  openGraph: {
    title: 'PT Mahadewa Widya Sentosa | MWS Group',
    description: 'Solusi Terintegrasi untuk Masa Depan Bisnis dan Masyarakat',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/images/image1.png' }]
  },
  icons: {
    icon: '/images/image1.png',
    apple: '/images/image1.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
