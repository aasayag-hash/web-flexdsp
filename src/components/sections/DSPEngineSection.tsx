'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'

const paramEQBands = [
  { freq: '80', gain: 3, type: 'Peaking' },
  { freq: '250', gain: -2, type: 'Peaking' },
  { freq: '1k', gain: 4, type: 'Peaking' },
  { freq: '4k', gain: 2, type: 'Peaking' },
  { freq: '12k', gain: -1, type: 'Highshelf' },
]

const vuChannels = [
  { name: 'IN L', level: 82, color: 'blue' },
  { name: 'IN R', level: 78, color: 'blue' },
  { name: 'SUB', level: 91, color: 'cyan' },
  { name: 'MID L', level: 65, color: 'green' },
  { name: 'MID R', level: 68, color: 'green' },
  { name: 'HF L', level: 44, color: 'cyan' },
  { name: 'HF R', level: 47, color: 'cyan' },
]

export function DSPEngineSection() {
  const [activeTab, setActiveTab] = useState<'vu' | 'eq' | 'routing'>('vu')

  return (
    <section id="dsp-engine" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium tracking-wider uppercase mb-6">
            Web Console
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            Professional control
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              from any browser
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The FlexDSP web console runs on port 5000 and gives you full real-time control
            over VU meters, parametric EQ, crossovers, FIR filters, and routing — from any device on your network.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="rounded-2xl border border-white/[0.06] bg-[#0c0f1a]/80 overflow-hidden">
            {/* App header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs font-mono text-slate-500">FlexDSP Audio — v2.51</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-slate-600">44.1 kHz · 512 samples</span>
                <span className="text-slate-600">·</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400">RUNNING</span>
                </div>
              </div>
            </div>

            {/* Tab bar — matches real product tabs */}
            <div className="flex border-b border-white/[0.06] overflow-x-auto">
              {([
                { key: 'vu', label: 'VU Meters' },
                { key: 'eq', label: 'Parametric EQ' },
                { key: 'routing', label: 'Mixer / Routing' },
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'text-blue-400 border-b-2 border-blue-500 bg-blue-500/5'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'vu' && (
                <div>
                  <p className="text-xs text-slate-600 font-mono mb-4">Real-time RMS level meters with gain faders, mute, polarity and delay per channel</p>
                  <div className="flex gap-3">
                    {vuChannels.map((ch, idx) => {
                      const lo = Math.max(10, ch.level - 12)
                      const hi = Math.min(98, ch.level + 8)
                      const mid = ch.level
                      return (
                        <div key={ch.name} className="flex flex-col items-center gap-2 flex-1">
                          <div className="w-full h-28 bg-black/30 rounded relative overflow-hidden border border-white/[0.04]">
                            {/* dBFS scale lines */}
                            {[0, 25, 50, 75].map(pct => (
                              <div key={pct} className="absolute w-full h-px bg-white/[0.04]" style={{ top: `${pct}%` }} />
                            ))}
                            <motion.div
                              className={`absolute bottom-0 left-0 right-0 ${
                                ch.color === 'blue' ? 'bg-gradient-to-t from-blue-700 to-blue-400' :
                                ch.color === 'cyan' ? 'bg-gradient-to-t from-cyan-700 to-cyan-400' :
                                'bg-gradient-to-t from-emerald-700 to-emerald-400'
                              }`}
                              animate={{ height: [`${lo}%`, `${hi}%`, `${mid}%`, `${lo}%`] }}
                              transition={{ duration: 1.2 + idx * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                            />
                          </div>
                          <span className="text-xs font-mono text-slate-500">{ch.name}</span>
                        </div>
                      )
                    })}
                  </div>
                  {/* Fader row hint */}
                  <div className="mt-4 flex gap-3">
                    {vuChannels.map((ch) => (
                      <div key={ch.name} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full h-1.5 bg-white/[0.06] rounded-full">
                          <div
                            className="h-full bg-blue-500/40 rounded-full"
                            style={{ width: `${ch.level}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono text-slate-700">0 dB</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'eq' && (
                <div>
                  <p className="text-xs text-slate-600 font-mono mb-4">Parametric EQ ±15 dB — drag nodes to adjust · double-click to add · import from REW / APO / YAML</p>
                  <div className="h-52 relative border border-white/[0.04] rounded-lg overflow-hidden bg-black/20">
                    {/* Grid */}
                    {[0, 25, 50, 75, 100].map(pct => (
                      <div key={pct} className="absolute w-full h-px bg-white/[0.04]" style={{ top: `${pct}%` }} />
                    ))}
                    {/* 0 dB */}
                    <div className="absolute w-full h-px bg-white/10" style={{ top: '50%' }} />
                    <span className="absolute text-xs font-mono text-slate-700" style={{ top: '48%', left: 4 }}>0 dB</span>
                    <span className="absolute text-xs font-mono text-slate-700" style={{ top: '10%', left: 4 }}>+15</span>
                    <span className="absolute text-xs font-mono text-slate-700" style={{ top: '85%', left: 4 }}>−15</span>

                    {/* EQ curve SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 200">
                      <defs>
                        <linearGradient id="eqLine" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9"/>
                          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.9"/>
                        </linearGradient>
                        <linearGradient id="eqFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15"/>
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,100 C20,98 50,90 80,82 C110,74 130,85 160,78 C185,72 200,62 230,58 C255,55 270,62 295,70 C320,78 350,94 400,98"
                        fill="url(#eqFill)"
                        stroke="none"
                      />
                      <path
                        d="M0,100 C20,98 50,90 80,82 C110,74 130,85 160,78 C185,72 200,62 230,58 C255,55 270,62 295,70 C320,78 350,94 400,98"
                        fill="none"
                        stroke="url(#eqLine)"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Filter nodes */}
                    {paramEQBands.map((band, i) => {
                      const xPct = [10, 28, 50, 68, 88][i]
                      const yPct = 50 - (band.gain / 15) * 40
                      return (
                        <div
                          key={band.freq}
                          className="absolute w-3 h-3 rounded-full bg-cyan-400 border-2 border-white/60 cursor-pointer hover:scale-150 transition-transform shadow-lg shadow-cyan-500/50 -translate-x-1.5 -translate-y-1.5"
                          style={{ left: `${xPct}%`, top: `${yPct}%` }}
                          title={`${band.freq}Hz ${band.gain > 0 ? '+' : ''}${band.gain}dB ${band.type}`}
                        />
                      )
                    })}

                    {/* Freq labels */}
                    <div className="absolute bottom-1 left-0 right-0 flex justify-between px-6 text-slate-700 font-mono" style={{ fontSize: '0.6rem' }}>
                      {['20Hz', '100Hz', '1kHz', '10kHz', '20kHz'].map(f => <span key={f}>{f}</span>)}
                    </div>
                  </div>

                  {/* Band summary */}
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {paramEQBands.map(band => (
                      <div key={band.freq} className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-xs font-mono text-slate-400">{band.freq}Hz</span>
                        <span className={`text-xs font-mono font-bold ${band.gain > 0 ? 'text-cyan-400' : 'text-blue-400'}`}>
                          {band.gain > 0 ? '+' : ''}{band.gain} dB
                        </span>
                        <span className="text-xs text-slate-600">{band.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'routing' && (
                <div>
                  <p className="text-xs text-slate-600 font-mono mb-4">Input → Output routing matrix with per-channel gain, delay and Dante RX/TX assignment</p>
                  <div className="overflow-x-auto">
                    <div className="min-w-[400px]">
                      <table className="w-full text-xs font-mono">
                        <thead>
                          <tr>
                            <th className="text-slate-600 text-left py-2 pr-4">IN \ OUT</th>
                            {['OUT 1', 'OUT 2', 'OUT 3', 'OUT 4', 'OUT 5', 'OUT 6'].map(o => (
                              <th key={o} className="text-slate-500 py-2 px-3">{o}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['IN 1', true, false, true, false, false, false],
                            ['IN 2', false, true, false, true, false, false],
                            ['IN 3', false, false, false, false, true, true],
                            ['IN 4', false, false, false, false, true, true],
                          ].map((row) => (
                            <tr key={row[0] as string} className="border-t border-white/[0.04]">
                              <td className="text-slate-500 py-2 pr-4">{row[0]}</td>
                              {(row.slice(1) as boolean[]).map((active, ci) => (
                                <td key={ci} className="py-2 px-3 text-center">
                                  <div className={`w-5 h-5 rounded mx-auto flex items-center justify-center text-xs ${
                                    active
                                      ? 'bg-blue-500/20 border border-blue-500/40 text-blue-400'
                                      : 'bg-white/[0.03] border border-white/[0.06] text-slate-700'
                                  }`}>
                                    {active ? '✓' : '·'}
                                  </div>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Dante badge */}
                  <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-500/5 border border-cyan-500/15 w-fit">
                    <span className="text-xs font-mono text-cyan-400">♫ Dante / AES67</span>
                    <span className="text-xs text-slate-600">RX/TX channel config available from this tab</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
