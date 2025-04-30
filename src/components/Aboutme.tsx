'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js'
]

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    }
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 lg:px-32 bg-black text-white overflow-hidden"
    >
      {/* Градиентные свечения */}
      <div className="absolute -top-20 left-0 w-[300px] h-[300px] bg-fuchsia-600/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-10 right-0 w-[200px] h-[200px] bg-indigo-600/30 blur-2xl rounded-full animate-pulse" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12"
      >
        {/* 3D карточка с фото */}
        <motion.div
          variants={itemVariants}
          whileHover={{ rotateY: 10, rotateX: -5 }}
          className="relative group h-[360px] w-full md:w-[380px] rounded-xl bg-gradient-to-br from-indigo-800 via-indigo-600 to-purple-700 shadow-xl transform transition-transform duration-500 perspective"
        >
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <Image
              src="/your-photo.jpg"
              alt="Max"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
          </div>
        </motion.div>

        {/* Описание */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 max-w-xl"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            Привет! Я <span className="text-white font-semibold">Макс</span> — фронтенд-разработчик, создающий сайты, которые не просто работают, а вдохновляют. Работаю с <strong>Next.js</strong>, <strong>GSAP</strong> и <strong>Three.js</strong>, превращая интерфейсы в живые, интерактивные миры.
          </p>

          <p className="text-gray-400">
            Я обожаю визуальные эффекты, рендеры в реальном времени и анимации на скролле. Для меня важна каждая деталь — от структуры до микровзаимодействий.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
