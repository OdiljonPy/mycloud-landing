'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { PricingCard } from './PricingCard'

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
		{ value: 'lifetime', label: t('pricing.type.lifetime') },
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
					<TabsList className='hide-scollbar overflow-x-scroll  flex h-full w-fit items-center justify-start gap-3 rounded-4xl'>
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
							{pricingItems.map(plan => (
								<PricingCard key={plan.id} plan={plan} />
							))}
						</motion.div>
					</TabsContent>
				))}
			</Tabs>
		</>
	)
}
