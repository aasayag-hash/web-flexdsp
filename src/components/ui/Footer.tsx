'use client'
import { FadeIn } from '@/components/animations/FadeIn'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/i18n/translations'

const resourceHrefs = ['#how-it-works', '#download', '#features', '#use-cases']
const communityHrefs = ['https://www.audiosciencereview.com', 'https://www.diyaudio.com', 'https://audiophilestyle.com']

export function Footer() {
  const { lang } = useLang()
  const tx = t[lang].footer

  return (
    <footer className="border-t border-white/[0.06] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="grid md:grid-cols-4 gap-10 mb-12">
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
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{tx.desc}</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">{tx.resourcesTitle}</h4>
              <ul className="space-y-2">
                {tx.resources.map((label, i) => (
                  <li key={label}>
                    <a href={resourceHrefs[i]} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">{tx.communityTitle}</h4>
              <ul className="space-y-2">
                {tx.community.map((label, i) => (
                  <li key={label}>
                    <a href={communityHrefs[i]} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-slate-600">{tx.copy}</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
