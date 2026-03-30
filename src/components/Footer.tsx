'use client'

import { motion } from 'framer-motion'
import { CloudIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Footer() {
	const t = useTranslations()

	const footerSections = [
		{
			title: 'footer.product',
			links: ['features', 'pricing', 'permissions'],
		},
		{
			title: 'footer.company',
			links: ['about', 'careers'],
		},
		{
			title: 'footer.support',
			links: ['help', 'contact'],
		},
	]

	const socialLinks = [
		{ icon: GithubIcon, label: 'GitHub', href: '#' },
		{ icon: TwitterIcon, label: 'Twitter', href: '#' },
		{ icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
	]

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4 },
		},
	}

	const date = new Date()
	const year = date.getFullYear()

	return (
		<footer className='bg-background border-t border-border'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				{/* Main Footer Content */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'
				>
					{/* Brand */}
					<motion.div variants={itemVariants} className='space-y-4'>
						<Link href='/' className='flex items-center gap-2'>
							<CloudIcon className='w-8 h-8 text-primary' />
							<span className='font-bold text-lg text-foreground'>
								Bulutcha
							</span>
						</Link>
						<p className='text-sm text-muted-foreground leading-relaxed'>
							{t('footer.description')}
						</p>
						{/* Social Links */}
						<div className='flex gap-4 pt-2'>
							{socialLinks.map(social => {
								const Icon = social.icon
								return (
									<motion.a
										key={social.label}
										href={social.href}
										whileHover={{ y: -3 }}
										className='w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center text-foreground hover:text-primary transition-colors'
										aria-label={social.label}
									>
										<Icon className='w-5 h-5' />
									</motion.a>
								)
							})}
						</div>
					</motion.div>

					{/* Footer Sections */}
					{footerSections.map(section => (
						<motion.div
							key={section.title}
							variants={itemVariants}
							className='space-y-4'
						>
							<h4 className='font-semibold text-foreground text-sm'>
								{t(section.title)}
							</h4>
							<ul className='space-y-2'>
								{section.links.map(link => (
									<li key={link}>
										<Link
											href={`#${link}`}
											className='text-sm text-muted-foreground hover:text-primary transition-colors'
										>
											{t(`footer.${link}`)}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom Section */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className='border-t border-border pt-8'
				>
					<div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
						<p className='text-sm text-muted-foreground'>
							@{2026}{' '}
							<span className='hover:text-primary text-lg font-semibold transition-colors'>
								Bulutcha.
							</span>{' '}
							{t('footer.allRights')}
						</p>
						<div className=' gap-2 font-semibold text-muted-foreground hover:text-primary transition-colors flex items-end'>
							{t('footer.developmentBy')}
							<a href='https://zerodev.uz' className='text-xl' target='_blank'>
								ZERODEV LLC
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	)
}
