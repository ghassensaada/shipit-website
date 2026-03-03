import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionShell } from '@/components/section-shell';
import { FadeIn } from '@/components/fade-in';
import { isLocale, type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';

export default function EnterprisePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'en';
  const t = getMessages(locale);

  return (
    <>
      <Navbar locale={locale} t={t} />

      <main className="flex-1">
        <FadeIn delay={0.1}>
          <SectionShell
            eyebrow={
              locale === 'fr'
                ? 'Solutions entreprises'
                : locale === 'ar'
                ? 'حلول الشركات'
                : 'Enterprise solutions'
            }
            title={
              locale === 'fr'
                ? 'Une logistique pensée pour les entreprises petites et grandes'
                : locale === 'ar'
                ? 'حلول لوجستية للشركات الصغيرة والكبيرة'
                : 'Logistics for small and large enterprises'
            }
            description={
              locale === 'fr'
                ? 'Flux personnalisés, SLA, et intégrations pour aller au‑delà de la livraison standard.'
                : locale === 'ar'
                ? 'تدفّقات مخصّصة، اتفاقيات مستوى الخدمة، وتكامل مع أنظمتك.'
                : 'Custom shipping workflows, SLAs, and integrations for businesses that need more than standard parcel delivery.'
            }
          >
            <div className="grid gap-8 md:grid-cols-2 text-sm">

              {/* Tailored logistics */}
              <div
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
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {locale === 'fr'
                    ? 'Logistique sur mesure'
                    : locale === 'ar'
                    ? 'لوجستيك مخصّص'
                    : 'Tailored logistics'}
                </h3>

                <p className="mt-2 text-slate-600 dark:text-white/70">
                  {locale === 'fr'
                    ? 'Nous concevons avec vous des tournées, horaires d’enlèvement et promesses de livraison adaptées à votre activité.'
                    : locale === 'ar'
                    ? 'نخدمو مع فريقك مسارات وجداول استلام وتسليم تناسب عملك.'
                    : 'We work with your operations team to design pickup schedules, routing, and delivery promises that match your business.'}
                </p>
              </div>

              {/* Integrations & data */}
              <div
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
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {locale === 'fr'
                    ? 'Intégrations & données'
                    : locale === 'ar'
                    ? 'التكامل والبيانات'
                    : 'Integrations & data'}
                </h3>

                <p className="mt-2 text-slate-600 dark:text-white/70">
                  {locale === 'fr'
                    ? 'Connectez vos systèmes à Ship It via API ou outils simples.'
                    : locale === 'ar'
                    ? 'اربط أنظمتك مع Ship It عبر واجهات برمجة التطبيقات أو أدوات بسيطة.'
                    : 'Connect your systems to Ship It via APIs or simple tools to keep orders and tracking in sync.'}
                </p>
              </div>
            </div>

            {/* CTA block */}
            <div
              className="
                mt-10 rounded-2xl
                border border-brand-orange/30 dark:border-brand-orange/20
                bg-brand-orange/10 dark:bg-brand-orange/5
                backdrop-blur-xl
                p-6
                shadow-[0_0_30px_rgba(255,122,26,0.15)]
                transition-all
              "
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {locale === 'fr'
                  ? 'Prêt à discuter d’une offre entreprise ?'
                  : locale === 'ar'
                  ? 'حاظر لمناقشة حل للشركات؟'
                  : 'Ready to discuss an enterprise plan?'}
              </h3>

              <p className="mt-2 text-slate-700 dark:text-white/70">
                {locale === 'fr'
                  ? 'Partagez votre volume, vos destinations et vos défis actuels.'
                  : locale === 'ar'
                  ? 'شاركنا حجم شحناتك ووجهاتك والمشاكل التي تواجهك.'
                  : 'Share your shipment volume, destinations, and current challenges—we’ll propose a tailored solution.'}
              </p>

              <a
                href={`/${locale}/contact`}
                className="
                  mt-4 inline-flex rounded-xl bg-brand-orange px-4 py-2 text-xs font-semibold text-slate-950
                  hover:bg-orange-400 transition
                "
              >
                {locale === 'fr'
                  ? 'Contacter notre équipe'
                  : locale === 'ar'
                  ? 'اتصل بفريقنا'
                  : 'Contact our team'}
              </a>
            </div>
          </SectionShell>
        </FadeIn>
      </main>

      <Footer locale={locale} />
    </>
  );
}
