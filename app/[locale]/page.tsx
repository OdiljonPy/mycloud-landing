import ContactForm from '@/src/components/ContactForm'
import Features from '@/src/components/Features'
import Footer from '@/src/components/Footer'
import Hero from '@/src/components/Hero'
import HowItWorks from '@/src/components/HowItWorks'
import Navigation from '@/src/components/Navigation'
import Permissions from '@/src/components/Permissions'
import Pricing from '@/src/components/Pricing'
import { getPricing } from '@/src/shared/api'

import { getLocale } from 'next-intl/server'

export default async function Page() {
	const locale = await getLocale()
	const data = await getPricing(locale)

	return (
		<div className='min-h-screen bg-background'>
			<Navigation />
			<Hero />
			<Features />
			<HowItWorks />
			<Pricing data={data} />
			<Permissions />
			<ContactForm />
			<Footer />
		</div>
	)
}
