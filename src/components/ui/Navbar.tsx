'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'
import { useLang } from '@/context/LanguageContext'
import { t } from '@/i18n/translations'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, toggle } = useLang()
  const tx = t[lang].nav

  const links = [
    { label: tx.features, href: '#features' },
    { label: tx.howItWorks, href: '#how-it-works' },
    { label: tx.dspEngine, href: '#dsp-engine' },
    { label: tx.performance, href: '#performance' },
    { label: tx.useCases, href: '#use-cases' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#080a0f]/90 backdrop-blur-xl border-b border-white/[0.06]' : ''
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8C2 8 4 3 8 3C12 3 14 8 14 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 8C2 8 4 13 8 13C12 13 14 8 14 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                <circle cx="8" cy="8" r="1.5" fill="white"/>
              </svg>
            </div>
            <span className="font-display font-bold text-white tracking-tight">
              FLEX<span className="text-blue-400">DSP</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + lang toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language selector */}
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono font-bold text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="Toggle language"
            >
              <span className={lang === 'en' ? 'text-blue-400' : 'text-slate-500'}>EN</span>
              <span className="text-slate-700">/</span>
              <span className={lang === 'es' ? 'text-blue-400' : 'text-slate-500'}>ES</span>
            </button>
            <Button variant="outline" size="sm" href="#how-it-works">{tx.learnMore}</Button>
            <Button variant="primary" size="sm" href="#download">{tx.download}</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.06] bg-[#080a0f]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-white/[0.06] items-center">
                <button onClick={toggle}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 text-xs font-mono font-bold text-slate-400 hover:text-white hover:border-white/20 transition-all">
                  <span className={lang === 'en' ? 'text-blue-400' : 'text-slate-500'}>EN</span>
                  <span className="text-slate-700">/</span>
                  <span className={lang === 'es' ? 'text-blue-400' : 'text-slate-500'}>ES</span>
                </button>
                <Button variant="outline" size="sm" href="#how-it-works">{tx.learnMore}</Button>
                <Button variant="primary" size="sm" href="#download">{tx.download}</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
