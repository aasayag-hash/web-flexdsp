import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FlexDSP — Precision DSP Processing Without Limits',
  description: 'Open-source real-time audio DSP engine with FIR/IIR filtering, active crossovers, room correction, and ultra-low latency. Built for Linux, macOS, and Raspberry Pi.',
  keywords: ['DSP', 'audio processing', 'FIR filter', 'IIR filter', 'room correction', 'active crossover', 'CamillaDSP', 'real-time audio'],
  authors: [{ name: 'FlexDSP' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flexdsp.dev',
    title: 'FlexDSP — Precision DSP Processing Without Limits',
    description: 'Open-source real-time audio DSP engine with FIR/IIR filtering, active crossovers, room correction, and ultra-low latency.',
    siteName: 'FlexDSP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlexDSP — Precision DSP Processing Without Limits',
    description: 'Open-source real-time audio DSP engine with FIR/IIR filtering, active crossovers, room correction, and ultra-low latency.',
  },
}

export const viewport: Viewport = {
  themeColor: '#080a0f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#080a0f] text-slate-100 noise-overlay">
        {children}
      </body>
    </html>
  )
}
