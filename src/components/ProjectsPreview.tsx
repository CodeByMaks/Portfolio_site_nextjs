'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { BackgroundBeams } from './aceternity/ui/background-beams'
import darkshop from '@/assets/image.png'
import instagramm from '@/assets/instagram.png'

const projects = [
  {
    title: 'DarkByteShop',
    description: 'Интернет-магазин товаров по кибербезопасности с современным UI и защищенными платежами.',
    image: darkshop,
    link: '/projects',
    tags: ['Next.js', 'i18n', 'Tailwind', 'next-router', 'Swiper']
  },
  {
    title: 'Instagram Clone',
    description: 'Создания копии популярного сервиса Instagram.',
    image: instagramm,
    link: '/projects',
    tags: ['React', 'TypeScript', 'react-router', 'redux-toolkit', 'zod', 'date-fns', 'radix-ui']
  }
]

export default function FeaturedProjects() {
  return (
    <section className="relative z-10 md:py-32 py-20 w-full overflow-hidden">
      <BackgroundBeams className="absolute inset-0 opacity-20 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-black dark:text-white">
            My projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
			 Here are my works that combine modern technologies and a creative approach
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Link href={project.link}>
                <Card className="relative h-full overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-white/30 shadow-xl hover:shadow-2xl">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold dark:text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 group"
                    >
                      <span className="text-black dark:text-white flex items-center gap-1">
                      Learn more
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/projects">
            <Button 
              variant="ghost" 
              className="dark:text-white text-black border dark:border-white/20 border-gray-700 cursor-pointer hover:bg-white/10 hover:border-white/40 px-8 py-6 text-lg"
            >
              See all projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}