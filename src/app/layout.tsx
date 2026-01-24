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
  title: 'Helm - AI-Powered Goal Planning & Productivity',
  description: 'Transform your goals into achievable roadmaps with Helm. Our AI breaks down your ambitions into personalized subgoals, habits, and daily tasks designed around your life.',
  keywords: ['productivity app', 'goal setting', 'AI planner', 'habit tracker', 'task management', 'roadmap', 'personal development'],
  authors: [{ name: 'Helm' }],
  openGraph: {
    title: 'Helm - AI-Powered Goal Planning & Productivity',
    description: 'Transform your goals into achievable roadmaps with Helm.',
    type: 'website',
    url: 'https://helm.coach',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helm - AI-Powered Goal Planning & Productivity',
    description: 'Transform your goals into achievable roadmaps with Helm.',
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
