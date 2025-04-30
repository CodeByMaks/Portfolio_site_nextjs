'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import { Input } from '@/components/shadcn/ui/input'
import { Textarea } from '@/components/shadcn/ui/textarea'
import { Button } from '@/components/shadcn/ui/button'

const CanvasBackground = dynamic(() => import('./CanvasBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
})

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)

  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log('Form submitted:', formData)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) return null 

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="relative w-full h-screen overflow-hidden">

      <CanvasBackground />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md px-4"
        >
          <h1
            className={`text-3xl font-bold text-center mb-8 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Contact Me
          </h1>

          <form
            onSubmit={handleSubmit}
            className={`rounded-lg p-8 border space-y-6 backdrop-blur-md ${
              isDark
                ? 'bg-white/10 border-white/20'
                : 'bg-black/10 border-black/20'
            }`}
          >
            <div className="space-y-2">
              <Input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className={`${
                  isDark
                    ? 'bg-black/40 text-white placeholder-white/70 border-white/30'
                    : 'bg-white text-black placeholder-black/50 border-black/30'
                }`}
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`${
                  isDark
                    ? 'bg-black/40 text-white placeholder-white/70 border-white/30'
                    : 'bg-white text-black placeholder-black/50 border-black/30'
                }`}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`${
                  isDark
                    ? 'bg-black/40 text-white placeholder-white/70 border-white/30'
                    : 'bg-white text-black placeholder-black/50 border-black/30'
                }`}
                placeholder="Your message here..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-6 text-lg ${
                isDark
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
