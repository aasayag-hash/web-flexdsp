'use client'
import { createContext, useContext, useState, useEffect } from 'react'

type Lang = 'en' | 'es'
const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({ lang: 'en', toggle: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('flexdsp-lang') as Lang | null
    if (saved) { setLang(saved); return }
    const browser = navigator.language.toLowerCase()
    if (browser.startsWith('es')) setLang('es')
  }, [])

  const toggle = () => {
    setLang(l => {
      const next = l === 'en' ? 'es' : 'en'
      localStorage.setItem('flexdsp-lang', next)
      return next
    })
  }

  return <LanguageContext.Provider value={{ lang, toggle }}>{children}</LanguageContext.Provider>
}

export function useLang() { return useContext(LanguageContext) }
