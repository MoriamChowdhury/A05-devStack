import { useState } from 'react'
import logo from '../assets/logo-text.png'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2">
      <img src={logo} alt="Dev Stack logo" className="h-10 w-auto object-contain sm:h-8" />
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-3 sm:px-6 md:flex md:justify-between">
        
        <button
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

       
        <div className="flex justify-center md:justify-start">
          <Logo />
        </div>

       
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition hover:text-pink-600"
            >
              {link}
            </a>
          ))}
        </nav>

        
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <button className="text-xs font-medium text-slate-600 transition hover:text-pink-600 sm:text-sm">
            Sign In
          </button>
          <button className="rounded-full bg-pink-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-700 sm:px-5 sm:py-2 sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 transition hover:text-pink-600"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}