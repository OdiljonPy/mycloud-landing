import ContactForm from '@/src/components/ContactForm'
import Features from '@/src/components/Features'
import Footer from '@/src/components/Footer'
import Hero from '@/src/components/Hero'
import HowItWorks from '@/src/components/HowItWorks'
import Navigation from '@/src/components/Navigation'
import Permissions from '@/src/components/Permissions'
import Pricing from '@/src/components/Pricing'

export default async function Page() {
	return (
		<div className='min-h-screen bg-background'>
			<Navigation />
			<Hero />
			<Features />
			<HowItWorks />
			<Pricing />
			<Permissions />
			<ContactForm />
			<Footer />
		</div>
	)
}
