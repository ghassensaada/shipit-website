import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionShell } from '@/components/section-shell';
import { FadeIn } from '@/components/fade-in';
import { isLocale, type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'en';
  const t = getMessages(locale);

  const services = [
    {
      key: 'domestic',
      title:
        locale === 'fr'
          ? 'Livraison nationale'
          : locale === 'ar'
          ? 'شحن داخلي'
          : 'Domestic shipping',
      desc:
        locale === 'fr'
          ? 'Livraison porte-à-porte entre les principales villes et régions.'
          : locale === 'ar'
          ? 'تسليم من الباب إلى الباب بين المدن والمناطق الرئيسية.'
          : 'Door-to-door delivery between major cities and regions.',
      bullets: [
        locale === 'fr'
          ? 'Livraison le jour même dans certaines zones'
          : locale === 'ar'
          ? 'تسليم في نفس اليوم في بعض المناطق'
          : 'Same-day in select zones',
        locale === 'fr'
          ? 'Livraison le lendemain sur la plupart des trajets'
          : locale === 'ar'
          ? 'تسليم في اليوم التالي في أغلب المسارات'
          : 'Next-day for most routes',
        locale === 'fr'
          ? 'Suivi en temps réel'
          : locale === 'ar'
          ? 'تتبّع في الوقت الحقيقي'
          : 'Live tracking',
      ],
    },
    {
      key: 'ecom',
      title:
        locale === 'fr'
          ? 'E‑commerce & paiement à la livraison'
          : locale === 'ar'
          ? 'متاجر إلكترونية والدفع عند التسليم'
          : 'E‑commerce & COD',
      desc:
        locale === 'fr'
          ? 'Pensé pour les boutiques en ligne qui ont besoin de fiabilité et de collecte de paiement.'
          : locale === 'ar'
          ? 'مصمّم للمتاجر الإلكترونية التي تحتاج إلى تسليم موثوق وجمع المدفوعات.'
          : 'Designed for online stores that need reliable delivery and cash collection.',
      bullets: [
        locale === 'fr'
          ? 'Paiement à la livraison'
          : locale === 'ar'
          ? 'الدفع عند التسليم'
          : 'Cash-on-delivery',
        locale === 'fr'
          ? 'Gestion des retours'
          : locale === 'ar'
          ? 'إدارة المرتجعات'
          : 'Returns handling',
        locale === 'fr'
          ? 'Intégrations simples'
          : locale === 'ar'
          ? 'تكامل بسيط'
          : 'Simple integrations',
      ],
    },
  ];

  return (
    <>
      <Navbar locale={locale} t={t} />

      <main className="flex-1">
        <FadeIn delay={0.1}>
          <SectionShell
            eyebrow={t.servicesEyebrow}
            title={
              locale === 'fr'
                ? 'Des services d’expédition qui évoluent avec vous'
                : locale === 'ar'
                ? 'خدمات شحن تتطوّر مع نموّك'
                : 'Shipping services that scale with you'
            }
            description={
              locale === 'fr'
                ? 'Choisissez la combinaison de services adaptée à votre volume et à vos destinations.'
                : locale === 'ar'
                ? 'اختر مزيج الخدمات الذي يناسب حجم عملك ووجهاتك.'
                : 'Choose the combination of services that fits your volume, destinations, and customer expectations.'
            }
          >
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.key}
                  className="
                    rounded-2xl
                    border border-slate-200 dark:border-white/10
                    bg-white/70 dark:bg-white/5
                    backdrop-blur-xl
                    p-6
                    transition-all duration-300
                    hover:-translate-y-[2px]
                    hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]
                    hover:border-brand-orange/40
                  "
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
                    {service.desc}
                  </p>

                  <ul className="mt-3 space-y-1 text-slate-600 dark:text-white/60 text-sm">
                    {service.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
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
