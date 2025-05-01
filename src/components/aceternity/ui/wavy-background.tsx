'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const WavyBackground = ({
  className,
}: {
  className?: string
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={cn('absolute inset-0 overflow-hidden', className)} />
  }

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
        style={{
          backgroundColor: 'rgba(124, 58, 237, 0.3)',
          top: '20%',
          height: '20%',
          width: '200%',
          borderRadius: '50%',
          position: 'absolute',
        }}
      />
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
          delay: 5,
        }}
        style={{
          backgroundColor: 'rgba(99, 102, 241, 0.3)',
          top: '50%',
          height: '20%',
          width: '200%',
          borderRadius: '50%',
          position: 'absolute',
        }}
      />
    </div>
  )
}