import type { APIRoute } from 'astro';
import { siteConfig } from '../config';
import { languagesList } from '../i18n/ui';
import { topicSlugs } from '../i18n/topics';

function hreflangCode(l: string): string {
  if (l === 'th') return 'th-TH';
  if (l === 'zh') return 'zh-Hans';
  return 'en';
}

export const GET: APIRoute = () => {
  const base = siteConfig.baseUrl;
  const home = (l: string) => `${base}/${l}/`;
  const topicUrl = (l: string, t: string) => `${base}/${l}/${t}/`;

  const homeEntries = languagesList.map((l) => ({
    url: home(l),
    alts: languagesList.map((x) => ({ lang: hreflangCode(x), url: home(x) })),
  }));

  const topicEntries: { url: string; alts: { lang: string; url: string }[] }[] = [];
  for (const t of topicSlugs) {
    for (const l of languagesList) {
      topicEntries.push({
        url: topicUrl(l, t),
        alts: languagesList.map((x) => ({ lang: hreflangCode(x), url: topicUrl(x, t) })),
      });
    }
  }

  const all = [...homeEntries, ...topicEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${all
  .map(
    (e) => `  <url>
    <loc>${e.url}</loc>
${e.alts
  .map(
    (a) =>
      `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.url}" />`
  )
  .join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${home('th')}" />
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
