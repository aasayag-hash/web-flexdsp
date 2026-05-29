'use client'
import { FadeIn } from '@/components/animations/FadeIn'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section id="download" className="py-32 relative overflow-hidden">
      {/* Strong ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[120px]" />
      </div>
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[200px] bg-cyan-500/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            FlexDSP Audio v2.51
          </div>

          <h2 className="font-display font-bold text-white tracking-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}>
            Start processing audio
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              at a professional level
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Deploy FlexDSP on Linux, macOS, or Raspberry Pi.
            Build your ideal DSP chain in minutes with the YAML-driven pipeline.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button variant="primary" size="lg" href="#download">
              <DownloadIcon />
              Download Latest Release
            </Button>
            <Button variant="outline" size="lg" href="#how-it-works">
              <DocsIcon />
              Documentation
            </Button>
          </div>

          {/* Trust signals */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Precision Processing', desc: '64-bit floating point pipeline with phase-accurate filters and zero quantization error.' },
              { icon: '🌍', title: 'Community', desc: 'Active community of audio engineers and DSP enthusiasts worldwide.' },
              { icon: '🚀', title: 'Production Ready', desc: 'Battle-tested in real studio and audiophile deployments across multiple platforms.' },
            ].map((t) => (
              <div key={t.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="text-2xl mb-2">{t.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-1">{t.title}</h3>
                <p className="text-xs text-slate-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
}
function DocsIcon() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
}
