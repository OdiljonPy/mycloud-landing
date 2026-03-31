'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'
import { PricingType } from '../shared/types'

interface Props {
	pricing: PricingType[]
}

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

export const PricingTabs = ({ pricing }: Props) => {
	const t = useTranslations()
	const [activeTab, setActiveTab] = useState<string>('free')

	const tabs = [
		{ value: 'free', label: t('pricing.type.free') },
		{ value: 'monthly', label: t('pricing.type.monthly') },
		{ value: 'yearly', label: t('pricing.type.yearly') },
		{ value: 'lifetime', label: t('pricing.type.lifetime') },
	]

	const pricingItems = pricing.filter(item => item.status === activeTab)

	return (
		<>
			<Tabs
				value={activeTab}
				onValueChange={setActiveTab}
				defaultValue='popular'
				className='relative z-40 w-full flex flex-col gap-6 justify-center items-center mb-5'
			>
				<div className='flex items-center mb-5 w-full justify-center'>
					<TabsList className='hide-scollbar  flex h-full w-fit items-center justify-start gap-3 rounded-4xl'>
						{tabs.map(tab => (
							<TabsTrigger
								className={cn(
									'font-regular relative cursor-pointer bg-none px-4 py-2 text-base',
								)}
								key={tab.value}
								value={tab.value}
							>
								{activeTab === tab.value && (
									<motion.div
										layoutId='activeTabBackground'
										className='bg-primary  border-border/20 absolute inset-0 rounded-4xl border'
										transition={{
											type: 'spring',
											stiffness: 500,
											damping: 30,
										}}
									/>
								)}

								<span
									className={cn(
										'relative z-20 ',
										activeTab === tab.value ? 'text-white' : 'text-black',
									)}
								>
									{tab.label}
								</span>
							</TabsTrigger>
						))}
					</TabsList>
				</div>

				{tabs.map(tab => (
					<TabsContent
						key={tab.value}
						className='w-full md:w-auto'
						value={tab.value}
					>
						<motion.div
							variants={containerVariants}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							className={`grid grid-cols-1  lg:grid-cols-${pricingItems.length} gap-8`}
						>
							{pricingItems.map(plan => {
								return (
									<motion.div
										key={plan.id}
										variants={itemVariants}
										whileHover={{ y: -10 }}
										className={`relative rounded-2xl border transition-all duration-300 border-primary bg-primary/5 ring-2 ring-primary`}
									>
										<div className='p-8 flex flex-col justify-between h-full gap-6'>
											<div>
												<h3 className='text-2xl font-bold text-foreground mb-2'>
													{plan.name}
												</h3>
											</div>

											<div>
												<div className='text-4xl font-bold text-foreground'>
													{plan.price}{' '}
													<span className='text-lg text-muted-foreground font-normal'>
														UZD/ {t(`pricing.pricingType.${plan.status}`)}
													</span>
												</div>
											</div>

											<div className='space-y-4'>
												{plan.features.map((feature, idx) => (
													<motion.div
														key={idx}
														initial={{ opacity: 0, x: -10 }}
														whileInView={{ opacity: 1, x: 0 }}
														transition={{ delay: idx * 0.1 }}
														viewport={{ once: true }}
														className='flex gap-3 items-start'
													>
														<CheckIcon className='w-5 h-5 text-primary shrink-0 mt-0.5' />
														<span className='text-foreground text-sm'>
															{feature.feature}
														</span>
													</motion.div>
												))}
											</div>

											<a href='https://my.bulutcha.com/' target='_blank'>
												<Button
													className={`w-full h-11 font-semibold ${
														true &&
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
					</TabsContent>
				))}
			</Tabs>
		</>
	)
}
