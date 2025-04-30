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

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js', "Java Script", 'Shadcn/ui', 'Html/Css'
]

const tools = [
	{ 
	  name: 'VS Code', 
	  icon: vscodeIcon, 
	  description: 'My primary code editor, perfect for working with React, TypeScript, and Next.js with great extension support.'
	},
	{ 
	  name: 'Linux', 
	  icon: linuxIcon, 
	  description: 'I use Linux as my main development environment—fast, flexible, and efficient.'
	},
	{ 
	  name: 'VS Enterprise 2022', 
	  icon: vsenterprice, 
	  description: 'A powerful IDE for larger projects, especially for C# and .NET development.'
	},
	{ 
	  name: 'Figma', 
	  icon: figmaIcon, 
	  description: 'A tool for designing and prototyping UI/UX, which I use for creating intuitive user interfaces.'
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
      <div className="absolute inset-0 pointer-events-none select-none">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.05 }}
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
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Hi, I&apos;m Maks!
          </h2>
          <p className="text-lg mb-4 leading-relaxed text-gray-400 dark:text-gray-300">
            I&apos;m a passionate frontend developer with a strong focus on creating visually engaging and interactive web experiences.
          </p>
          <p className="text-lg mb-4 leading-relaxed text-gray-400 dark:text-gray-300">
            I enjoy turning complex problems into simple, beautiful, and intuitive designs.
          </p>
          <p className="text-lg mb-4 font-medium">My current stack includes:</p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 text-center gap-2 text-base font-medium text-gray-800 dark:text-gray-100">
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex justify-center">
          <div className="w-80 h-80 relative rounded-full overflow-hidden border-4 border-gray-300 dark:border-white shadow-lg hover:scale-105 transition-transform duration-500">
            <Image
              src={me}
              alt="Maks' Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Инструменты */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="mt-20"
      >
        <h3 className="text-3xl font-bold text-center mb-6">My Tools</h3>
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
            These are the tools I use in my daily development process, enhancing my productivity and workflow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-lg">
                  <Image src={tool.icon} alt={tool.name} layout="fill" objectFit="cover" />
                </div>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{tool.name}</p>
                <p className="text-base text-gray-600 dark:text-gray-300">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
