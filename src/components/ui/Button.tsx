'use client'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  onClick,
  disabled,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30',
    secondary: 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
    outline: 'border border-white/10 hover:border-white/20 text-slate-300 hover:text-white hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const cls = cn(base, variants[variant], sizes[size], className)

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cls}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={cls}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
