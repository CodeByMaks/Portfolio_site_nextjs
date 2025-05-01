'use client'

import me from '@/assets/photo_2025-04-28_16-44-33.jpg'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import figmaIcon from '../../public/assets/1671019028_grizly-club-p-figma-logotip-png-8-3091317583.png'
import linuxIcon from '../../public/assets/kali-linux2962-1520350566.jpg'
import vsenterprice from '../../public/assets/png-transparent-computer-icons-microsoft-visual-studio-visual-studio-code-ico-purple-angle-violet-663655817.png'
import vscodeIcon from '../../public/assets/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-3537533226.png'
import { BackgroundBeams } from './aceternity/ui/background-beams'

const techStack = [
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'] },
  { category: '3D & Animation', items: ['Three.js', 'Framer Motion', 'GSAP'] },
  { category: 'Core', items: ['JavaScript', 'HTML/CSS', 'REST API'] },
  { category: 'Learning', items: ['Node.js', 'Express', 'PostgreSQL'] }
]

const hobbies = [
  { 
    title: 'Шахматы', 
    description: 'Люблю стратегическое мышление и тактику. Играю как онлайн, так и оффлайн с друзьями.' 
  },
  { 
    title: 'Чтение', 
    description: 'Особенно научную фантастику и техническую литературу. Люблю книги, которые расширяют кругозор.' 
  },
  { 
    title: 'Спорт', 
    description: 'Футбол, баскетбол, плавание - всё, что дает заряд энергии и поддерживает форму.' 
  },
  { 
    title: 'Музыка', 
    description: 'От классики до электроники. Музыка - это часть моего творческого процесса.' 
  }
]

const tools = [
  { 
    name: 'VS Code', 
    icon: vscodeIcon, 
    description: 'Мой основной редактор кода с идеальной поддержкой React, TypeScript и Next.js.' 
  },
  { 
    name: 'Linux', 
    icon: linuxIcon, 
    description: 'Основная среда разработки - быстрая, гибкая и эффективная.' 
  },
  { 
    name: 'VS Enterprise', 
    icon: vsenterprice, 
    description: 'Использую для крупных проектов, особенно с C# и .NET.' 
  },
  { 
    name: 'Figma', 
    icon: figmaIcon, 
    description: 'Инструмент для проектирования UI/UX интерфейсов.' 
  }
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
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <section
      id="about"
      className={`relative py-32 px-6 md:px-12 lg:px-32 transition-colors duration-500 ${
        isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
      } overflow-hidden`}
    >
      <BackgroundBeams className="absolute inset-0 -z-10 opacity-30" />
      
      <div className="absolute inset-0 pointer-events-none select-none">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.03 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute text-[20rem] font-bold whitespace-nowrap text-center w-full"
        >
          About Me
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16"
      >
        <motion.div variants={itemVariants} className="w-full lg:w-1/2">
          <h2 className="text-5xl font-bold mb-6 leading-tight bg-clip-text text-black dark:text-white ">
            Привет, я Макс!
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Я фронтенд-разработчик, который превращает сложные идеи в элегантные, интуитивные интерфейсы. 
              Для меня программирование - это искусство, где код становится инструментом реализации творческих замыслов.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              В своей работе я ищу нестандартные решения, экспериментирую с новыми технологиями и стремлюсь 
              создавать продукты, которые впечатляют не только функциональностью, но и эстетикой.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Мой стек технологий:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {techStack.map((stack, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                    <h4 className="font-medium text-lg mb-2">{stack.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 dark:text-purple-300 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-500">
              <Image
                src={me}
                alt="Фото Макса"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Увлечения */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mt-32 relative z-10"
      >
        <h3 className="text-3xl font-bold text-center mb-6">Мои увлечения</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Когда я не пишу код, вы можете найти меня за одним из этих занятий, которые вдохновляют меня и помогают оставаться креативным.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <h4 className="text-xl font-semibold mb-3 text-purple-400">{hobby.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Инструменты */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mt-32 relative z-10"
      >
        <h3 className="text-3xl font-bold text-center mb-6">My Tools</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
        These tools help me in my daily work, making the development process more efficient and enjoyable.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                  <Image src={tool.icon} alt={tool.name} layout="fill" objectFit="cover" className="rounded-full" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{tool.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}