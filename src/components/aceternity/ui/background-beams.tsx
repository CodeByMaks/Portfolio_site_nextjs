'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Фиксированные позиции для SSR (можно заменить на детерминированные значения)
  const beams = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: (i * 8) % 100, // Детерминированное распределение вместо random
    y: 0,
    width: 1 + (i % 3),
    height: 20 + (i % 3) * 10,
    delay: (i % 5),
    duration: 5 + (i % 5),
    color: `hsla(${(240 + i * 10) % 360}, 80%, 60%, 0.1)`,
  }))

  if (!mounted) {
    return <div className={cn('absolute inset-0 overflow-hidden -z-10', className)} />
  }

  return (
    <div className={cn('absolute inset-0 overflow-hidden -z-10', className)}>
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          initial={{ opacity: 0, y: -beam.height }}
          animate={{ 
            opacity: [0, 0.3, 0],
            y: [`-${beam.height}px`, `${100 + beam.height}px`]
          }}
          transition={{
            delay: beam.delay,
            duration: beam.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${beam.x}%`,
            top: 0,
            width: `${beam.width}px`,
            height: `${beam.height}px`,
            background: beam.color,
            transform: 'rotate(45deg)',
          }}
        />
      ))}
    </div>
  )
}