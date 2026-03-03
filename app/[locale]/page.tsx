import { Navbar } from '@/components/navbar'; import { Footer } from '@/components/footer'; import { TrackingWidget } from '@/components/tracking-widget'; import { SectionShell } from '@/components/section-shell'; import { FadeIn } from '@/components/fade-in';
import { isLocale, type Locale } from '@/i18n/config'; import { getMessages } from '@/i18n/messages'; export default function HomePage({ params }: { params: { locale: string } }) { const locale: Locale = isLocale(params.locale) ? params.locale : 'en';
const t = getMessages(locale); return (
<>
    <Navbar locale={locale} t={t} />
    <main className="flex-1"> {/* HERO */}
        <section className="
            relative overflow-hidden
            bg-gradient-to-b from-slate-100 via-white to-slate-100
            dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
            pt-20 pb-20 sm:pt-24 sm:pb-32
          ">
            <div className="
              absolute inset-0
              bg-[radial-gradient(circle_at_top,rgba(255,122,26,0.12),transparent_60%)]
              dark:bg-[radial-gradient(circle_at_top,rgba(255,122,26,0.12),transparent_60%)]
            " />
            <div className="
              relative mx-auto max-w-6xl px-4
              flex flex-col md:flex-row
              items-center md:items-start
              gap-10 md:gap-20
            "> {/* LEFT SIDE — TEXT */}
                <div className="flex-1 text-center md:text-left md:self-center">
                    <FadeIn delay={0.1}>
                        <h1 className="
                    text-4xl sm:text-5xl font-bold tracking-tight sm:tracking-[-0.02em]
                    text-slate-900 dark:text-white
                    whitespace-pre-line
                  "> {t.heroTitle} </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="mt-4 text-lg text-slate-600 dark:text-white/70 max-w-xl mx-auto md:mx-0"> {t.heroSubtitle}
                            <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start"> {(t.heroBullets ?? '').split('|').filter(Boolean).map((b) => ( <span key={b} className="
        inline-flex items-center rounded-full
        border border-slate-200 dark:border-white/10
        bg-white/60 dark:bg-white/5
        px-3 py-1 text-xs font-medium
        text-slate-700 dark:text-white/70
      "> {b} </span> ))} </div>
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                            <a href={`/${locale}/contact`} className="
                    inline-flex items-center rounded-xl border border-slate-300 dark:border-white/10
                    px-5 py-2.5 text-sm font-semibold
                    text-slate-700 dark:text-white/80
                    hover:border-brand-orange/40 hover:text-brand-orange
                    transition-all duration-300
                  ">
                                <FadeIn delay={0.35}>
  <div className="mt-8 flex justify-center md:justify-start">
    <a
      href={`/${locale}/contact`}
      className="
        inline-flex items-center justify-center
        rounded-xl bg-brand-orange
        px-6 py-3 text-sm font-semibold text-white
        shadow-md hover:shadow-lg hover:opacity-95
        transition-all
      "
    >
      {t.ctaQuote}
    </a>
  </div>
</FadeIn>
                            </a>
                        </div>
                    </FadeIn>


                </div> {/* RIGHT SIDE — TRACKING WIDGET */}
                <div id="tracking" className="
                flex-1 w-full
                max-w-lg md:max-w-md
                mx-auto md:mx-0
              ">
                    <FadeIn delay={0.15}>
                        <TrackingWidget locale={locale} />
                    </FadeIn>
                </div>
            </div>
        </section>


        {/* SERVICES */}
        <FadeIn delay={0.15}>
            <SectionShell eyebrow={t.servicesEyebrow} title={t.servicesTitle} description={t.servicesDesc}>
                <div className="grid gap-6 md:grid-cols-3"> {[ { title: locale === 'fr' ? 'Livraison nationale' : locale === 'ar' ? 'شحن داخلي' : 'Domestic shipping', desc: locale === 'fr' ? 'Livraison rapide entre les principales villes avec délais clairs.' : locale === 'ar' ? 'تسليم سريع بين
                    المدن الرئيسية مع مواعيد واضحة.' : 'Fast delivery between major cities and regions with clear ETAs.', }, { title: locale === 'fr' ? 'E‑commerce & paiement à la livraison' : locale === 'ar' ? 'متاجر إلكترونية والدفع عند التسليم' : 'E‑commerce
                    & COD', desc: locale === 'fr' ? 'Paiement à la livraison, retours, et intégrations simples.' : locale === 'ar' ? 'دفع عند التسليم، معالجة المرتجعات، وتكامل بسيط مع متجرك.' : 'Cash-on-delivery, returns handling, and simple integrations
                    for online stores.', }, { title: locale === 'fr' ? 'Colis internationaux' : locale === 'ar' ? 'شحن دولي' : 'International parcels', desc: locale === 'fr' ? 'Expéditions à l’international avec suivi et aide douanière.' : locale ===
                    'ar' ? 'شحنات دولية مع تتبّع ودعم في الإجراءات الجمركية.' : 'Cross-border shipping with tracking and customs support.', }, ].map((item) => (
                    <div key={item.title} className="
                    rounded-2xl border border-slate-200 dark:border-white/10
                    bg-white/70 dark:bg-white/5
                    backdrop-blur-xl p-6
                    transition-all duration-300
                    hover:-translate-y-[2px]
                    hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]
                    hover:border-brand-orange/40
                  ">
                        <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white"> {item.title} </h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-white/70"> {item.desc} </p>
                    </div> ))} </div>
            </SectionShell>
        </FadeIn> 
        
        {/* HOW IT WORKS */}
        <FadeIn delay={0.18}>
            <SectionShell eyebrow={t.howEyebrow} title={t.howTitle} description={t.howDesc}>
                <div className="grid gap-6 md:grid-cols-3"> {(t.howSteps ?? '').split('|').filter(Boolean).map((step, idx) => (
                    <div key={step} className="
            rounded-2xl border border-slate-200 dark:border-white/10
            bg-white/70 dark:bg-white/5 backdrop-blur-xl
            p-6
          ">
                        <div className="text-xs font-semibold text-brand-orange"> {String(idx + 1).padStart(2, '0')} </div>
                        <div className="mt-2 text-base font-semibold text-slate-900 dark:text-white"> {step} </div>
                    </div> ))} </div>
            </SectionShell>
        </FadeIn> 
        
        
        {/* WHY SHIP IT */}
        <FadeIn delay={0.2}>
            <SectionShell eyebrow={t.whyEyebrow} title={t.whyTitle} description={t.whyDesc}>
                <div className="grid gap-6 md:grid-cols-4 text-sm"> {[ { title: locale === 'fr' ? 'Vitesse' : locale === 'ar' ? 'السرعة' : 'Speed', desc: locale === 'fr' ? 'Réseau optimisé pour des livraisons rapides.' : locale === 'ar' ? 'شبكة محسّنة لتسليم أسرع.' : 'Optimized routes and hubs for fast
                    delivery.', }, { title: locale === 'fr' ? 'Suivi' : locale === 'ar' ? 'التتبّع' : 'Tracking', desc: locale === 'fr' ? 'Statut en temps réel de l’enlèvement à la livraison.' : locale === 'ar' ? 'حالة الشحنة من الاستلام حتى التسليم في
                    الوقت الحقيقي.' : 'Real-time status from pickup to delivery.', }, { title: locale === 'fr' ? 'Support' : locale === 'ar' ? 'الدعم' : 'Support', desc: locale === 'fr' ? 'Une équipe disponible quand vous en avez besoin.' : locale ===
                    'ar' ? 'فريق دعم متواجد عندما تحتاج إليه.' : 'Human support when something needs attention.', }, { title: locale === 'fr' ? 'Scalabilité' : locale === 'ar' ? 'القدرة على التوسّع' : 'Scalability', desc: locale === 'fr' ? 'De la petite
                    boutique à la grande entreprise.' : locale === 'ar' ? 'من المشاريع الصغيرة إلى الشركات الكبرى.' : 'From small shops to large enterprises.', }, ].map((item) => (
                    <div key={item.title}>
                        <h3 className="font-semibold text-slate-900 dark:text-white"> {item.title} </h3>
                        <p className="mt-2 text-slate-600 dark:text-white/60"> {item.desc} </p>
                    </div> ))} </div>
            </SectionShell>
        </FadeIn>
    </main>
    <Footer locale={locale} />undefined
    </> ); }