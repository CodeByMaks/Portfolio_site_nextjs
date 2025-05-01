'use client'

import { ThreeDMarquee } from '@/components/aceternity/ui/3d-marquee'
import { useEffect, useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const images = [
  // Frontend frameworks
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  
  // Languages
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  
  // Markup & Styles
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg",
  
  // Tools & Version control
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  
  // Deployment & DevOps
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  
  // Backend
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  
  // Package managers
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg"
];

export default function Hero() {
  const [hasAnimated, setHasAnimated] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setHasAnimated(true)
    }
  }, [inView])

  return (
    <>
    
    <div className="relative mx-auto flex md:h-[700px] h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-5xl"
      >
        Hi, I’m Muhsin – a front-end developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base"
      >
        Decide. Change. Strive forward. Think. Accept challenges. Get up and act. Abandon stereotypes. Reach. Dream. Open. Believe. Stop. Listen to yourself. Grow. Win. Look at life with open eyes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4"
      >
        <Link href={'/about'}>
          <button className="rounded-md cursor-pointer bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
            About me
          </button>
        </Link>
        <Link href={'/contact'}>
          <button className="rounded-md border cursor-pointer border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
            Contact me
          </button>
        </Link>
      </motion.div>

      <div className="absolute inset-0 z-10 h-full w-full bg-black/50 dark:bg-black/40" />
    
      <Suspense fallback={<div>Loading...</div>}>
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </Suspense>
    </div>
    </>
  )
}
