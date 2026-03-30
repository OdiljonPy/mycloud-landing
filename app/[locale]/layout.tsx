import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { type Locale, locales } from '@/i18n.config';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  { params }: LocaleLayoutProps
): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: {
      default: 'Cloud - Secure File Management',
      template: '%s | Cloud',
    },
    description:
      'Experience seamless file management with 20GB free storage and advanced permission controls.',
    openGraph: {
      title: 'Cloud - Secure File Management',
      description:
        'Experience seamless file management with 20GB free storage and advanced permission controls.',
      locale,
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
  );
}
