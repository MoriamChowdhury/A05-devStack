import logo from '../assets/logo-text.png'

const LINK_GROUPS: { title: string; links: string[] }[] = [
  { title: 'PRODUCT', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'COMPANY', links: ['About', 'Contact', 'Careers'] },
  { title: 'LEGAL', links: ['Privacy Policy', 'Terms of Service'] },
]

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-slate-200/60 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-10 md:grid-cols-[480px_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <img src={logo} alt="Dev Stack logo" className="h-6 w-auto object-contain" />
            </a>
            <p className="mt-3.5 text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building
              <br className="hidden md:block" />
              modern software.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm font-medium">
              <a href="https://github.com" className="!text-slate-700 no-underline hover:!text-slate-900">GitHub</a>
              <a href="https://twitter.com" className="!text-slate-700 no-underline hover:!text-slate-900">Twitter</a>
              <a href="https://linkedin.com" className="!text-slate-700 no-underline hover:!text-slate-900">LinkedIn</a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="text-[11px] font-bold tracking-wider text-slate-900">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3 text-sm">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="!text-slate-500 no-underline hover:!text-slate-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 justify-between border-t border-slate-200/60 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="no-underline hover:!text-slate-900">Privacy</a>
            <a href="#" className="no-underline hover:!text-slate-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}