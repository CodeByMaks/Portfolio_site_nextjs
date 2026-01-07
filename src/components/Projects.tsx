'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'
import { BackgroundBeams } from './aceternity/ui/background-beams'
import Link from 'next/link'
import darkshop from '@/assets/image.png'
import instagramm from '@/assets/instagram.png'
import SpaceLabs from '@/assets/SpaceLabs.png'
import Environment from '@/assets/Environment.png'
import Amaz from '@/assets/amaz.png'
import team from '@/assets/team.jpg'

const projects = [
  {
    title: 'DarkByteShop',
    description: 'Интернет-магазин по кибербезопасности с адаптивным дизайном и корзиной.',
    image: darkshop,
    tech: ['Next.js', 'i18n', 'Tailwind', 'next-router', 'Swiper'],
    live: '#',
    code: 'https://github.com/CodeByMaks/DarkByteShop'
  },
  {
    title: 'Instagram Clone',
    description: 'Создания копии популярного сервиса Instagram.',
    image: instagramm,
    tech: ['React', 'TypeScript', 'react-router', 'redux-toolkit', 'zod', 'date-fns', 'radix-ui'],
    live: '#',
    code: 'https://github.com/CodeByMaks/instagram'
  },
  {
    title: 'SpaceLabs',
    description: 'Информационная платформа о мониторинге загрезнения воздуха с использованием 3D-графики.',
    image: SpaceLabs,
    tech: ['Python', 'ThreeJs', 'NextJS', 'Zustand', 'FastAPI'],
    live: '#',
    code: 'https://github.com/CodeByMaks/SpaceLabs'
  },
   {
    title: 'Environment',
    description: 'Туристическая веб-платформа для познания природы и достопримечательностей.',
    image: Environment,
    tech: ['Html', 'Css', 'Python', 'Django', 'JavaScript', 'mySQL'],
    live: '#',
    code: 'https://github.com/CodeByMaks/environment'
  },
   {
    title: 'AmazMarkets',
    description: 'Веб-платформа онлайн магазина.',
    image: Amaz,
    tech: ['React', 'react-router', 'tailwindcss', 'vercel'],
    live: 'https://exam-react-ten.vercel.app/',
    code: 'https://github.com/CodeByMaks/exam-react'
  },
   {
    title: 'Team Project Pixel',
    description: 'Team project',
    image: team,
    tech: ['Html', 'Css', 'JavaScript', 'Figma'],
    live: '#',
    code: 'https://github.com/CodeByMaks/Pixel'
  }
]

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen w-full px-6 md:py-24 py-16 bg-background text-foreground overflow-hidden">
      <BackgroundBeams className="absolute inset-0 opacity-10" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black dark:text-white bg-clip-text">
             My projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are my works that combine modern technologies and a creative approach
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Card className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-60 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500 dark:text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-white/20 hover:border-white/40 hover:bg-white/10"
                    >
                      <a href={project.live} rel="noopener noreferrer">
                        <span className="text-black dark:text-white flex items-center gap-1">
                          🌐 Live
                        </span>
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="ghost" 
                      className="text-white hover:bg-white/10"
                    >
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white flex items-center gap-1">
                          💻 Code
                        </span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link href={'https://github.com/CodeByMaks'}>
          <Button 
            variant="outline" 
            className="dark:border-white/20 border-gray-800 hover:border-white/40 hover:bg-white/10 px-8 py-6 text-lg"
          >
           More projects on GitHub
          </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}