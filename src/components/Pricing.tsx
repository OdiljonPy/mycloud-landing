'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Pricing() {
	const t = useTranslations()

	const plans = ['free', 'pro', 'business'] as const

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	}

	return (
		<section id='pricing' className='py-20 px-4 sm:px-6 lg:px-8 bg-card'>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
						{t('pricing.title')}
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						{t('pricing.subtitle')}
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid grid-cols-1 md:grid-cols-3 gap-8'
				>
					{plans.map(plan => {
						const isPopular = plan === 'pro'
						const rawPlanFeatures = t.raw(`pricing.${plan}.features`)
						const planFeatures = Array.isArray(rawPlanFeatures)
							? (rawPlanFeatures as string[])
							: []
						const hasPeriod = t.has(`pricing.${plan}.period`)

						return (
							<motion.div
								key={plan}
								variants={itemVariants}
								whileHover={{ y: -10 }}
								className={`relative rounded-2xl border transition-all duration-300 ${
									isPopular
										? 'border-primary bg-primary/5 ring-2 ring-primary scale-105 md:scale-110'
										: 'border-border bg-background hover:shadow-lg'
								}`}
							>
								{/* Popular Badge */}
								{isPopular && (
									<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold'>
										Most Popular
									</div>
								)}

								<div className='p-8 flex flex-col justify-between h-full gap-6'>
									{/* Plan Name & Storage */}
									<div>
										<h3 className='text-2xl font-bold text-foreground mb-2'>
											{t(`pricing.${plan}.name`)}
										</h3>
										<p className='text-sm text-muted-foreground'>
											{t(`pricing.${plan}.storage`)} storage
										</p>
									</div>

									{/* Price */}
									<div>
										<div className='text-4xl font-bold text-foreground'>
											{t(`pricing.${plan}.price`)}
											{hasPeriod && (
												<span className='text-lg text-muted-foreground font-normal'>
													{' '}
													{t(`pricing.${plan}.period`)}
												</span>
											)}
										</div>
									</div>

									{/* Features */}
									<div className='space-y-4'>
										{planFeatures.map((feature, idx) => (
											<motion.div
												key={idx}
												initial={{ opacity: 0, x: -10 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{ delay: idx * 0.1 }}
												viewport={{ once: true }}
												className='flex gap-3 items-start'
											>
												<Check className='w-5 h-5 text-primary shrink-0 mt-0.5' />
												<span className='text-foreground text-sm'>
													{feature}
												</span>
											</motion.div>
										))}
									</div>

									{/* CTA Button */}
									<a href='https://my.bulutcha.com/' target='_blank'>
										<Button
											className={`w-full h-11 font-semibold ${
												isPopular &&
												'bg-primary text-primary-foreground hover:bg-primary/90'
											}`}
											variant={'outline'}
										>
											{t('pricing.cta')}
										</Button>
									</a>
								</div>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}
