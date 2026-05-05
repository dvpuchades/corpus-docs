export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

type UI = {
  nav: { docs: string; privacy: string };
  footer: { docs: string; privacy: string; contact: string; rights: string };
  cta: { downloadAlt: string; downloadShort: string; learnMore: string };
  docs: {
    indexTitle: string;
    indexIntro: string;
    onThisPage: string;
    lastUpdated: string;
    nextRead: string;
    backToDocs: string;
    summaryLabel: string;
  };
  langSwitcher: { label: string };
  notFound: { title: string; body: string; cta: string };
  meta: { siteName: string; tagline: string };
  sections: {
    "getting-started": string;
    "daily-use": string;
    training: string;
    "health-signals": string;
    privacy: string;
    faq: string;
  };
};

export const ui: Record<Locale, UI> = {
  en: {
    nav: { docs: "Docs", privacy: "Privacy" },
    footer: {
      docs: "Docs",
      privacy: "Privacy",
      contact: "Contact",
      rights: "Built around Apple Health and Apple Watch.",
    },
    cta: {
      downloadAlt: "Download on the App Store",
      downloadShort: "Download",
      learnMore: "Learn more",
    },
    docs: {
      indexTitle: "Docs",
      indexIntro: "Get more out of Corpus — how the metrics work, how to log, and how the coach plans your week.",
      onThisPage: "On this page",
      lastUpdated: "Last updated",
      nextRead: "Keep reading",
      backToDocs: "All docs",
      summaryLabel: "Summary",
    },
    langSwitcher: { label: "Language" },
    notFound: {
      title: "Page not found.",
      body: "The page you were looking for doesn't exist — or it moved.",
      cta: "Back home",
    },
    meta: {
      siteName: "Corpus",
      tagline: "The coach your Apple Watch was waiting for.",
    },
    sections: {
      "getting-started": "Getting started",
      "daily-use": "Daily use",
      training: "Training",
      "health-signals": "Health signals",
      privacy: "Privacy & control",
      faq: "FAQ",
    },
  },
  es: {
    nav: { docs: "Docs", privacy: "Privacidad" },
    footer: {
      docs: "Docs",
      privacy: "Privacidad",
      contact: "Contacto",
      rights: "Hecho para Apple Salud y Apple Watch.",
    },
    cta: {
      downloadAlt: "Descargar en el App Store",
      downloadShort: "Descargar",
      learnMore: "Saber más",
    },
    docs: {
      indexTitle: "Docs",
      indexIntro: "Saca más partido a Corpus: cómo funcionan las métricas, cómo registrar y cómo el entrenador planifica tu semana.",
      onThisPage: "En esta página",
      lastUpdated: "Actualizado",
      nextRead: "Sigue leyendo",
      backToDocs: "Todos los docs",
      summaryLabel: "Resumen",
    },
    langSwitcher: { label: "Idioma" },
    notFound: {
      title: "Página no encontrada.",
      body: "La página que buscas no existe, o se ha movido.",
      cta: "Volver al inicio",
    },
    meta: {
      siteName: "Corpus",
      tagline: "El entrenador que tu Apple Watch estaba esperando.",
    },
    sections: {
      "getting-started": "Empezar",
      "daily-use": "Día a día",
      training: "Entrenamiento",
      "health-signals": "Señales de salud",
      privacy: "Privacidad y control",
      faq: "Preguntas frecuentes",
    },
  },
};

export const t = (locale: Locale): UI => ui[locale];
