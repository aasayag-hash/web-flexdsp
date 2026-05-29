import { FadeIn } from '@/components/animations/FadeIn'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8C2 8 4 3 8 3C12 3 14 8 14 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M2 8C2 8 4 13 8 13C12 13 14 8 14 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                    <circle cx="8" cy="8" r="1.5" fill="white"/>
                  </svg>
                </div>
                <span className="font-display font-bold text-white">FLEX<span className="text-blue-400">DSP</span></span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Professional-grade open-source DSP engine for real-time audio processing, filtering, and room correction.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Documentation', href: 'https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend/wiki' },
                  { label: 'GitHub', href: 'https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend' },
                  { label: 'Releases', href: 'https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend/releases' },
                  { label: 'Issues', href: 'https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend/issues' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Community</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Discussions', href: 'https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend/discussions' },
                  { label: 'Audio Science Review', href: 'https://www.audiosciencereview.com' },
                  { label: 'DIY Audio', href: 'https://www.diyaudio.com' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              © 2025 FlexDSP — Built on{' '}
              <a href="https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend" className="text-slate-500 hover:text-slate-400 transition-colors">
                CamillaDSP
              </a>{' '}
              · MIT License
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend" target="_blank" rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
