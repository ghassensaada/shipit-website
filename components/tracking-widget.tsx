'use client';

import { useMemo, useState } from 'react';

function trackAction(locale: string) {
  return `/${locale}/track`;
}

function onlyDigits(s: string) {
  return s.replace(/\D/g, '');
}

function formatEvery4(digits: string) {
  // groups of 4: 123456789012 -> "1234 5678 9012"
  return digits.replace(/(.{4})/g, '$1 ').trim();
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
  // normalize any default value we receive
  const initial = useMemo(() => formatEvery4(onlyDigits(defaultTrackingNumber)), [defaultTrackingNumber]);

  const [trackingNumber, setTrackingNumber] = useState(initial);
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
        ? 'Entrez votre numéro de suivi (chiffres uniquement).'
        : locale === 'ar'
        ? 'أدخل رقم التتبّع (أرقام فقط).'
        : 'Enter your tracking number (digits only).',
    helper:
      locale === 'fr'
        ? 'Exemple : 1234 5678 9012'
        : locale === 'ar'
        ? 'مثال: 1234 5678 9012'
        : 'Example: 1234 5678 9012',
    required:
      locale === 'fr'
        ? 'Veuillez saisir le numéro de suivi.'
        : locale === 'ar'
        ? 'الرجاء إدخال رقم التتبّع.'
        : 'Please enter a tracking number.',
    invalid:
      locale === 'fr'
        ? 'Numéro invalide. Utilisez uniquement des chiffres.'
        : locale === 'ar'
        ? 'رقم غير صالح. استخدم أرقام فقط.'
        : 'Invalid number. Use digits only.',
    tooShort:
      locale === 'fr'
        ? 'Numéro trop court.'
        : locale === 'ar'
        ? 'الرقم قصير جدًا.'
        : 'Tracking number is too short.',
    btn: locale === 'fr' ? 'Suivre' : locale === 'ar' ? 'تتبّع' : 'Track',
    hint1:
      locale === 'fr'
        ? 'Résultats en quelques secondes'
        : locale === 'ar'
        ? 'النتيجة خلال ثوانٍ'
        : 'Results in seconds',
    hint2:
      locale === 'fr'
        ? 'Mises à jour en temps réel'
        : locale === 'ar'
        ? 'تحديثات لحظية'
        : 'Real-time updates',
  };

  // Adjust these anytime (depends on your real carrier rules later)
  const MIN_DIGITS = 8;
  const MAX_DIGITS = 24;

  function handleChange(raw: string) {
    // Keep digits only, then format into groups of 4
    const digits = onlyDigits(raw).slice(0, MAX_DIGITS);
    setTrackingNumber(formatEvery4(digits));
    if (error) setError(null);
  }

  return (
    <div
      className={[
        'w-full rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-lg',
        compact ? 'p-6 md:p-8' : 'p-6',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{copy.title}</h2>
          <p className="mt-1 text-xs text-slate-600 dark:text-white/60">{copy.subtitle}</p>
        </div>

        {/* tiny "trust" chip */}
        <div
          className="
            hidden sm:inline-flex items-center
            rounded-full border border-slate-200 dark:border-white/10
            bg-white/60 dark:bg-white/5
            px-2.5 py-1 text-[11px]
            text-slate-600 dark:text-white/60
          "
        >
          {copy.hint2}
        </div>
      </div>

      <form
        action={trackAction(locale)}
        method="GET"
        onSubmit={(e) => {
          setError(null);

          const digits = onlyDigits(trackingNumber);

          if (!digits) {
            e.preventDefault();
            setError(copy.required);
            return;
          }

          if (!/^\d+$/.test(digits)) {
            e.preventDefault();
            setError(copy.invalid);
            return;
          }

          if (digits.length < MIN_DIGITS) {
            e.preventDefault();
            setError(copy.tooShort);
            return;
          }

          // If parent passed a handler (tracking page), prevent redirect and use it
          if (onSubmitTracking) {
            e.preventDefault();
            onSubmitTracking(digits); // pass normalized digits
          }
          // Otherwise, normal GET submit continues to /{locale}/track?tn=...
          // We should ensure the submitted tn is digits (not spaced):
          // easiest: keep the input name=tn but set its value via hidden input (below)
        }}
        className="mt-5 space-y-3"
      >
        {/* Submit normalized digits (no spaces) */}
        <input type="hidden" name="tn" value={onlyDigits(trackingNumber)} />

        <div>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={trackingNumber}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="1234 5678 9012"
            aria-label="Tracking number"
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
          <div className="mt-2 flex items-center justify-between">
            <p className="text-[11px] text-slate-500 dark:text-white/45">{copy.helper}</p>
            <p className="text-[11px] text-slate-500 dark:text-white/45">
              {onlyDigits(trackingNumber).length}/{MAX_DIGITS}
            </p>
          </div>
        </div>

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

        {/* Extra details back on main page */}
        <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-600 dark:text-white/60">
          <div
            className="
              rounded-lg border border-slate-200 dark:border-white/10
              bg-white/60 dark:bg-white/5
              px-3 py-2
            "
          >
            {copy.hint1}
          </div>
          <div
            className="
              rounded-lg border border-slate-200 dark:border-white/10
              bg-white/60 dark:bg-white/5
              px-3 py-2
            "
          >
            {copy.hint2}
          </div>
        </div>

        {error && <p className="text-[11px] text-red-500">{error}</p>}
      </form>
    </div>
  );
}