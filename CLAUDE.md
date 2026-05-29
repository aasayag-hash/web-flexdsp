# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for **FlexDSP Audio** (v2.51) — a professional DSP system built on CamillaDSP for Linux embedded devices (Raspberry Pi, TV-Box, x86). The site promotes the installer + web console available at https://github.com/aasayag-hash/camilladsp-auto-install-with-back-and-frontend.

## Stack

- **Next.js 16** (App Router, TypeScript, static export)
- **TailwindCSS v4** via `@import "tailwindcss"` in globals.css
- **Framer Motion** for animations
- **Google Fonts**: Inter + Space Grotesk (loaded via `next/font/google`)

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build (static)
npm run lint     # ESLint
```

Deploy to Vercel: push to `main` — auto-detected, no config needed.

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, viewport, fonts
│   ├── page.tsx            # Assembles all sections in order
│   └── globals.css         # Tailwind import, CSS vars, custom utilities
├── components/
│   ├── animations/
│   │   ├── AudioWave.tsx        # Canvas waveform bars (Hero)
│   │   ├── SpectrumAnalyzer.tsx # Canvas FFT spectrum (DSP Engine tab)
│   │   ├── ParticleField.tsx    # Canvas particle network (Hero background)
│   │   └── FadeIn.tsx           # Scroll-triggered fade/slide (Framer Motion)
│   ├── sections/               # One file per landing page section
│   └── ui/
│       ├── Navbar.tsx      # Sticky header, mobile menu
│       ├── Footer.tsx
│       ├── Button.tsx      # motion.a/button, variants: primary/secondary/ghost/outline
│       └── GlassCard.tsx   # Glassmorphism wrapper
└── utils/cn.ts             # clsx + tailwind-merge
```

## Key Patterns

- **Canvas animations**: All canvas components follow: `useEffect` → resize with `devicePixelRatio` → `requestAnimationFrame` loop → cleanup.
- **Framer Motion ease**: Use string names (`'easeOut'`) not cubic-bezier arrays — TypeScript constraint.
- **`'use client'`**: Required on components using hooks, canvas, or Framer Motion.
- **Section IDs**: `#features`, `#how-it-works`, `#dsp-engine`, `#performance`, `#use-cases`, `#download`.

## Design Tokens (globals.css)

- Background: `#080a0f` · Accent blue: `#2563eb` · Cyan: `#06b6d4` · Green: `#10b981`
- Custom utilities: `.glow-blue`, `.glow-cyan`, `.text-glow-blue`, `.grid-bg`, `.gradient-border`, `.noise-overlay`
- Font display: `font-display` → Space Grotesk; body → Inter

## Product Context

FlexDSP Audio wraps CamillaDSP with:
- Flask backend (port 5000) proxying to CamillaDSP WebSocket engine (port 1234)
- Browser SPA tabs: VUmetros | Graphic EQ (31-band) | Parametric EQ (±15 dB, REW import) | Crossovers (Butterworth/L-R up to 48 dB/oct) | FIR Filters (.wav/.f64/.f32, 200k taps) | Mixer | Options
- Dante/AES67 via `inferno` ALSA plugin + `statime` PTP daemon
- Architectures: aarch64, armv7, x86_64
