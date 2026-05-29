'use client'
import { useEffect, useRef } from 'react'

interface SpectrumAnalyzerProps {
  className?: string
}

export function SpectrumAnalyzer({ className = '' }: SpectrumAnalyzerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const timeRef = useRef(0)
  const peaksRef = useRef<number[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const BARS = 80
    peaksRef.current = new Array(BARS).fill(0)

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

      timeRef.current += 0.02
      const t = timeRef.current
      const barW = w / BARS
      const gap = 2

      for (let i = 0; i < BARS; i++) {
        const norm = i / BARS
        // Simulate audio spectrum shape (louder in mids)
        const shape = Math.exp(-Math.pow((norm - 0.3) * 2.5, 2)) * 0.7 +
                      Math.exp(-Math.pow((norm - 0.6) * 3, 2)) * 0.4 +
                      (1 - norm) * 0.15
        const noise = Math.sin(norm * 20 + t * 2) * 0.15 +
                      Math.sin(norm * 8 + t * 1.3) * 0.1 +
                      Math.random() * 0.05
        const amp = Math.max(0.02, Math.min(0.95, shape + noise))
        const barH = amp * h * 0.9

        // Update peaks
        if (barH > peaksRef.current[i]) {
          peaksRef.current[i] = barH
        } else {
          peaksRef.current[i] *= 0.97
        }

        const x = i * barW + gap / 2
        const y = h - barH

        // Gradient based on frequency zone
        const grad = ctx.createLinearGradient(x, y, x, h)
        if (norm < 0.3) {
          grad.addColorStop(0, 'rgba(37, 99, 235, 0.9)')
          grad.addColorStop(1, 'rgba(37, 99, 235, 0.3)')
        } else if (norm < 0.7) {
          grad.addColorStop(0, 'rgba(6, 182, 212, 0.9)')
          grad.addColorStop(1, 'rgba(6, 182, 212, 0.3)')
        } else {
          grad.addColorStop(0, 'rgba(16, 185, 129, 0.9)')
          grad.addColorStop(1, 'rgba(16, 185, 129, 0.3)')
        }

        ctx.fillStyle = grad
        ctx.fillRect(x, y, barW - gap, barH)

        // Peak indicator
        ctx.fillStyle = norm < 0.3 ? 'rgba(96, 165, 250, 0.9)' :
                        norm < 0.7 ? 'rgba(103, 232, 249, 0.9)' :
                                     'rgba(52, 211, 153, 0.9)'
        ctx.fillRect(x, h - peaksRef.current[i] - 2, barW - gap, 2)
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}
