export const getPricing = async (locale: string): Promise<PricingResponse> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}base/plan/`, {
		next: { revalidate: 120 },
		headers: {
			'Accept-Language': locale,
		},
	})

	if (!res.ok) {
		throw new Error('Error retrieving data!')
	}

	return res.json()
}
