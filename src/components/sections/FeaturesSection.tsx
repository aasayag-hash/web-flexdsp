'use client'
import { FadeIn } from '@/components/animations/FadeIn'

const features = [
  {
    icon: <VUIcon />,
    title: 'Real-time VU Meters',
    desc: 'Live RMS level meters per channel with gain faders, mute, polarity inversion, per-channel delay, and limiter/compressor controls.',
    color: 'blue',
    tag: 'VU Tab',
  },
  {
    icon: <EQIcon />,
    title: '31-band Graphic EQ',
    desc: 'Linear-phase graphic equalizer with 31 bands (±9 dB) applied to input channels. Phase-accurate processing with no pre-ringing artifacts.',
    color: 'cyan',
    tag: 'Graphic EQ',
  },
  {
    icon: <ParamEQIcon />,
    title: 'Interactive Parametric EQ',
    desc: 'Full-featured parametric EQ (±15 dB) with drag-and-drop filter nodes. Import from REW, Equalizer APO, YAML or CSV. Export to YAML.',
    color: 'green',
    tag: 'Parametric EQ',
  },
  {
    icon: <CrossoverIcon />,
    title: 'Active Crossovers',
    desc: 'Butterworth and Linkwitz-Riley crossover filters up to 48 dB/oct per channel, with real-time frequency response graph.',
    color: 'blue',
    tag: 'Crossovers',
  },
  {
    icon: <FIRIcon />,
    title: 'FIR Filter Loading',
    desc: 'Load FIR convolution filters up to 200,000 taps from .wav, .f64, or .f32 files. Browser-side FFT magnitude and phase graph.',
    color: 'cyan',
    tag: 'FIR Filters',
  },
  {
    icon: <MixerIcon />,
    title: 'Matrix Mixer & Routing',
    desc: 'Full I/O routing matrix with presets, ALSA device selector, and integrated Dante/AES67 channel configuration.',
    color: 'green',
    tag: 'Mixer',
  },
  {
    icon: <DanteIcon />,
    title: 'Dante / AES67 Support',
    desc: 'Native Dante audio over IP via inferno ALSA plugin. Configure RX/TX channels (2–12) from the web console. PTP sync via statime.',
    color: 'blue',
    tag: 'Dante',
  },
  {
    icon: <UndoIcon />,
    title: 'Auto Backup & Undo',
    desc: 'Every config change is automatically backed up to config-bk.yml. One-click undo restores the previous configuration instantly.',
    color: 'cyan',
    tag: 'Safety',
  },
  {
    icon: <PresetIcon />,
    title: 'Preset Management',
    desc: 'Save, load, and delete complete DSP pipeline presets — including Dante channel assignments. Presets stored as versioned YAML files.',
    color: 'green',
    tag: 'Presets',
  },
  {
    icon: <EngineIcon />,
    title: 'Engine Options',
    desc: 'Fine-tune buffer sizes (64 → 4096 samples), resampling quality, silence detection threshold, and multi-threading parameters.',
    color: 'blue',
    tag: 'Options',
  },
  {
    icon: <WebIcon />,
    title: 'Browser-based Console',
    desc: 'Access the full DSP control interface from any browser on your local network at port 5000 — no app installation required.',
    color: 'cyan',
    tag: 'Web UI',
  },
  {
    icon: <MultiArchIcon />,
    title: 'Multi-architecture',
    desc: 'Pre-built engine binaries for aarch64 (RPi4/5, TV-Box), armv7 (RPi3), and x86_64. One-command installer for all platforms.',
    color: 'green',
    tag: 'Cross-platform',
  },
]

const colorMap = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    tag: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    tag: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  },
  green: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    tag: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium tracking-wider uppercase mb-6">
            Capabilities
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            Everything you need for
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              professional audio DSP
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A complete real-time DSP system — from VU metering to FIR convolution — controlled through a
            professional browser-based console.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const c = colorMap[f.color as keyof typeof colorMap]
            return (
              <FadeIn key={f.title} delay={i * 0.04}>
                <div className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.10] hover:bg-white/[0.04] cursor-default h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center ${c.text} transition-transform duration-300 group-hover:scale-110`}>
                      {f.icon}
                    </div>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded border ${c.tag}`}>{f.tag}</span>
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

function VUIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="8" width="2" height="12" rx="1" strokeWidth={1.5}/><rect x="7" y="5" width="2" height="15" rx="1" strokeWidth={1.5}/><rect x="11" y="3" width="2" height="17" rx="1" strokeWidth={1.5}/><rect x="15" y="6" width="2" height="14" rx="1" strokeWidth={1.5}/><rect x="19" y="9" width="2" height="11" rx="1" strokeWidth={1.5}/></svg>
}
function EQIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h2m0 0V8m0 4v4M9 12h2m0 0V6m0 6v6M15 12h2m0 0V9m0 3v5M21 12h-2"/></svg>
}
function ParamEQIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12C3 12 6 5 9 5s4 7 6 7 3-6 6-6"/><circle cx="9" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="15" r="1.5" fill="currentColor" stroke="none"/></svg>
}
function CrossoverIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6h10M3 18h10M13 6c3 0 8 2 8 6s-5 6-8 6"/></svg>
}
function FIRIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 20l4-8 4 6 4-12 4 14"/></svg>
}
function MixerIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
}
function DanteIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg>
}
function UndoIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
}
function PresetIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/></svg>
}
function EngineIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
}
function WebIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={1.5}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M12 3a17 17 0 000 18M12 3a17 17 0 010 18"/></svg>
}
function MultiArchIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8m-4-4v4"/></svg>
}
