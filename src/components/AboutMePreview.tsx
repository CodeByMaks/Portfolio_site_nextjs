'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/shadcn/ui/button'
import Link from 'next/link'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { WavyBackground } from './aceternity/ui/wavy-background'
import { BackgroundBeams } from './aceternity/ui/background-beams'
import { TextGenerateEffect } from './aceternity/ui/text-generate-effect'

// Предопределенные стабильные позиции для частиц
const STABLE_PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  width: 2 + (i % 5) * 0.8,
  height: 2 + (i % 4) * 0.9,
  left: (10 + i * 3) % 100,
  top: (15 + i * 7) % 100,
  delay: (i * 0.2) % 3,
  x: (i % 3 - 1) * 10,
  y: ((i + 1) % 4 - 2) * 8
}))

export default function AboutMePreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const words = `I'm Max — a front-end developer with a focus on interfaces, animations, and modern technologies. I love to create projects that combine aesthetics, convenience and performance. I work with Next.js, TypeScript, Tailwind, Framer Motion and more.`

  return (
    <section ref={ref} className="relative w-full overflow-hidden z-10 py-32 px-4 md:px-10">
      <WavyBackground className="absolute inset-0" />
      <BackgroundBeams />
      
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/80" />
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-64 md:h-96 relative flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-500/30 border-2 border-white/10 shadow-2xl backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  {/* Стабильные частицы с предопределенными параметрами */}
                  {STABLE_PARTICLES.map((particle) => (
                    <motion.div
                      key={particle.id}
                      className="absolute rounded-full bg-blue-400/80"
                      style={{
                        width: `${particle.width}px`,
                        height: `${particle.height}px`,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                      }}
                      animate={{
                        x: [0, particle.x],
                        y: [0, particle.y],
                        opacity: [0.8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: particle.delay
                      }}
                    />
                  ))}
                  
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 z-10"
                  >
                    {`</>`}
                  </motion.div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/10 to-transparent" />
              
              <motion.div 
                className="absolute border border-blue-400/30 rounded-full"
                style={{ width: '100%', height: '100%' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute border border-purple-400/30 rounded-full"
                style={{ width: '80%', height: '80%' }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300"
            >
             About me
            </motion.h2>
            
            <TextGenerateEffect words={words} className="text-sm md:text-base text-neutral-300 leading-relaxed mb-8" />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link href="/about">
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 transition group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Learn more
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      →
                    </motion.span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}