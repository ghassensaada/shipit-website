'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Route } from 'next';
import { locales, type Locale } from '@/i18n/config';
import type { Messages } from '@/i18n/messages';
// inside Navbar component (near the flags const)
const localeLabel: Record<Locale, string> = { en: 'English', fr: 'Français', ar: 'العربية' };

function LocaleSwitcher({ locale }: { locale: Locale }) {
  const [openLang, setOpenLang] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpenLang((v) => !v)}
        className="
          h-9 w-9 rounded-full border border-slate-300 dark:border-white/20
          bg-white/80 dark:bg-black/30 backdrop-blur
          hover:border-brand-orange/40 transition
          flex items-center justify-center
        "
        aria-label="Change language"
      >
        <span
          className="h-6 w-6 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${flags[locale]})` }}
        />
      </button>

      {openLang && (
        <div
          className="
            absolute right-0 mt-2 w-44 rounded-xl overflow-hidden
            border border-slate-200 dark:border-white/10
            bg-white/95 dark:bg-slate-950/90 backdrop-blur
            shadow-[0_12px_40px_rgba(0,0,0,0.18)]
          "
        >
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => (window.location.href = `/${l}`)}
              className="
                w-full px-3 py-2 text-left text-sm
                text-slate-700 dark:text-white/80
                hover:bg-slate-100 dark:hover:bg-white/5
                flex items-center gap-2
              "
            >
              <span
                className="h-5 w-5 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${flags[l]})` }}
              />
              <span>{localeLabel[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
const flags: Record<Locale, string> = {
  en: '/flags/us.svg',
  fr: '/flags/fr.svg',
  ar: '/flags/tn.svg',
};

// Typed route helper — safe for Next.js typedRoutes
function localeHref(locale: Locale, path: string): Route {
  return (path === '' ? `/${locale}` : `/${locale}/${path}`) as Route;
}

export function Navbar({ locale, t }: { locale: Locale; t: Messages }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        border-b border-slate-200 dark:border-white/10
        bg-white/70 dark:bg-white/5
        backdrop-blur-xl
        sticky top-0 z-50
      "
    >
      {/* TOP BAR */}
      <div
        className="
          mx-auto max-w-6xl px-4 py-4
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <Link href={`/${locale}`} className="flex items-center gap-2 mx-auto md:mx-0">
          <Image
            src="/logo-dark.png"
            alt="Ship It"
            width={120}
            height={32}
            className="block dark:hidden"
          />
          <Image
            src="/logo-light.png"
            alt="Ship It"
            width={120}
            height={32}
            className="hidden dark:block"
          />
        </Link>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden absolute right-4 top-5"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-700 dark:text-white"
          >
            <path d="M4 7h18M4 13h18M4 19h18" />
          </svg>
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          {[
            { href: '', label: t.navHome },
            { href: 'services', label: t.navServices },
            { href: 'enterprise', label: t.navEnterprise },
            { href: 'contact', label: t.navContact },
          ].map((item) => (
            <Link
              key={item.href}
              href={localeHref(locale, item.href)}
              className="
                text-slate-700 dark:text-white/80
                hover:text-brand-orange transition
              "
            >
              {item.label}
            </Link>
          ))}

          {/* FLAG SELECTOR */}
          <LocaleSwitcher locale={locale} />
        </nav>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden flex flex-col items-center gap-4 py-4
            border-t border-slate-200 dark:border-white/10
            bg-white/90 dark:bg-black/40 backdrop-blur-xl
          "
        >
          {[
            { href: '', label: t.navHome },
            { href: 'services', label: t.navServices },
            { href: 'enterprise', label: t.navEnterprise },
            { href: 'contact', label: t.navContact },
          ].map((item) => (
            <Link
              key={item.href}
              href={localeHref(locale, item.href)}
              className="
                text-slate-700 dark:text-white/80
                hover:text-brand-orange transition text-lg
              "
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* MOBILE FLAG SELECTOR */}
          <LocaleSwitcher locale={locale} />
        </div>
      )}
    </header>
  );
}
