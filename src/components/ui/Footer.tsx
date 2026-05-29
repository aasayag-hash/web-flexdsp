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
                Professional-grade DSP engine for real-time audio processing, filtering, and room correction.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Resources</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Documentation', href: '#how-it-works' },
                  { label: 'Download', href: '#download' },
                  { label: 'Features', href: '#features' },
                  { label: 'Use Cases', href: '#use-cases' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
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
                  { label: 'Audio Science Review', href: 'https://www.audiosciencereview.com' },
                  { label: 'DIY Audio', href: 'https://www.diyaudio.com' },
                  { label: 'Audiophile Style', href: 'https://audiophilestyle.com' },
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
              © 2025 FlexDSP Audio · Built on CamillaDSP
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
