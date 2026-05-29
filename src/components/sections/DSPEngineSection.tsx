'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'
import { SpectrumAnalyzer } from '@/components/animations/SpectrumAnalyzer'

const eqBands = [
  { freq: '32', gain: 2 },
  { freq: '64', gain: -1 },
  { freq: '125', gain: 4 },
  { freq: '250', gain: 1 },
  { freq: '500', gain: -3 },
  { freq: '1k', gain: 2 },
  { freq: '2k', gain: 5 },
  { freq: '4k', gain: 1 },
  { freq: '8k', gain: -2 },
  { freq: '16k', gain: 3 },
]

const channels = [
  { name: 'IN L', level: 82, color: 'blue' },
  { name: 'IN R', level: 78, color: 'blue' },
  { name: 'SUB', level: 91, color: 'cyan' },
  { name: 'MID L', level: 65, color: 'green' },
  { name: 'MID R', level: 68, color: 'green' },
  { name: 'HF L', level: 44, color: 'cyan' },
  { name: 'HF R', level: 47, color: 'cyan' },
]

export function DSPEngineSection() {
  const [activeTab, setActiveTab] = useState<'spectrum' | 'eq' | 'routing'>('spectrum')

  return (
    <section id="dsp-engine" className="py-32 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium tracking-wider uppercase mb-6">
            Visual DSP Engine
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            Real-time signal
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              visualization
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Monitor your DSP pipeline in real-time with professional-grade spectrum analysis, EQ visualization, and routing matrix.
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
                <span className="text-xs font-mono text-slate-500">FlexDSP Monitor — v2.1.0</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-slate-600">44.1 kHz</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-600">64 samples</span>
                <span className="text-slate-600">·</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400">RUNNING</span>
                </div>
              </div>
            </div>

            {/* Tab bar */}
            <div className="flex border-b border-white/[0.06]">
              {(['spectrum', 'eq', 'routing'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
                    activeTab === tab
                      ? 'text-blue-400 border-b-2 border-blue-500 bg-blue-500/5'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab === 'spectrum' ? 'Spectrum Analyzer' : tab === 'eq' ? 'EQ Response' : 'Routing Matrix'}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'spectrum' && (
                <div>
                  <div className="h-48 w-full mb-4">
                    <SpectrumAnalyzer />
                  </div>
                  {/* Level meters */}
                  <div className="flex gap-3 mt-6">
                    {channels.map((ch) => (
                      <div key={ch.name} className="flex flex-col items-center gap-2 flex-1">
                        <div className="w-full h-24 bg-black/30 rounded relative overflow-hidden">
                          <motion.div
                            className={`absolute bottom-0 left-0 right-0 rounded ${
                              ch.color === 'blue' ? 'bg-gradient-to-t from-blue-600 to-blue-400' :
                              ch.color === 'cyan' ? 'bg-gradient-to-t from-cyan-600 to-cyan-400' :
                              'bg-gradient-to-t from-emerald-600 to-emerald-400'
                            }`}
                            animate={{ height: `${ch.level + (Math.random() * 10 - 5)}%` }}
                            transition={{ duration: 0.15, repeat: Infinity, repeatType: 'mirror' }}
                          />
                        </div>
                        <span className="text-xs font-mono text-slate-500">{ch.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'eq' && (
                <div>
                  {/* EQ curve simulation */}
                  <div className="h-48 relative mb-4 border border-white/[0.04] rounded-lg overflow-hidden bg-black/20">
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map(i => (
                      <div key={i} className="absolute w-full h-px bg-white/[0.04]" style={{ top: `${i * 25}%` }} />
                    ))}
                    {/* 0dB line */}
                    <div className="absolute w-full h-px bg-white/10" style={{ top: '50%' }} />

                    {/* EQ Bars */}
                    <div className="absolute inset-4 flex items-center gap-2">
                      {eqBands.map((band, i) => {
                        const pct = 50 - (band.gain / 12) * 40
                        return (
                          <div key={band.freq} className="flex-1 relative h-full flex flex-col items-center justify-center">
                            <div className="absolute w-2 h-2 rounded-full bg-cyan-400 cursor-pointer hover:scale-150 transition-transform shadow-lg shadow-cyan-500/50"
                              style={{ top: `${pct}%` }} />
                            <div className="absolute bottom-0 text-xs font-mono text-slate-600" style={{ fontSize: '0.6rem' }}>
                              {band.freq}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* SVG curve */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="eqGrad" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8"/>
                          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8"/>
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 C10,48 20,46 30,42 C40,38 50,34 60,36 C70,38 80,30 90,28 C100,26 110,28 120,32 C130,36 140,40 150,44 C160,48 170,46 180,42 C190,38 200,34 210,36 C220,38 230,44 240,48 C250,52 260,54 270,52 C280,50 290,44 300,40 C310,36 320,38 330,42 C340,46 350,50 360,48"
                        fill="none"
                        stroke="url(#eqGrad)"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>

                  {/* Band controls */}
                  <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                    {eqBands.map((band) => (
                      <div key={band.freq} className="flex flex-col items-center gap-1">
                        <span className={`text-xs font-mono font-bold ${band.gain > 0 ? 'text-cyan-400' : 'text-blue-400'}`}>
                          {band.gain > 0 ? '+' : ''}{band.gain}
                        </span>
                        <span className="text-xs font-mono text-slate-600">{band.freq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'routing' && (
                <div className="overflow-x-auto">
                  <div className="min-w-[400px]">
                    <div className="text-xs font-mono text-slate-500 mb-4">Input → Output routing matrix</div>
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
                                <div className={`w-5 h-5 rounded mx-auto flex items-center justify-center ${
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
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
