'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'
import { BackgroundBeams } from './aceternity/ui/background-beams'
import Link from 'next/link'

const projects = [
  {
    title: 'DarkByteShop',
    description: 'Интернет-магазин по кибербезопасности с адаптивным дизайном и корзиной.',
    image: '/projects/darkbyteshop.png',
    tech: ['Next.js', 'Tailwind CSS', 'Swiper', 'ShadCN'],
    live: 'https://darkbyteshop.vercel.app',
    code: 'https://github.com/yourusername/darkbyteshop'
  },
  {
    title: 'Portfolio',
    description: 'Минималистичный сайт-портфолио с анимациями GSAP и ScrollMagic.',
    image: '/projects/portfolio.png',
    tech: ['React', 'GSAP', 'Three.js'],
    live: 'https://yourportfolio.vercel.app',
    code: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'AI Image Generator',
    description: 'Генератор изображений на основе искусственного интеллекта.',
    image: '/projects/ai-generator.png',
    tech: ['OpenAI', 'Node.js', 'React'],
    live: 'https://ai-generator.vercel.app',
    code: 'https://github.com/yourusername/ai-generator'
  }
]

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen w-full px-6 py-24 bg-background text-foreground overflow-hidden">
      <BackgroundBeams className="absolute inset-0 opacity-10" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black dark:text-white bg-clip-text">
             Мои проекты
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Здесь собраны мои лучшие работы, сочетающие современные технологии и креативный подход
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
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center gap-1">
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
                        <span className="flex items-center gap-1">
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
            className="border-white/20 hover:border-white/40 hover:bg-white/10 px-8 py-6 text-lg"
          >
            Больше проектов на GitHub
          </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}