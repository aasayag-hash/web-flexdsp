'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/i18n/translations'

const imgs = [
  '/screenshots/tab_vumetros.png',
  '/screenshots/tab_graphic_eq.png',
  '/screenshots/tab_parametric_eq.png',
  '/screenshots/tab_crossovers.png',
  '/screenshots/tab_filtros_fir.png',
  '/screenshots/tab_mixer.png',
  '/screenshots/tab_mediciones.png',
  '/screenshots/tab_opciones.png',
]

export function DSPEngineSection() {
  const [active, setActive] = useState(0)
  const { lang } = useLang()
  const tx = t[lang].dspEngine

  return (
    <section id="dsp-engine" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium tracking-wider uppercase mb-6">
            {tx.badge}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            {tx.title1}
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {tx.title2}
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{tx.desc}</p>
        </FadeIn>

        <FadeIn>
          <div className="rounded-2xl border border-white/[0.06] bg-[#0c0f1a]/80 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs font-mono text-slate-500">FlexDSP Audio — v2.51 · 192.168.1.x:5000</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-mono">{tx.running}</span>
              </div>
            </div>

            <div className="flex border-b border-white/[0.06] overflow-x-auto">
              {tx.tabs.map((label, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`px-5 py-3 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                    active === i ? 'text-blue-400 border-b-2 border-blue-500 bg-blue-500/5' : 'text-slate-500 hover:text-slate-300'
                  }`}>
                  {label}
                </button>
              ))}
            </div>

            <div className="relative w-full">
              <Image
                key={active}
                src={imgs[active]}
                alt={`FlexDSP ${tx.tabs[active]}`}
                width={1280}
                height={760}
                className="w-full h-auto block"
                priority={active === 0}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
