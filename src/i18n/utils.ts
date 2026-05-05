import { defaultLocale, locales, type Locale } from "./ui";

export { locales, defaultLocale };
export type { Locale };

export const SITE_URL = "https://corpus.dvpuchades.com";
export const APP_STORE_URL = "https://apps.apple.com/app/id6761331575";
export const CONTACT_EMAIL = "dvpuchades@gmail.com";
export const APP_ID = "6761331575";

export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.replace(/^\/+/, "").split("/")[0];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

export function stripLocale(pathname: string): string {
  const m = pathname.match(/^\/(en|es)(\/.*)?$/);
  return m ? m[2] || "/" : pathname;
}

export function withLocale(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p === "/" ? "" : p}`.replace(/\/+$/, "") || `/${locale}`;
}

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export function alternateLanguageUrls(pathWithoutLocale: string): { hreflang: string; href: string }[] {
  const list = locales.map((l) => ({
    hreflang: l,
    href: absoluteUrl(withLocale(l, pathWithoutLocale)),
  }));
  list.push({ hreflang: "x-default", href: absoluteUrl(withLocale(defaultLocale, pathWithoutLocale)) });
  return list;
}
