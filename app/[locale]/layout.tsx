import { type Locale, locales } from '@/i18n.config'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import {
	getMessages,
	getTranslations,
	setRequestLocale,
} from 'next-intl/server'
import { Geist, Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import '../globals.css'

interface RootLayoutParams {
	children: ReactNode
	params: Promise<{ locale: string }>
}

export function generateStaticParams() {
	return locales.map(locale => ({ locale }))
}

export async function generateMetadata({
	params,
}: RootLayoutParams): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'meta' })

	return {
		metadataBase: new URL('https://bulutcha.com'),

		title: {
			default: t('title.default'),
			template: t('title.template'),
		},

		description: t('description'),

		keywords: t.raw('keywords'), // array bo'lsa avtomatik ishlaydi

		authors: [{ name: 'Bulutcha', url: 'https://bulutcha.com' }],
		creator: 'Bulutcha',
		publisher: 'Bulutcha',

		alternates: {
			canonical: 'https://bulutcha.com',
			languages: {
				uz: 'https://bulutcha.com/uz',
				ru: 'https://bulutcha.com/ru',
				en: 'https://bulutcha.com/en',
				'x-default': 'https://bulutcha.com',
			},
		},

		openGraph: {
			type: 'website',
			url: 'https://bulutcha.com',
			siteName: 'Bulutcha',
			title: t('openGraph.title'),
			description: t('openGraph.description'),
			locale: locale === 'uz' ? 'uz_UZ' : locale === 'ru' ? 'ru_RU' : 'en_US',
			alternateLocale: ['ru_RU', 'en_US'],
			images: [
				{
					url: '/icon.svg',
					width: 1200,
					height: 630,
					alt: t('openGraph.images.alt'),
				},
			],
		},

		twitter: {
			card: 'summary_large_image',
			title: t('twitter.title'),
			description: t('twitter.description'),
			creator: '@bulutcha_com',
		},

		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},

		icons: {
			icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
		},

		manifest: '/manifest.json',
	}
}

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export default async function RootLayout({
	children,
	params,
}: RootLayoutParams) {
	const { locale } = await params

	if (!locales.includes(locale as Locale)) {
		notFound()
	}

	setRequestLocale(locale)

	const messages = await getMessages()

	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebApplication',
							name: 'Bulutcha',
							url: 'https://bulutcha.com',
							description:
								'Bulutda fayl saqlash va telefon raqam orqali ulashish xizmati',
							applicationCategory: 'UtilitiesApplication',
							operatingSystem: 'Web',
							offers: {
								'@type': 'Offer',
								price: '0',
								priceCurrency: 'UZS',
								description: '20 GB bepul saqlash joyi',
							},
							inLanguage: ['uz', 'ru', 'en'],
						}),
					}}
				/>
			</head>
			<body className='font-sans antialiased'>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
