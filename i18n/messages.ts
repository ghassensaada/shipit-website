import type { Locale } from './config';

export const messages = {
  en: {
    brandTag: 'Logistics made simple',
    heroTitle: 'Ship faster.\nTrack every package in real time.',
    heroSubtitle:
      'Reliable shipping and tracking for individuals, e‑commerce, and enterprises—across Tunisia and beyond.',

    navHome: 'Home',
    navServices: 'Services',
    navEnterprise: 'Enterprise',
    navContact: 'Contact',

    servicesEyebrow: 'What we offer',
    servicesTitle: 'Our services',
    servicesDesc: 'Flexible shipping options for every need.',

    whyEyebrow: 'Why Ship It?',
    whyTitle: 'A better way to ship',
    whyDesc:
      'Fast delivery, transparent tracking, and reliable service for every shipment.',

    enterpriseTitle: 'Enterprise solutions',
    enterpriseSubtitle: 'Custom logistics for growing businesses.',

    trackingTitle: 'Track your shipment',
    trackingSubtitle: 'Real‑time tracking for every package.',

    contactTitle: 'Let’s talk about your shipment',

    ctaQuote: 'Contact us',
    ctaTrack: 'Track a shipment',
    heroBullets: 'COD for e-commerce|Real-time tracking|Coverage across Tunisia',

    howEyebrow: 'How it works',
    howTitle: 'Ship in 3 simple steps',
    howDesc: 'From pickup to delivery, everything stays visible.',
    howSteps: 'Create shipment or request pickup|We scan & route your parcel|Track delivery in real time',
      },

  fr: {
    brandTag: 'La logistique simplifiée',
    heroTitle: 'Expédiez plus vite.\nSuivez chaque colis en temps réel.',
    heroSubtitle:
      'Une livraison fiable pour les particuliers, l’e‑commerce et les entreprises—en Tunisie et au‑delà.',

    navHome: 'Accueil',
    navServices: 'Services',
    navEnterprise: 'Entreprise',
    navContact: 'Contact',

    servicesEyebrow: 'Ce que nous offrons',
    servicesTitle: 'Nos services',
    servicesDesc: 'Des options d’expédition flexibles pour chaque besoin.',

    whyEyebrow: 'Pourquoi Ship It ?',
    whyTitle: 'Une meilleure façon d’expédier',
    whyDesc:
      'Livraison rapide, suivi transparent et service fiable pour chaque envoi.',

    enterpriseTitle: 'Solutions entreprise',
    enterpriseSubtitle:
      'Logistique sur mesure pour les entreprises en croissance.',

    trackingTitle: 'Suivez votre envoi',
    trackingSubtitle: 'Suivi en temps réel pour chaque colis.',

    contactTitle: 'Parlons de vos expéditions',

    ctaQuote: 'Contactez-nous',
    ctaTrack: 'Suivre un envoi',
    heroBullets: 'COD pour e-commerce|Suivi en temps réel|Couverture en Tunisie',
    howEyebrow: 'Comment ça marche',
    howTitle: 'Expédiez en 3 étapes simples',
    howDesc: 'De la récupération au livraison, tout est visible.',
    howSteps: 'Créer un envoi ou demander une récupération|Nous scannez et routons votre colis|Suivre la livraison en temps réel',
  },

  ar: {
    brandTag: 'اللوجستيات أصبحت سهلة',
    heroTitle: 'اشحن أسرع.\nوتابع كل شحنة في الوقت الفعلي.',
    heroSubtitle:
      'خدمات شحن وتتبع موثوقة للأفراد والتجارة الإلكترونية والشركات—في تونس وخارجها.',

    navHome: 'الرئيسية',
    navServices: 'الخدمات',
    navEnterprise: 'الشركات',
    navContact: 'اتصل بنا',

    servicesEyebrow: 'ماذا نقدم',
    servicesTitle: 'خدماتنا',
    servicesDesc: 'خيارات شحن مرنة لكل احتياج.',

    whyEyebrow: 'لماذا Ship It؟',
    whyTitle: 'طريقة أفضل للشحن',
    whyDesc:
      'تسليم سريع، تتبع شفاف، وخدمة موثوقة لكل شحنة.',

    enterpriseTitle: 'حلول للشركات',
    enterpriseSubtitle: 'خدمات لوجستية مخصصة للشركات النامية.',

    trackingTitle: 'تتبع شحنتك',
    trackingSubtitle: 'تتبع لحظي لكل شحنة.',

    contactTitle: 'دعنا نتحدث عن شحنتك',

    ctaQuote: 'اتصل بنا',
    ctaTrack: 'تتبع شحنتك',
    heroBullets: 'COD للتجارة الإلكترونية|تتبع في الوقت الفعلي|تغطية في تونس',
    howEyebrow: 'كيف يعمل',
    howTitle: 'شحن في 3 خطوات بسيطة',
    howDesc: 'من الاستلام إلى التسليم، كل شيء مرئي.',
    howSteps: 'إنشاء شحنة أو طلب استلام|نقرأ ونوجه شحنتك|تتبع التسليم في الوقت الفعلي',
  },
};

export type Messages = {
  [K in keyof typeof messages.en]: string;
};

export const allMessages: Record<Locale, Messages> = {
  en: messages.en,
  fr: messages.fr,
  ar: messages.ar,
};

export function getMessages(locale: Locale): Messages {
  return allMessages[locale] ?? allMessages.en;
}
