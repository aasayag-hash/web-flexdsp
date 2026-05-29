import { cn } from '@/utils/cn'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
  hover?: boolean
}

export function GlassCard({ children, className, glow, hover }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm',
        glow && 'shadow-lg shadow-blue-500/5',
        hover && 'transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06] hover:shadow-lg hover:shadow-blue-500/10',
        'gradient-border',
        className
      )}
    >
      {children}
    </div>
  )
}
