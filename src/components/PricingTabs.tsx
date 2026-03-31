'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

export const PricingTabs = () => {
	const t = useTranslations()
	const [activeTab, setActiveTab] = useState<string>('free')

	const tabs = [
		{ value: 'free', label: 'Free' },
		{ value: 'monly', label: 'Monthly' },
		{ value: 'year', label: 'Year' },
		{ value: 'lifetime', label: 'Lifetime' },
	]

	// const filteredCareers = useMemo(() => {
	// 	if (activeTab === 'all') return pricing
	// 	return pricing.filter(item => item.work_status === activeTab)
	// }, [activeTab, pricing])

	return (
		<>
			<Tabs
				value={activeTab}
				onValueChange={setActiveTab}
				defaultValue='popular'
				className='relative z-60 w-full flex flex-col gap-6 justify-center items-center mb-10'
			>
				<div className='flex items-center justify-center'>
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
										className='bg-primary  border-border/20 absolute inset-0 z-10 rounded-4xl border'
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
					<TabsContent key={tab.value} value={tab.value}>
						hello
					</TabsContent>
				))}
			</Tabs>
		</>
	)
}
