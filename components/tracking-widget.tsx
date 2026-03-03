'use client';

import { useState } from 'react';

function trackAction(locale: string) {
  return `/${locale}/track`;
}

export function TrackingWidget({
  locale,
  defaultTrackingNumber = '',
  onSubmitTracking,
  compact = true,
}: {
  locale: string;
  defaultTrackingNumber?: string;
  onSubmitTracking?: (trackingNumber: string) => void;
  compact?: boolean;
}) {
  const [trackingNumber, setTrackingNumber] = useState(defaultTrackingNumber);
  const [error, setError] = useState<string | null>(null);

  const copy = {
    title:
      locale === 'fr'
        ? 'Suivez votre envoi'
        : locale === 'ar'
        ? 'تتبّع شحنتك'
        : 'Track your shipment',
    subtitle:
      locale === 'fr'
        ? 'Saisissez votre numéro de suivi.'
        : locale === 'ar'
        ? 'أدخل رقم التتبّع.'
        : 'Enter your tracking number.',
    required:
      locale === 'fr'
        ? 'Veuillez saisir le numéro de suivi.'
        : locale === 'ar'
        ? 'الرجاء إدخال رقم التتبّع.'
        : 'Please enter a tracking number.',
    btn: locale === 'fr' ? 'Suivre' : locale === 'ar' ? 'تتبّع' : 'Track',
  };

  return (
    <div
      className={[
        'w-full rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-lg',
        compact ? 'p-6 md:p-8' : 'p-6',
      ].join(' ')}
    >
      <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
        {copy.title}
      </h2>
      <p className="text-xs text-slate-600 dark:text-white/60 mb-4">
        {copy.subtitle}
      </p>

      <form
        action={trackAction(locale)}
        method="GET"
        onSubmit={(e) => {
          setError(null);
          const tn = trackingNumber.trim();

          if (!tn) {
            e.preventDefault();
            setError(copy.required);
            return;
          }

          // If parent passed a handler (tracking page), prevent redirect and use it
          if (onSubmitTracking) {
            e.preventDefault();
            onSubmitTracking(tn);
          }
        }}
        className="space-y-3"
      >
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="1234 5678 9012"
          name="tn"
          className="
            w-full rounded-xl bg-white dark:bg-black/20
            border border-slate-300 dark:border-white/10
            px-4 py-3 text-sm
            text-slate-900 dark:text-white
            placeholder:text-slate-400 dark:placeholder:text-white/40
            focus:outline-none focus:ring-2 focus:ring-brand-orange
            transition-all
          "
        />

        <button
          type="submit"
          className="
            w-full rounded-xl bg-brand-orange text-white font-semibold
            py-3 text-sm
            shadow-md hover:shadow-lg hover:opacity-95
            transition-all
          "
        >
          {copy.btn}
        </button>

        {error && <p className="text-[11px] text-red-500">{error}</p>}
      </form>
    </div>
  );
}