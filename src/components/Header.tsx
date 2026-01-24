'use client'

import Link from 'next/link'
import Image from 'next/image'
import { AppleIcon } from './icons/AppleIcon'

const basePath = process.env.NODE_ENV === 'production' ? '/helm-website' : ''

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={`${basePath}/helm-icon.png`}
            alt="Helm"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-xl font-semibold">Helm</span>
        </Link>

        <a
          href="https://apps.apple.com/app/helm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
        >
          <AppleIcon className="w-4 h-4" />
          Download
        </a>
      </div>
    </header>
  )
}
