'use client'

import { motion } from 'framer-motion'
import { CloudIcon, InstagramIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Footer() {
	const t = useTranslations()

	const footerSections = [
		{
			title: 'footer.product',
			links: [
				{
					name: 'features',
					link: '#features',
				},
				{
					name: 'pricing',
					link: '#pricing',
				},
				{ name: 'permissions', link: '#permissions' },
			],
		},
		{
			title: 'footer.company',
			links: [
				{
					name: 'about',
					link: 'https://zerodev.uz/about',
				},
				{
					name: 'careers',
					link: 'https://zerodev.uz/career',
				},
			],
		},
		{
			title: 'footer.support',
			links: [
				{
					name: 'help',
					link: 'tel:+998995071121',
				},
				{
					name: 'contact',
					link: '#contact',
				},
			],
		},
	]

	const socialLinks = [
		{
			icon: InstagramIcon,
			label: 'Instagram',
			href: 'https://www.instagram.com/zerodev.uz',
		},
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
										target='_blank'
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
									<li key={link.name}>
										{link.link.includes('#') ? (
											<Link
												href={link.link}
												className='text-sm text-muted-foreground hover:text-primary transition-colors'
											>
												{t(`footer.${link.name}`)}
											</Link>
										) : (
											<a
												className='text-sm text-muted-foreground hover:text-primary transition-colors'
												href={link.link}
												target='_blank'
											>
												{t(`footer.${link.name}`)}
											</a>
										)}
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
							@{year}{' '}
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
