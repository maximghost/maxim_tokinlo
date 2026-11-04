// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the custom domain once it is purchased.
const SITE_URL = 'https://maximtokinlo.vercel.app';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  i18n: {
    locales: ['fr', 'en', 'fi'],
    defaultLocale: 'fr',
    routing: {
      // Every language lives under its own prefix: /fr/, /en/, /fi/.
      // The root page (src/pages/index.astro) picks the visitor's language.
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  env: {
    schema: {
      // Public by design: Web3Forms access keys only route messages to an inbox.
      // Without it, the contact buttons fall back to a plain e-mail link.
      PUBLIC_WEB3FORMS_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-BJ', en: 'en', fi: 'fi' },
      },
    }),
  ],
});
