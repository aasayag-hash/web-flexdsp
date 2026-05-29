'use client'
import { FadeIn } from '@/components/animations/FadeIn'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/i18n/translations'

const colorMap = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', tag: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', tag: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20' },
  green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', tag: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' },
}

const tags = ['VUmetros', 'Graphic EQ', 'Parametric EQ', 'Crossovers', 'Filtros FIR', 'Mixer', 'Mediciones', 'Dante', 'Opciones', 'Safety', 'Web UI', 'Cross-platform']
const colors = ['blue', 'cyan', 'green', 'blue', 'cyan', 'green', 'blue', 'cyan', 'green', 'blue', 'cyan', 'green'] as const
const icons = [<VUIcon key="vu"/>, <GEQIcon key="geq"/>, <ParamIcon key="param"/>, <CrossoverIcon key="cross"/>, <FIRIcon key="fir"/>, <MixerIcon key="mix"/>, <MeasureIcon key="meas"/>, <DanteIcon key="dante"/>, <EngineIcon key="eng"/>, <UndoIcon key="undo"/>, <WebIcon key="web"/>, <MultiArchIcon key="arch"/>]

export function FeaturesSection() {
  const { lang } = useLang()
  const tx = t[lang].features

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tx.items.map((f, i) => {
            const c = colorMap[colors[i]]
            return (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.10] hover:bg-white/[0.04] cursor-default h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center ${c.text} transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                      {icons[i]}
                    </div>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded border ${c.tag} ml-2 shrink-0`}>{tags[i]}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function VUIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="8" width="2" height="12" rx="1" strokeWidth={1.5}/><rect x="7" y="5" width="2" height="15" rx="1" strokeWidth={1.5}/><rect x="11" y="3" width="2" height="17" rx="1" strokeWidth={1.5}/><rect x="15" y="6" width="2" height="14" rx="1" strokeWidth={1.5}/><rect x="19" y="9" width="2" height="11" rx="1" strokeWidth={1.5}/></svg> }
function GEQIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h2m0 0V8m0 4v4M9 12h2m0 0V6m0 6v6M15 12h2m0 0V9m0 3v5M21 12h-2"/></svg> }
function ParamIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12C3 12 6 5 9 5s4 7 6 7 3-6 6-6"/><circle cx="9" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="15" r="1.5" fill="currentColor" stroke="none"/></svg> }
function CrossoverIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6h10M3 18h10M13 6c3 0 8 2 8 6s-5 6-8 6"/></svg> }
function FIRIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 20l4-8 4 6 4-12 4 14"/></svg> }
function MixerIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg> }
function MeasureIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg> }
function DanteIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg> }
function EngineIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg> }
function UndoIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg> }
function WebIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={1.5}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M12 3a17 17 0 000 18M12 3a17 17 0 010 18"/></svg> }
function MultiArchIcon() { return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8m-4-4v4"/></svg> }
