'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { PricingTabs } from './PricingTabs'

interface Props {
	data: PricingType[]
}

export default function Pricing({ data }: Props) {
	const t = useTranslations()

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
				<PricingTabs pricing={data} />
			</div>
		</section>
	)
}
