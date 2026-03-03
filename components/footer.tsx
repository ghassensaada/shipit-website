import type { Locale } from '@/i18n/config';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer
      className="
        mt-16 border-t border-white/10
        bg-gradient-to-b from-slate-950 to-slate-900
        py-6 text-xs text-white/60
      "
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
        <p>© {new Date().getFullYear()} Ship It. All rights reserved.</p>

        <p className="text-[11px]">
          {locale === 'ar'
            ? 'شحن سريع • تتبّع فوري • حلول للشركات'
            : 'Fast shipping • Real-time tracking • Enterprise logistics'}
        </p>
      </div>
    </footer>
  );
}
