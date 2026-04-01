import { useTranslations } from 'next-intl'
import z from 'zod'

type T = ReturnType<typeof useTranslations>

export const contactSchema = (t: T) =>
	z.object({
		email: z.string().email(t('validation.email')),
		theme: z.string().min(3, t('validation.subject')),
		message: z.string().min(10, t('validation.message')),
	})
export type ContactFormData = z.infer<ReturnType<typeof contactSchema>>
