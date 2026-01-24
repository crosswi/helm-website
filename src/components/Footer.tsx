import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/helm-icon.png"
              alt="Helm"
              width={24}
              height={24}
              className="w-6 h-6 rounded-md"
            />
            <span className="text-lg font-semibold">Helm</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <Link href="/support" className="hover:text-white transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Helm. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
