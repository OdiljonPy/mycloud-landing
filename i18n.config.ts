export const locales = ['en', 'ru', 'uz'] as const
export const defaultLocale = 'uz' as const
export type Locale = (typeof locales)[number]
