'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { AudioWave } from '@/components/animations/AudioWave'
import { ParticleField } from '@/components/animations/ParticleField'
import { Button } from '@/components/ui/Button'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.1 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0">
        <ParticleField className="opacity-60" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[200px] bg-blue-800/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            variants={stagger.container}
            initial="initial"
            animate="animate"
          >
            {/* Badge */}
            <motion.div variants={stagger.item} className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                FlexDSP Audio v2.51 · Professional DSP
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={stagger.item}
              className="font-display font-bold tracking-tight leading-[0.9] text-white mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              Precision DSP
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-glow-blue">
                Processing
              </span>
              <br />
              Without Limits
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={stagger.item}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              FlexDSP Audio is a complete DSP system for Linux embedded devices — with real-time
              VU metering, parametric EQ, active crossovers, FIR filters, Dante/AES67 support,
              and a browser-based control console accessible from any device on your network.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={stagger.item}
              className="flex flex-wrap items-center justify-center gap-4 mb-16"
            >
              <Button variant="primary" size="lg" href="#download">
                <DownloadIcon />
                Download Free
              </Button>
              <Button variant="ghost" size="lg" href="#how-it-works">
                Learn More
                <ArrowIcon />
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={stagger.item}
              className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-slate-500"
            >
              {[
                { value: 'v2.51', label: 'Latest Version' },
                { value: '64-bit', label: 'Precision' },
                { value: '31', label: 'EQ Bands' },
                { value: 'Dante', label: 'AES67 Support' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-bold text-white font-display">{s.value}</span>
                  <span className="text-xs uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Waveform visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' as const }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-slate-600 ml-2 font-mono">flexdsp · real-time processor · 44100Hz · 64-bit float</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-mono">ACTIVE</span>
              </div>
            </div>

            {/* Waveform */}
            <div className="h-24 w-full">
              <AudioWave bars={80} />
            </div>

            {/* Bottom labels */}
            <div className="flex justify-between mt-3 text-xs font-mono text-slate-600">
              <span>20Hz</span>
              <span>100Hz</span>
              <span>1kHz</span>
              <span>10kHz</span>
              <span>20kHz</span>
            </div>

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080a0f]/50 pointer-events-none rounded-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}
