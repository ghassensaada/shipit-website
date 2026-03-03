'use client';

import { useState } from 'react';

export function TrackingWidget({ locale }: { locale: string }) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!trackingNumber.trim()) {
      setError(locale === 'fr'
        ? 'Veuillez saisir le numéro de suivi.'
        : locale === 'ar'
        ? 'الرجاء إدخال رقم التتبّع.'
        : 'Please enter a tracking number.'
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/${locale}/api/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingNumber }),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setError(
        locale === 'fr'
          ? 'Impossible de récupérer les informations de suivi.'
          : locale === 'ar'
          ? 'تعذّر جلب معلومات التتبّع حالياً.'
          : 'Unable to fetch tracking information right now.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        w-full max-w-lg md:max-w-md
        rounded-2xl
        backdrop-blur-xl bg-white/70 dark:bg-white/5
        border border-slate-200 dark:border-white/10
        shadow-lg md:shadow-[0_0_40px_rgba(0,0,0,0.45)]
        p-6 md:p-8
        transition-all
      "
    >
      <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
        {locale === 'fr'
          ? 'Suivez votre envoi'
          : locale === 'ar'
          ? 'تتبّع شحنتك'
          : 'Track your shipment'}
      </h2>

      <p className="text-xs text-slate-600 dark:text-white/60 mb-4">
        {locale === 'fr'
          ? 'Saisissez votre numéro de suivi.'
          : locale === 'ar'
          ? 'أدخل رقم التتبّع.'
          : 'Enter your tracking number.'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">

        {/* Tracking input on desktop */}
        <div>
  <input
    type="text"
    value={trackingNumber}
    onChange={(e) => setTrackingNumber(e.target.value)}
    placeholder="1234 5678 9012"
    className="
      w-full rounded-xl bg-white dark:bg-black/20
      border border-slate-300 dark:border-white/10
      px-4 py-2.5 text-sm
      text-slate-900 dark:text-white
      placeholder:text-slate-400 dark:placeholder:text-white/40
      focus:outline-none focus:ring-2 focus:ring-brand-orange
      transition-all
    "
  />
</div>

        <button
          type="submit"
          disabled={loading}
          className="
            w-full rounded-xl bg-brand-orange text-white font-semibold
            py-2.5 text-sm
            shadow-md hover:shadow-lg
            disabled:opacity-60
            transition-all
          "
        >
          {loading
            ? locale === 'fr'
              ? 'Suivi…'
              : locale === 'ar'
              ? 'جارٍ التتبّع…'
              : 'Tracking…'
            : locale === 'fr'
            ? 'Suivre'
            : locale === 'ar'
            ? 'تتبّع'
            : 'Track'}
        </button>

        {error && <p className="text-[11px] text-red-500">{error}</p>}

        {result && (
          <div
            className="
              mt-3 rounded-xl bg-white/70 dark:bg-white/5
              border border-slate-200 dark:border-white/10
              px-3 py-2 text-xs
              text-slate-700 dark:text-white/80
              space-y-1
            "
          >
            <p><strong>Status:</strong> {result.status}</p>
            <p><strong>Location:</strong> {result.location}</p>
            <p><strong>ETA:</strong> {result.eta}</p>
            <p><strong>Last update:</strong> {new Date(result.lastUpdate).toLocaleString()}</p>
          </div>
        )}
      </form>
    </div>
  );
}
