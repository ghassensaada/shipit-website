import '../globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { isLocale, getDirection, type Locale } from '@/i18n/config';
import PageTransition from '@/components/page-transition';
import { Noto_Kufi_Arabic, Quicksand } from 'next/font/google';

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-latin',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ship It – Shipping & tracking',
  description: 'Ship It provides reliable shipping, tracking, and logistics solutions.',
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'en';
  const dir = getDirection(locale);
  const isArabic = locale === 'ar';

  return (
    <html
        lang={locale}
        dir={dir}
        className={`${quicksand.variable} ${isArabic ? notoKufi.variable : ''}`}
      >
      <head>
        <link rel="icon" href="/favicon-dark.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-light.png" media="(prefers-color-scheme: dark)" />
      </head>

      <body
        className={`
          min-h-screen
          bg-gradient-to-b from-slate-50 via-white to-slate-50
          dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
          text-slate-900 dark:text-slate-100
          transition-colors duration-300
          ${isArabic ? 'font-arabic' : 'font-latin'}
        `}
      >
        <div className="flex min-h-screen flex-col">
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}