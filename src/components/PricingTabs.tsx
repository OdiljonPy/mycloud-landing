'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { CircleCheckIcon, CircleMinusIcon } from 'lucide-react'

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

export const PricingTabs = ({ pricing }: Props) => {
	const t = useTranslations()
	const [activeTab, setActiveTab] = useState<string>('monthly')

	const tabs = [
		{ value: 'monthly', label: t('pricing.type.monthly') },
		{ value: 'yearly', label: t('pricing.type.yearly') },
		{ value: 'lifetime', label: t('pricing.type.lifetime'), soon: true },
	]

	const pricingItems = pricing
		.filter(item => item.status === activeTab)
		.sort((a, b) => Number(a.price) - Number(b.price))

	return (
		<>
			<Tabs
				value={activeTab}
				onValueChange={setActiveTab}
				defaultValue='popular'
				className='relative z-40 w-full flex flex-col gap-6 justify-center items-center mb-5'
			>
				<div className='flex  items-center mb-5 w-full justify-center'>
					<TabsList className='hide-scollbar overflow-x-scroll flex h-full w-fit items-center justify-start gap-3 rounded-4xl'>
						{tabs.map(tab =>
							activeTab === tab.value ? (
								<TabsTrigger
									className={cn(
										'font-regular relative cursor-pointer bg-none px-4 py-2 text-base',
									)}
									key={tab.value}
									value={tab.value}
								>
									<motion.div
										layoutId='activeTabBackground'
										className='bg-primary border-border/20 absolute inset-0 rounded-4xl border'
										transition={{ type: 'spring', stiffness: 500, damping: 30 }}
									/>
									<span className='relative z-20 text-white'>{tab.label}</span>
								</TabsTrigger>
							) : (
								<TooltipProvider key={tab.value}>
									<Tooltip>
										<TooltipTrigger asChild>
											<span className='relative'>
												<TabsTrigger
													disabled={tab.soon}
													className={cn(
														'font-regular relative cursor-pointer bg-none px-4 py-2 text-base',
														tab.soon && 'cursor-not-allowed opacity-60',
													)}
													value={tab.value}
												>
													<span className='relative z-20 text-black'>
														{tab.label}
													</span>
												</TabsTrigger>
											</span>
										</TooltipTrigger>
										{tab.soon && (
											<TooltipContent>
												<p>Soon</p>
											</TooltipContent>
										)}
									</Tooltip>
								</TooltipProvider>
							),
						)}
					</TabsList>
				</div>

				{/* {tabs.map(tab => (
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
							{pricingItems.map(plan => (
								<PricingCard key={plan.id} plan={plan} />
							))}
						</motion.div>
					</TabsContent>
				))}
				 */}

				{tabs.map(tab => (
					<TabsContent key={tab.value} className='w-full' value={tab.value}>
						<motion.div
							variants={containerVariants}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							// className={`grid grid-cols-1  lg:grid-cols-${pricingItems.length} gap-8`}
							className={`grid grid-cols-1  lg:grid-cols-5 gap-8`}
						>
							{/* {pricingItems.map(plan => (
								<PricingCard key={plan.id} plan={plan} />
							))} */}
							{Array.from({ length: 5 }).map((_, index) => (
								<Card key={index} className='w-full'>
									<CardHeader>
										<CardTitle className='space-y-4'>
											<Badge className='block' variant={'secondary'}>
												Free
											</Badge>
											<span className='block'>10 GB</span>
											<div className='flex items-center flex-wrap'>
												<h3 className='text-3xl'>9.900 UZS</h3>{' '}
												<p className='text-muted-foreground'>~$0.78/mo</p>
											</div>
										</CardTitle>
									</CardHeader>
									<CardContent className='space-y-2'>
										<div className='space-y-4 border-b border-t py-5'>
											<div className='flex items-center gap-2'>
												<CircleCheckIcon className='w-5 h-5 text-primary shrink-0 mt-0.5' />
												<span>10 GB storage</span>
											</div>
											<div className='flex items-center gap-2'>
												<CircleCheckIcon className='w-5 h-5 text-primary shrink-0 mt-0.5' />
												<span>Mobile · 1 device</span>
											</div>
											<div className='flex items-center gap-2'>
												<CircleCheckIcon className='w-5 h-5 text-primary shrink-0 mt-0.5' />
												<span>Basic file sharing</span>
											</div>
											<div className='flex items-center gap-2'>
												<CircleMinusIcon className='w-5 h-5 text-destructive shrink-0 mt-0.5' />
												<span>No TV app</span>
											</div>
											<div className='flex items-center gap-2'>
												<CircleMinusIcon className='w-5 h-5 text-destructive shrink-0 mt-0.5' />
												<span>No auto backup</span>
											</div>
										</div>
										<div className='flex items-center gap-1 justify-between'>
											<p>Margin:</p>
											<p className='text-primary'>~4.200 UZS</p>
										</div>
									</CardContent>
								</Card>
							))}
						</motion.div>
					</TabsContent>
				))}
			</Tabs>
		</>
	)
}
