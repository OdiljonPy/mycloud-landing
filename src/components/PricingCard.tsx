import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { CheckIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Props {
	plan: PricingType
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
}

export const PricingCard = ({ plan }: Props) => {
	const t = useTranslations()
	const formatPrice = (price: number | string) =>
		price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

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
						{formatPrice(plan.price)}{' '}
						<span className='text-lg text-muted-foreground font-normal'>
							{t('pricing.sum')} / {t(`pricing.pricingType.${plan.status}`)}
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
							<span className='text-foreground text-sm'>{feature.feature}</span>
						</motion.div>
					))}
				</div>

				<Button
					className={`w-full h-11 font-semibold ${
						true && 'bg-primary text-primary-foreground hover:bg-primary/90'
					}`}
					variant={'outline'}
					asChild
				>
					<a href='https://my.bulutcha.com/' target='_blank'>
						{t('pricing.cta')}
					</a>
				</Button>
			</div>
		</motion.div>
	)
}
