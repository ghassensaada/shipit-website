import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isLocale } from './i18n/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] && isLocale(segments[0])) {
    return NextResponse.next();
  }

  if (pathname === '/' || pathname === '') {
    const acceptLang = request.headers.get('accept-language') || '';
    const preferred = acceptLang.split(',')[0]?.split('-')[0] || defaultLocale;
    const matched = locales.includes(preferred as any)
      ? (preferred as any)
      : defaultLocale;

    const url = request.nextUrl.clone();
    url.pathname = `/${matched}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|assets).*)']
};
