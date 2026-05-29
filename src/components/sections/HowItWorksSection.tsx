'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'

const steps = [
  {
    step: '01',
    title: 'Audio Input',
    desc: 'Capture audio from any supported backend — ALSA, PipeWire, CoreAudio, WASAPI — or from virtual audio devices and AES/DANTE interfaces.',
    icon: <InputIcon />,
    color: 'blue',
  },
  {
    step: '02',
    title: 'DSP Pipeline',
    desc: 'Route the audio stream through your custom YAML-defined pipeline: split channels, apply gains, set delays, and build complex signal paths.',
    icon: <PipeIcon />,
    color: 'cyan',
  },
  {
    step: '03',
    title: 'Filters & Mixers',
    desc: 'Apply FIR/IIR filters, convolution, biquad sections, and matrix mixing. Each filter stage runs in 64-bit float precision.',
    icon: <FilterIcon />,
    color: 'blue',
  },
  {
    step: '04',
    title: 'Real-time Engine',
    desc: 'The multi-threaded processing engine evaluates the full pipeline in real-time, leveraging all available CPU cores for zero-compromise performance.',
    icon: <EngineIcon />,
    color: 'cyan',
  },
  {
    step: '05',
    title: 'Audio Output',
    desc: 'Deliver processed audio to your speakers, amplifiers, or downstream devices with sub-millisecond latency and pristine signal integrity.',
    icon: <OutputIcon />,
    color: 'green',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium tracking-wider uppercase mb-6">
            Pipeline
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            How the DSP
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              pipeline works
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From raw audio input to precision-processed output — every stage is engineered for reliability and performance.
          </p>
        </FadeIn>

        {/* Pipeline flow */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden lg:block" />

          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`flex items-center gap-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col`}>
                  {/* Content card */}
                  <div className="flex-1 relative group">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.10] hover:bg-white/[0.04]">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          s.color === 'blue' ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' :
                          s.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400' :
                          'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                        }`}>
                          {s.icon}
                        </div>
                        <div>
                          <div className="text-xs font-mono text-slate-600 mb-1">Step {s.step}</div>
                          <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 items-center justify-center shrink-0 z-10">
                    <span className="text-xs font-mono font-bold text-blue-400">{s.step}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function InputIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
}
function PipeIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 15l3 3-3 3"/></svg>
}
function FilterIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
}
function EngineIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
}
function OutputIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
}
