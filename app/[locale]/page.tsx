import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TrackingWidget } from '@/components/tracking-widget';
import { SectionShell } from '@/components/section-shell';
import { FadeIn } from '@/components/fade-in';
import { isLocale, type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'en';
  const t = getMessages(locale);

  return (
    <>
      <Navbar locale={locale} t={t} />

      <main className="flex-1">
        {/* HERO */}
        <section
          className={`
            relative overflow-hidden
            bg-gradient-to-b from-slate-100 via-white to-slate-100
            dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
            pt-20 pb-20 sm:pt-24 sm:pb-32
          `}
        >
          <div
            className={`
              absolute inset-0
              bg-[radial-gradient(circle_at_top,rgba(255,122,26,0.12),transparent_60%)]
            `}
          />

          <div
            className={`
              relative mx-auto max-w-6xl px-4
              flex flex-col md:flex-row
              items-center md:items-start
              gap-10 md:gap-20
            `}
          >
            {/* LEFT */}
            <div
  className={`
    flex-1
    text-center
    md:text-start
    md:self-center
  `}
>
              <FadeIn delay={0.1}>
                <h1
                  className={`
                    text-4xl sm:text-5xl font-bold tracking-tight
                    text-slate-900 dark:text-white
                    whitespace-pre-line
                  `}
                >
                  {t.heroTitle}
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-4 text-lg text-slate-600 dark:text-white/70 max-w-xl mx-auto md:mx-0">
                  {t.heroSubtitle}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
                  {(t.heroBullets ?? '')
                    .split('|')
                    .filter(Boolean)
                    .map((b) => (
                      <span
                        key={b}
                        className={`
                          inline-flex items-center rounded-full
                          border border-slate-200 dark:border-white/10
                          bg-white/60 dark:bg-white/5
                          px-3 py-1 text-xs font-medium
                          text-slate-700 dark:text-white/70
                        `}
                      >
                        {b}
                      </span>
                    ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 rtl:md:justify-end">
                  <a
                    href={`/${locale}/contact`}
                    className={`
                      inline-flex items-center justify-center
                      rounded-xl bg-brand-orange
                      px-6 py-3 text-sm font-semibold text-white
                      shadow-md hover:shadow-lg hover:opacity-95
                      transition-all
                    `}
                  >
                    {t.ctaQuote}
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* RIGHT */}
            <div className="flex-1 w-full max-w-lg md:max-w-md mx-auto md:mx-0">
              <FadeIn delay={0.15}>
                <TrackingWidget locale={locale} />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <FadeIn delay={0.15}>
          <SectionShell
            eyebrow={t.servicesEyebrow}
            title={t.servicesTitle}
            description={t.servicesDesc}
          >
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title:
                    locale === 'fr'
                      ? 'Livraison nationale'
                      : locale === 'ar'
                      ? 'شحن داخلي'
                      : 'Domestic shipping',
                  desc:
                    locale === 'fr'
                      ? 'Livraison rapide entre les principales villes.'
                      : locale === 'ar'
                      ? 'تسليم سريع بين المدن الرئيسية.'
                      : 'Fast delivery between major cities and regions.',
                },
                {
                  title:
                    locale === 'fr'
                      ? 'E-commerce & paiement à la livraison'
                      : locale === 'ar'
                      ? 'متاجر إلكترونية والدفع عند التسليم'
                      : 'E-commerce & COD',
                  desc:
                    locale === 'fr'
                      ? 'Paiement à la livraison et retours.'
                      : locale === 'ar'
                      ? 'دفع عند التسليم ومعالجة المرتجعات.'
                      : 'Cash-on-delivery and returns handling.',
                },
                {
                  title:
                    locale === 'fr'
                      ? 'Suivi en temps réel et notifications'
                      : locale === 'ar'
                      ? 'متابعة لحظة بلحظة واشعارات بالوقت'
                      : 'Live tracking and notifications',
                  desc:
                    locale === 'fr'
                      ? 'Expéditions avec suivi en temps réel et notifications.'
                      : locale === 'ar'
                      ? 'شحن مع تتبّع لحظة بلحظة واشعارات بالوقت.'
                      : 'Shipping with live tracking and notifications.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`
                    rounded-2xl border border-slate-200 dark:border-white/10
                    bg-white/70 dark:bg-white/5
                    backdrop-blur-xl p-6
                    hover:-translate-y-[2px]
                    hover:shadow-lg
                    hover:border-brand-orange/40
                    transition-all
                  `}
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </SectionShell>
        </FadeIn>
      </main>

      <Footer locale={locale} />
    </>
  );
}