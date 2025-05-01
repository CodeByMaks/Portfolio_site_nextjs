'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Input } from '@/components/shadcn/ui/input'
import { Textarea } from '@/components/shadcn/ui/textarea'
import { Button } from '@/components/shadcn/ui/button'
import axios from 'axios'

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
  const [notification, setNotification] = useState({ show: false, message: '', isError: false })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendToTelegram = async (data: typeof formData) => {
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
    
    const text = `
      📩 Новое сообщение с сайта:
      👤 Имя: ${data.name}
      📧 Email: ${data.email}
      ✉️ Сообщение: ${data.message}
    `

    try {
      await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML'
        }
      )
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendToTelegram(formData)
      setNotification({
        show: true,
        message: 'Сообщение успешно отправлено!',
        isError: false
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setNotification({
        show: true,
        message: 'Ошибка при отправке сообщения',
        isError: true
      })
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setNotification({ show: false, message: '', isError: false }), 5000)
    }
  }

  if (!mounted) return null

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CanvasBackground />

      {/* Уведомление */}
      {notification.show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg bg-black/80 backdrop-blur-sm border ${
            notification.isError ? 'border-purple-500 text-purple-400' : 'border-fuchsia-500 text-fuchsia-400'
          } shadow-lg shadow-${notification.isError ? 'purple-500/30' : 'fuchsia-500/30'}`}
        >
          {notification.message}
        </motion.div>
      )}

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md px-4"
        >
          <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-black dark:text-white">
            Contact Me
          </h1>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl p-8 space-y-6 bg-black/20 backdrop-blur-sm border border-purple-400/20 shadow-lg shadow-purple-500/10 hover:shadow-fuchsia-500/20 transition-all duration-300"
          >
            <div className="space-y-2">
              <Input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-black/30 text-purple-100 placeholder-purple-400/50 border border-purple-400/30 focus:border-fuchsia-400/60 focus:ring-1 focus:ring-fuchsia-400/30 neon-input"
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
                className="bg-black/30 text-purple-100 placeholder-purple-400/50 border border-purple-400/30 focus:border-fuchsia-400/60 focus:ring-1 focus:ring-fuchsia-400/30 neon-input"
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
                className="bg-black/30 text-purple-100 placeholder-purple-400/50 border border-purple-400/30 focus:border-fuchsia-400/60 focus:ring-1 focus:ring-fuchsia-400/30 neon-input"
                placeholder="Your message here..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 text-lg font-medium bg-gradient-to-r from-purple-500/80 to-fuchsia-600/80 text-white hover:from-purple-500 hover:to-fuchsia-600 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-fuchsia-500/40 neon-button"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </motion.div>
      </div>

      <style jsx global>{`
        .neon-text {
          text-shadow: 0 0 8px rgba(192, 132, 252, 0.6), 0 0 16px rgba(217, 70, 239, 0.4);
        }
        .neon-input {
          transition: all 0.3s ease;
        }
        .neon-input:focus {
          box-shadow: 0 0 8px rgba(217, 70, 239, 0.3);
        }
        .neon-button {
          position: relative;
          overflow: hidden;
        }
        .neon-button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(192, 132, 252, 0),
            rgba(217, 70, 239, 0.3),
            rgba(192, 132, 252, 0)
          );
          transform: rotate(30deg);
          animation: shine 3s infinite;
        }
        @keyframes shine {
          0% { transform: rotate(30deg) translate(-30%, -30%); }
          100% { transform: rotate(30deg) translate(30%, 30%); }
        }
      `}</style>
    </div>
  )
}