'use client'
import { motion } from 'framer-motion'
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
            Open Source · Free Forever
          </div>

          <h2 className="font-display font-bold text-white tracking-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}>
            Start processing audio
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              at a professional level
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            FlexDSP is open-source and free. Deploy on Linux, macOS, or Raspberry Pi.
            Build your ideal DSP chain in minutes with the YAML-driven pipeline.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button variant="primary" size="lg" href="https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend/releases" external>
              <DownloadIcon />
              Download Latest Release
            </Button>
            <Button variant="secondary" size="lg" href="https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend" external>
              <GithubIcon />
              View on GitHub
            </Button>
            <Button variant="outline" size="lg" href="https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend#readme" external>
              <DocsIcon />
              Documentation
            </Button>
          </div>

          {/* Trust signals */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🔓', title: 'Open Source', desc: 'MIT licensed. Full access to the source code on GitHub.' },
              { icon: '🌍', title: 'Community', desc: 'Active community of audio engineers and DSP enthusiasts.' },
              { icon: '🚀', title: 'Production Ready', desc: 'Battle-tested in real studio and audiophile deployments.' },
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
function GithubIcon() {
  return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
}
function DocsIcon() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
}
