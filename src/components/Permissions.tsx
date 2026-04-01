'use client'

import { motion } from 'framer-motion'
import {
	BarChart3Icon,
	Clock,
	ClockIcon,
	Edit2Icon,
	Eye,
	EyeIcon,
	Lock,
	LockIcon,
	Shield,
	ShieldIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

// JSON'dagi keylar bilan bir xil bo'lishi kerak
const permissionIcons = {
	view_only: EyeIcon,
	edit_permissions: Edit2Icon,
	download_controls: LockIcon,
	expiration_dates: ClockIcon,
	password_protection: ShieldIcon,
	activity_tracking: BarChart3Icon,
}

export default function Permissions() {
	const t = useTranslations('permissions')

	const tGeneral = useTranslations('permissions.features')

	const permissionsData = Object.keys(permissionIcons) as Array<
		keyof typeof permissionIcons
	>

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
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5 },
		},
	}

	return (
		<section
			id='permissions'
			className='py-20 px-4 sm:px-6 overflow-hidden lg:px-8 bg-background'
		>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='space-y-8'
					>
						<div>
							<h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
								{t('title')}
							</h2>
							<p className='text-lg text-muted-foreground'>{t('subtitle')}</p>
						</div>

						<p className='text-base text-muted-foreground leading-relaxed'>
							{t('description')}
						</p>

						<motion.div
							variants={containerVariants}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							className='space-y-4'
						>
							{permissionsData.map(key => {
								const Icon = permissionIcons[key] || Shield

								return (
									<motion.div
										key={key}
										variants={itemVariants}
										className='flex gap-4 items-start group'
									>
										<div className='w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors'>
											<Icon className='w-5 h-5 text-primary' />
										</div>
										<span className='text-foreground font-medium pt-1'>
											{tGeneral(key)}
										</span>
									</motion.div>
								)
							})}
						</motion.div>
					</motion.div>

					{/* Right Visual */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='relative'
					>
						<div className='absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/10 to-primary/5 rounded-3xl blur-2xl -z-10' />

						<div className='relative bg-linear-to-br from-primary/10 to-secondary/5 border border-primary/20 rounded-3xl p-8 space-y-6'>
							<div className='bg-card border border-border rounded-2xl p-6 space-y-4'>
								<div className='flex items-center justify-between'>
									<div>
										<h4 className='font-bold text-foreground'>document.pdf</h4>
										<p className='text-sm text-muted-foreground'>
											{t('document.sharedWith')}
										</p>
									</div>
									<Shield className='w-5 h-5 text-primary' />
								</div>

								<div className='space-y-2'>
									<div className='flex items-center gap-2 text-sm'>
										<Eye className='w-4 h-4 text-primary' />
										<span className='text-foreground'>
											{t('document.viewOnly')}
										</span>
									</div>
									<div className='flex items-center gap-2 text-sm'>
										<Clock className='w-4 h-4 text-primary' />
										<span className='text-foreground'>
											{t('document.expires')}
										</span>
									</div>
									<div className='flex items-center gap-2 text-sm'>
										<Lock className='w-4 h-4 text-primary' />
										<span className='text-foreground'>
											{t('document.password')}
										</span>
									</div>
								</div>

								<div className='pt-4 border-t border-border'>
									<p className='text-xs text-muted-foreground'>
										{t('document.lastAccessed')}
									</p>
								</div>
							</div>

							<motion.div
								animate={{ y: [0, 10, 0] }}
								transition={{ duration: 3, repeat: Infinity }}
								className='absolute -top-4 -right-4  bg-primary text-primary-foreground px-4 py-2 rounded-xl font-semibold text-sm'
							>
								{t('document.secureBadge')}
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
