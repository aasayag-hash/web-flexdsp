'use client'
import { useEffect, useRef } from 'react'

interface AudioWaveProps {
  className?: string
  bars?: number
  color?: string
  secondaryColor?: string
}

export function AudioWave({
  className = '',
  bars = 64,
  color = '#2563eb',
  secondaryColor = '#06b6d4',
}: AudioWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      timeRef.current += 0.015
      const t = timeRef.current
      const barW = w / bars
      const gap = barW * 0.25

      for (let i = 0; i < bars; i++) {
        const norm = i / bars
        const wave1 = Math.sin(norm * Math.PI * 4 + t) * 0.4
        const wave2 = Math.sin(norm * Math.PI * 2.5 + t * 1.3) * 0.3
        const wave3 = Math.sin(norm * Math.PI * 6 + t * 0.7) * 0.15
        const amp = Math.abs(wave1 + wave2 + wave3) * 0.6 + 0.05
        const barH = amp * h * 0.85

        const x = i * barW + gap / 2
        const y = (h - barH) / 2

        const progress = i / bars
        const r1 = parseInt(color.slice(1, 3), 16)
        const g1 = parseInt(color.slice(3, 5), 16)
        const b1 = parseInt(color.slice(5, 7), 16)
        const r2 = parseInt(secondaryColor.slice(1, 3), 16)
        const g2 = parseInt(secondaryColor.slice(3, 5), 16)
        const b2 = parseInt(secondaryColor.slice(5, 7), 16)
        const r = Math.round(r1 + (r2 - r1) * progress)
        const g = Math.round(g1 + (g2 - g1) * progress)
        const b = Math.round(b1 + (b2 - b1) * progress)

        const grad = ctx.createLinearGradient(x, y, x, y + barH)
        grad.addColorStop(0, `rgba(${r},${g},${b},0.9)`)
        grad.addColorStop(0.5, `rgba(${r},${g},${b},1)`)
        grad.addColorStop(1, `rgba(${r},${g},${b},0.9)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.roundRect(x, y, barW - gap, barH, 2)
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [bars, color, secondaryColor])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}
