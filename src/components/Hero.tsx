'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Hero() {
	const t = useTranslations()

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}

	return (
		<section className='min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
			{/* Background Gradient */}
			<div className='absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10' />
			<div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10' />
			<div className='absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10' />

			<div className='max-w-4xl mx-auto w-full'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					className='text-center space-y-8'
				>
					{/* Badge */}
					<motion.div variants={itemVariants}>
						<div className='inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full'>
							<span className='text-sm font-medium text-primary'>
								✨ Secure Cloud Storage at Your Fingertips
							</span>
						</div>
					</motion.div>

					{/* Title */}
					<motion.h1
						variants={itemVariants}
						className='text-5xl sm:text-6xl lg:text-7xl font-bold text-balance'
					>
						<span className='bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent'>
							{t('hero.title')}
						</span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						variants={itemVariants}
						className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance'
					>
						{t('hero.subtitle')}
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						variants={itemVariants}
						className='flex flex-col sm:flex-row gap-4 justify-center items-center'
					>
						<a href='https://my.bulutcha.com/' target='_blank'>
							<Button
								size='lg'
								className='bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base gap-2 w-full sm:w-auto'
							>
								{t('hero.cta')}
								<ArrowRight className='w-5 h-5' />
							</Button>
						</a>
					</motion.div>

					{/* Stats */}
					<motion.div
						variants={itemVariants}
						className='grid md:grid-cols-3 gap-4 sm:gap-8 pt-8 max-w-2xl mx-auto'
					>
						<div className='space-y-1'>
							<div className='text-2xl sm:text-3xl font-bold text-primary'>
								20GB
							</div>
							<div className='text-xs sm:text-sm text-muted-foreground'>
								Free Storage
							</div>
						</div>
						<div className='space-y-1'>
							<div className='text-2xl sm:text-3xl font-bold text-primary'>
								End-to-End
							</div>
							<div className='text-xs sm:text-sm text-muted-foreground'>
								Encrypted
							</div>
						</div>
						<div className='space-y-1'>
							<div className='text-2xl sm:text-3xl font-bold text-primary'>
								Real-time
							</div>
							<div className='text-xs sm:text-sm text-muted-foreground'>
								Sync
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
