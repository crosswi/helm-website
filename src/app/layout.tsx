import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Helm - #1 AI Goal Planner',
  description: 'Helm - A Roadmap for Real Progress',
  keywords: ['productivity app', 'goal setting', 'AI planner', 'habit tracker', 'task management', 'roadmap', 'personal development'],
  authors: [{ name: 'Helm' }],
  icons: {
    icon: '/Helm.svg',
    apple: '/helm-icon.png',
  },
  openGraph: {
    title: 'Helm - #1 AI Goal Planner',
    description: 'Helm - A Roadmap for Real Progress',
    type: 'website',
    url: 'https://helm.coach',
    images: ['/helm-icon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helm - #1 AI Goal Planner',
    description: 'Helm - A Roadmap for Real Progress',
    images: ['/helm-icon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black text-white min-h-screen font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
