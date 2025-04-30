'use client'

import { motion } from 'framer-motion'
import { FileDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='w-full border-t border-border/40 bg-background/95 px-4 py-10 text-muted-foreground'
		>
			<div className='container w-[85%] m-auto mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-4'>
				<div className='sm:col-span-2'>
					<h3 className='text-xl font-semibold text-foreground mb-2'>
						Muhsin Behbudov
					</h3>
					<p className='text-sm leading-relaxed'>
						Frontend developer with passion for interactive interfaces, 3D UI,
						and motion design.
					</p>
				</div>

				{/* Быстрые ссылки */}
				<div>
					<h4 className='text-base font-medium text-foreground mb-2'>
						Quick Links
					</h4>
					<ul className='space-y-1 text-sm'>
						<li>
							<Link href='/about' className='hover:text-foreground'>
								About Me
							</Link>
						</li>
						<li>
							<Link href='/projects' className='hover:text-foreground'>
								Projects
							</Link>
						</li>
						<li>
							<Link href='/contact' className='hover:text-foreground'>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Контакты */}
				<div>
					<h4 className='text-base font-medium text-foreground mb-2'>
						Connect
					</h4>
					<ul className='space-y-1 text-sm'>
						<li className='flex items-center gap-2'>
							<Mail size={16} />{' '}
							<a
								href='mailto:maksdonfort@gmail.com'
								className='hover:text-foreground'
							>
								maksdonfort@gmail.com
							</a>
						</li>
						<li className='flex items-center gap-2'>
							<Github size={16} />{' '}
							<a
								href='https://github.com/CodeByMaks'
								target='_blank'
								className='hover:text-foreground'
							>
								GitHub
							</a>
						</li>
						<li className='flex items-center gap-2'>
							<Linkedin size={16} />{' '}
							<a
								href='https://linkedin.com/in/yourlinkedin'
								target='_blank'
								className='hover:text-foreground'
							>
								LinkedIn
							</a>
						</li>
						<li className='flex items-center gap-2'>
							<FileDown size={16} />{' '}
							<a
								href='/your-cv.pdf'
								download
								className='flex items-center gap-2 text-sm hover:text-foreground'
							>
								My CV
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className='mt-10 text-center text-xs text-muted-foreground/70'>
				© {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind
				CSS.
			</div>
		</motion.footer>
	)
}
