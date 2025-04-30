'use client'

import { ThreeDMarquee } from '@/components/aceternity/ui/3d-marquee'
import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

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

  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];

  return (
    <div className="relative mx-auto flex md:h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-5xl"
      >
       Hi, I’m Maks – a front-end developer
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

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  )
}
