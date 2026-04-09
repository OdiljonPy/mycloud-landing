interface FeaturesType {
	id: number
	feature: string
	is_available: boolean
}

interface PricingType {
	id: number
	name: string
	price: string
	billing_period: 'free' | 'monthly' | 'yearly' | 'lifetime'
	storage: number
	items: FeaturesType[]
	is_popular: boolean
}

type PricingResponse = PricingType[]
