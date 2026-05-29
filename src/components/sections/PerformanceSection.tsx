'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'

function useCounter(target: number, duration = 1.5, active = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / (duration * 1000), 1)
      setValue(Math.round(p * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, active])
  return value
}

const metrics = [
  { label: 'Processing Latency', value: 0.8, unit: 'ms', suffix: '', desc: 'End-to-end latency at 64-sample buffer', color: 'blue', max: 1 },
  { label: 'CPU Efficiency', value: 98, unit: '%', suffix: '', desc: 'Multi-threaded pipeline utilization', color: 'cyan', max: 100 },
  { label: 'Dynamic Range', value: 144, unit: 'dB', suffix: '', desc: '64-bit double precision processing', color: 'green', max: 160 },
  { label: 'Filter Precision', value: 99.99, unit: '%', suffix: '', desc: 'Phase-accurate IIR/FIR computation', color: 'blue', max: 100 },
]

const statCards = [
  { value: '<1', unit: 'ms', label: 'Round-trip latency', icon: '⚡' },
  { value: '64', unit: '-bit', label: 'Float precision', icon: '🎯' },
  { value: '∞', unit: '', label: 'FIR tap count', icon: '♾️' },
  { value: '4+', unit: 'x', label: 'CPU core scaling', icon: '⚙️' },
  { value: '96', unit: 'kHz', label: 'Max sample rate', icon: '📡' },
  { value: '0', unit: 'dB', label: 'THD+N target', icon: '🔇' },
]

function MetricBar({ metric, active }: { metric: typeof metrics[0]; active: boolean }) {
  const pct = (metric.value / metric.max) * 100

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-300">{metric.label}</span>
        <span className={`text-sm font-mono font-bold ${
          metric.color === 'blue' ? 'text-blue-400' :
          metric.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
        }`}>
          {metric.value}{metric.unit}
        </span>
      </div>
      <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            metric.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-400' :
            metric.color === 'cyan' ? 'bg-gradient-to-r from-cyan-600 to-cyan-400' :
            'bg-gradient-to-r from-emerald-600 to-emerald-400'
          }`}
          initial={{ width: 0 }}
          animate={active ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <p className="text-xs text-slate-600">{metric.desc}</p>
    </div>
  )
}

export function PerformanceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="performance" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium tracking-wider uppercase mb-6">
            Performance
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            Engineered for
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              maximum performance
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every component of FlexDSP is optimized from the ground up — from memory allocation to SIMD-accelerated filter math.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Metrics */}
          <FadeIn direction="left">
            <div ref={ref} className="space-y-8">
              {metrics.map((m) => (
                <MetricBar key={m.label} metric={m} active={inView} />
              ))}
            </div>
          </FadeIn>

          {/* Stats grid */}
          <FadeIn direction="right">
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.10] transition-colors"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display font-bold text-2xl text-white">{s.value}</span>
                    <span className="text-sm text-blue-400 font-mono">{s.unit}</span>
                  </div>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Architecture diagram */}
        <FadeIn>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h3 className="font-semibold text-white mb-6 text-center">Multi-threaded Pipeline Architecture</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {[
                { label: 'Audio Backend', sublabel: 'ALSA / Dante AES67', color: 'blue' },
                { label: 'Sample Buffer', sublabel: '64–4096 samples', color: 'slate' },
                { label: 'DSP Thread Pool', sublabel: 'N × CPU cores', color: 'cyan' },
                { label: 'Filter Stages', sublabel: 'FIR · IIR · Conv', color: 'green' },
                { label: 'Output Buffer', sublabel: 'Zero-copy write', color: 'slate' },
              ].map((node, i) => (
                <div key={node.label} className="flex items-center gap-4">
                  <div className={`rounded-lg border px-4 py-3 text-center min-w-[120px] ${
                    node.color === 'blue' ? 'border-blue-500/30 bg-blue-500/10' :
                    node.color === 'cyan' ? 'border-cyan-500/30 bg-cyan-500/10' :
                    node.color === 'green' ? 'border-emerald-500/30 bg-emerald-500/10' :
                    'border-white/[0.08] bg-white/[0.03]'
                  }`}>
                    <div className={`text-xs font-semibold mb-1 ${
                      node.color === 'blue' ? 'text-blue-400' :
                      node.color === 'cyan' ? 'text-cyan-400' :
                      node.color === 'green' ? 'text-emerald-400' :
                      'text-slate-300'
                    }`}>{node.label}</div>
                    <div className="text-xs text-slate-600">{node.sublabel}</div>
                  </div>
                  {i < 4 && (
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      className="text-blue-500 font-bold text-lg hidden md:block"
                    >→</motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
