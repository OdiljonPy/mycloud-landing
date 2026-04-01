interface FeaturesType {
	id: number
	feature: string
}

interface PricingType {
	id: number
	name: string
	price: string
	status: 'free' | 'monthly' | 'yearly' | 'lifetime'
	storage: number
	features: FeaturesType[]
}

type PricingResponse = PricingType[]
