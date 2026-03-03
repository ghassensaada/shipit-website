import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionShell } from '@/components/section-shell';
import { isLocale, type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';
import TrackingClient from '@/app/[locale]/track/tracking-client';

export default function TrackPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'en';
  const t = getMessages(locale);

  return (
    <>
      <Navbar locale={locale} t={t} />

      <main className="flex-1">
        <SectionShell
          eyebrow={locale === 'fr' ? 'Suivi' : locale === 'ar' ? 'التتبّع' : 'Tracking'}
          title={locale === 'fr' ? 'Suivre un colis' : locale === 'ar' ? 'تتبّع شحنة' : 'Track a shipment'}
          description={
            locale === 'fr'
              ? 'Entrez votre numéro de suivi pour afficher l’historique.'
              : locale === 'ar'
              ? 'أدخل رقم التتبّع لعرض السجل.'
              : 'Enter your tracking number to view the travel history.'
          }
        >
          <div className="mx-auto max-w-5xl">
            <TrackingClient locale={locale} />
          </div>
        </SectionShell>
      </main>

      <Footer locale={locale} />
    </>
  );
}