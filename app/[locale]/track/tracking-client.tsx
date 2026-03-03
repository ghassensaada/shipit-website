'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { TrackingWidget } from '@/components/tracking-widget';

type EventItem = {
  timestamp: string;
  title: string;
  description?: string;
  location?: string;
};

type TrackResult = {
  trackingNumber?: string;
  status?: string;
  eta?: string;
  location?: string;
  lastUpdate?: string;
  // Add this when your API supports it:
  events?: EventItem[];
};

function groupByDate(events: EventItem[]) {
  const map = new Map<string, EventItem[]>();
  for (const ev of events) {
    const d = new Date(ev.timestamp);
    const key = d.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'numeric',
      day: 'numeric',
      year: '2-digit',
    });
    map.set(key, [...(map.get(key) ?? []), ev]);
  }
  return Array.from(map.entries());
}

export default function TrackingClient({ locale }: { locale: string }) {
  const sp = useSearchParams();
  const tn = useMemo(() => (sp.get('tn') ?? '').trim(), [sp]);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function fetchTracking(trackingNumber: string) {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`/${locale}/api/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingNumber }),
      });

      const data = await res.json();
      setResult({ trackingNumber, ...data });
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

  // Auto-fetch when tn exists in URL
  useEffect(() => {
    if (tn) fetchTracking(tn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tn]);

  return (
    <div className="space-y-6">
      {/* Reuse your widget as the input at top */}
      <TrackingWidget
        locale={locale}
        defaultTrackingNumber={tn}
        onSubmitTracking={(trackingNumber) => fetchTracking(trackingNumber)}
        compact={false}
      />

      {/* Results */}
      {loading && (
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5 text-sm text-slate-600 dark:text-white/70">
          {locale === 'fr' ? 'Chargement…' : locale === 'ar' ? 'جارٍ التحميل…' : 'Loading…'}
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
          {error}
        </div>
      )}

      {result && !loading && (
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Timeline */}
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {locale === 'fr' ? 'Historique' : locale === 'ar' ? 'سجل التحديثات' : 'Travel history'}
              </h3>
              <div className="text-xs text-slate-500 dark:text-white/45">
                {result.status ? `${locale === 'fr' ? 'Statut' : locale === 'ar' ? 'الحالة' : 'Status'}: ${result.status}` : null}
              </div>
            </div>

            <div className="mt-5 space-y-6">
              {Array.isArray(result.events) && result.events.length > 0 ? (
                groupByDate(result.events).map(([date, items]) => (
                  <div key={date}>
                    <div className="text-xs font-semibold text-slate-500 dark:text-white/50 mb-2">{date}</div>

                    <div className="relative pl-6 space-y-4">
                      <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10" />

                      {items.map((ev, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute left-1.5 top-2 h-2.5 w-2.5 rounded-full bg-brand-orange" />

                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-sm font-semibold text-slate-900 dark:text-white">{ev.title}</div>
                              {ev.description ? (
                                <div className="text-[12px] text-slate-600 dark:text-white/60 mt-0.5">{ev.description}</div>
                              ) : null}
                            </div>

                            <div className="text-right">
                              <div className="text-[12px] text-slate-500 dark:text-white/45">
                                {new Date(ev.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </div>
                              {ev.location ? (
                                <div className="text-[12px] text-slate-600 dark:text-white/60 mt-0.5">{ev.location}</div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-slate-600 dark:text-white/60">
                  {locale === 'fr'
                    ? 'Pas encore de timeline. (Ajoutez events[] dans l’API).'
                    : locale === 'ar'
                    ? 'لا توجد بيانات timeline حالياً. (أضف events[] في الـ API).'
                    : 'No timeline yet. (Add events[] in the API response).'}
                </div>
              )}
            </div>
          </div>

          {/* Facts */}
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              {locale === 'fr' ? 'Détails' : locale === 'ar' ? 'تفاصيل الشحنة' : 'Shipment facts'}
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-white/45">
                  {locale === 'fr' ? 'Numéro' : locale === 'ar' ? 'رقم التتبّع' : 'Tracking #'}
                </span>
                <span className="font-medium text-slate-900 dark:text-white">{result.trackingNumber ?? '—'}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-white/45">
                  {locale === 'fr' ? 'Dernière mise à jour' : locale === 'ar' ? 'آخر تحديث' : 'Last update'}
                </span>
                <span className="text-slate-700 dark:text-white/80">
                  {result.lastUpdate ? new Date(result.lastUpdate).toLocaleString() : '—'}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-white/45">
                  {locale === 'fr' ? 'Localisation' : locale === 'ar' ? 'الموقع' : 'Location'}
                </span>
                <span className="text-slate-700 dark:text-white/80">{result.location ?? '—'}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-white/45">ETA</span>
                <span className="text-slate-700 dark:text-white/80">{result.eta ?? '—'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}