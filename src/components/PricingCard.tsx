import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { CircleCheckIcon, CircleMinusIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Props {
	plan: PricingType | undefined
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
	const MotionCard = motion(Card)

	function convertBytes(bytes: number) {
		const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

		let size = bytes
		let unitIndex = 0

		while (size >= 1024 && unitIndex < units.length - 1) {
			size /= 1024
			unitIndex++
		}

		return `${size.toFixed(0)} ${units[unitIndex]}`
	}

	return (
		<MotionCard
			size='sm'
			variants={itemVariants}
			whileHover={{ y: -10 }}
			className={cn(
				'transition-all duration-300 h-full',
				plan?.is_popular && 'border-primary ring-1 ring-primary',
			)}
		>
			<CardHeader>
				<CardTitle className='space-y-4'>
					<Badge className='block' variant={'default'}>
						{plan?.name}
					</Badge>
					<span className='block'>{convertBytes(plan?.storage ?? 0)}</span>
					<div className='flex items-center gap-1 flex-wrap'>
						<h3 className='text-2xl font-semibold'>
							{formatPrice(plan?.price ?? 0)} UZS
						</h3>
						<p className='text-muted-foreground'>
							{'/'}
							{plan?.billing_period &&
								(plan?.billing_period === 'free'
									? t('pricing.pricingType.free')
									: t(`pricing.pricingType.${plan?.billing_period}`))}
						</p>
					</div>
				</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col justify-between gap-4 h-full'>
				<div className='space-y-4 border-b border-t py-5'>
					{plan?.items.map((feature, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: idx * 0.1 }}
							viewport={{ once: true }}
							className='flex gap-2 items-center'
						>
							{feature.is_available ? (
								<CircleCheckIcon className='w-5 h-5 text-primary shrink-0 mt-0.5' />
							) : (
								<CircleMinusIcon className='w-5 h-5 text-destructive shrink-0 mt-0.5' />
							)}
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
					<a
						href={`https://my.bulutcha.com/home/?choose=${plan?.id}`}
						target='_blank'
					>
						{t('pricing.cta')}
					</a>
				</Button>
			</CardContent>
		</MotionCard>
	)
}
