'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionShell } from '@/components/section-shell';
import { FadeIn } from '@/components/fade-in';
import { isLocale, type Locale } from '@/i18n/config';
import { getMessages } from '@/i18n/messages';
import { useState } from 'react';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'en';
  const t = getMessages(locale);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Navbar locale={locale} t={t} />

      <main className="flex-1">
        <FadeIn delay={0.1}>
          <SectionShell
            eyebrow={t.navContact}
            title={t.contactTitle}
            description={
              locale === 'fr'
                ? 'Que vous expédiiez occasionnellement ou tous les jours, parlons de la meilleure configuration.'
                : locale === 'ar'
                ? 'سواء كنت تشحن أحياناً أو يومياً، دعنا نناقش أفضل إعداد لك.'
                : 'Whether you ship occasionally or every day, we’re happy to discuss the best setup for you.'
            }
          >
            <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="
                  space-y-4 rounded-2xl
                  border border-slate-200 dark:border-white/10
                  bg-white/70 dark:bg-white/5
                  backdrop-blur-xl
                  p-6 text-sm shadow-lg
                "
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-white/80">
                      {locale === 'fr' ? 'Nom' : locale === 'ar' ? 'الاسم' : 'Name'}
                    </label>
                    <input
                      required
                      className="
                        mt-1 w-full rounded-lg
                        border border-slate-300 dark:border-white/10
                        bg-white dark:bg-black/20
                        px-3 py-2 text-sm
                        text-slate-900 dark:text-white
                        placeholder:text-slate-400 dark:placeholder:text-white/40
                        focus:border-brand-orange focus:ring-1 focus:ring-brand-orange
                        transition-all
                      "
                      placeholder={
                        locale === 'fr'
                          ? 'Votre nom'
                          : locale === 'ar'
                          ? 'اسمك'
                          : 'Your name'
                      }
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-white/80">
                      {locale === 'fr'
                        ? 'Entreprise (optionnel)'
                        : locale === 'ar'
                        ? 'الشركة (اختياري)'
                        : 'Company (optional)'}
                    </label>
                    <input
                      className="
                        mt-1 w-full rounded-lg
                        border border-slate-300 dark:border-white/10
                        bg-white dark:bg-black/20
                        px-3 py-2 text-sm
                        text-slate-900 dark:text-white
                        placeholder:text-slate-400 dark:placeholder:text-white/40
                        focus:border-brand-orange focus:ring-1 focus:ring-brand-orange
                        transition-all
                      "
                      placeholder={
                        locale === 'fr'
                          ? 'Nom de l’entreprise'
                          : locale === 'ar'
                          ? 'اسم الشركة'
                          : 'Company name'
                      }
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-white/80">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="
                        mt-1 w-full rounded-lg
                        border border-slate-300 dark:border-white/10
                        bg-white dark:bg-black/20
                        px-3 py-2 text-sm
                        text-slate-900 dark:text-white
                        placeholder:text-slate-400 dark:placeholder:text-white/40
                        focus:border-brand-orange focus:ring-1 focus:ring-brand-orange
                        transition-all
                      "
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-white/80">
                      {locale === 'fr'
                        ? 'Téléphone (optionnel)'
                        : locale === 'ar'
                        ? 'الهاتف (اختياري)'
                        : 'Phone (optional)'}
                    </label>
                    <input
                      className="
                        mt-1 w-full rounded-lg
                        border border-slate-300 dark:border-white/10
                        bg-white dark:bg-black/20
                        px-3 py-2 text-sm
                        text-slate-900 dark:text-white
                        placeholder:text-slate-400 dark:placeholder:text-white/40
                        focus:border-brand-orange focus:ring-1 focus:ring-brand-orange
                        transition-all
                      "
                      placeholder="+216 ..."
                    />
                  </div>
                </div>

                {/* Request type */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-white/80">
                    {locale === 'fr'
                      ? 'Type de demande'
                      : locale === 'ar'
                      ? 'نوع الطلب'
                      : 'Type of request'}
                  </label>
                  <select
                    className="
                      mt-1 w-full rounded-lg
                      border border-slate-300 dark:border-white/10
                      bg-white dark:bg-black/20
                      px-3 py-2 text-sm
                      text-slate-900 dark:text-white
                      focus:border-brand-orange focus:ring-1 focus:ring-brand-orange
                      transition-all
                    "
                    defaultValue="general"
                  >
                    <option value="general">
                      {locale === 'fr'
                        ? 'Question générale'
                        : locale === 'ar'
                        ? 'استفسار عام'
                        : 'General question'}
                    </option>
                    <option value="sales">
                      {locale === 'fr'
                        ? 'Ventes / entreprise'
                        : locale === 'ar'
                        ? 'مبيعات / شركات'
                        : 'Sales / enterprise'}
                    </option>
                    <option value="support">
                      {locale === 'fr'
                        ? 'Support expédition'
                        : locale === 'ar'
                        ? 'دعم الشحن'
                        : 'Shipment support'}
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-white/80">
                    {locale === 'fr'
                      ? 'Message'
                      : locale === 'ar'
                      ? 'الرسالة'
                      : 'Message'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="
                      mt-1 w-full rounded-lg
                      border border-slate-300 dark:border-white/10
                      bg-white dark:bg-black/20
                      px-3 py-2 text-sm
                      text-slate-900 dark:text-white
                      placeholder:text-slate-400 dark:placeholder:text-white/40
                      focus:border-brand-orange focus:ring-1 focus:ring-brand-orange
                      transition-all
                    "
                    placeholder={
                      locale === 'fr'
                        ? 'Parlez-nous de vos volumes, destinations et besoins.'
                        : locale === 'ar'
                        ? 'أخبرنا عن حجم شحناتك ووجهاتك واحتياجاتك.'
                        : 'Tell us about your shipments, volume, and destinations.'
                    }
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    inline-flex items-center rounded-xl bg-brand-orange px-5 py-2.5 text-xs font-semibold text-slate-950
                    shadow-[0_0_20px_rgba(255,122,26,0.35)]
                    hover:shadow-[0_0_30px_rgba(255,122,26,0.45)]
                    transition-all
                  "
                >
                  {locale === 'fr'
                    ? 'Envoyer le message'
                    : locale === 'ar'
                    ? 'إرسال الرسالة'
                    : 'Send message'}
                </button>

                {sent && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                    {locale === 'fr'
                      ? 'Merci, votre message a bien été envoyé.'
                      : locale === 'ar'
                      ? 'شكراً لك، تم استلام رسالتك.'
                      : 'Thank you—your message has been received.'}
                  </p>
                )}
              </form>

              {/* DIRECT CONTACT */}
              <div className="space-y-4 text-sm">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {locale === 'fr'
                    ? 'Contact direct'
                    : locale === 'ar'
                    ? 'تواصل مباشر'
                    : 'Direct contact'}
                </h3>

                <p className="text-slate-700 dark:text-white/70">
                  Email: support@shipit.ovh
                </p>

                <p className="text-slate-700 dark:text-white/70">
                  {locale === 'fr'
                    ? 'Téléphone / WhatsApp:'
                    : locale === 'ar'
                    ? 'الهاتف / واتساب:'
                    : 'Phone / WhatsApp:'}{' '}
                  +216 XX XXX XXX
                </p>
              </div>
            </div>
          </SectionShell>
        </FadeIn>
      </main>

      <Footer locale={locale} />
    </>
  );
}
