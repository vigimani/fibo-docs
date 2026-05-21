import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fibo SaaS',
  tagline:
    'Non-custodial crypto infrastructure for B2B platforms. Wallets, gasless transactions, swaps, yield, ramping — without becoming a crypto company.',
  favicon: 'img/favicon.svg',

  url: 'https://docs.fibo-crypto.fr',
  baseUrl: '/',

  organizationName: 'vigimani',
  projectName: 'fibo-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/vigimani/fibo-docs/tree/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Fibo blog',
          blogDescription:
            'Release notes, integration patterns, and behind-the-scenes',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Fibo blog',
            description:
              'Release notes, integration patterns, and behind-the-scenes',
            copyright: `Copyright © ${new Date().getFullYear()} Fibo.`,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      // Title omitted intentionally — the brand mark + wordmark live entirely
      // inside the SVG logo so they match the v3 presentation deck.
      logo: {
        alt: 'Fibo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        width: 124,
        height: 32,
      },
      items: [
        {
          to: '/docs/introduction',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/docs/api-reference/introduction',
          label: 'API',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/vigimani/fibo-saas',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://fibo-crypto.fr/contact',
          label: 'Contact sales',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Documentation', to: '/docs/introduction' },
            { label: 'API reference', to: '/docs/api-reference/introduction' },
            { label: 'Quickstart', to: '/docs/quickstart' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Blog', to: '/blog' },
            {
              label: 'GitHub',
              href: 'https://github.com/vigimani/fibo-saas',
            },
            {
              label: 'Status',
              href: 'https://status.fibo-crypto.fr',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Contact sales', href: 'https://fibo-crypto.fr/contact' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fibo. Non-custodial by construction.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'bash',
        'json',
        'typescript',
        'tsx',
        'python',
        'go',
        'sql',
        'http',
      ],
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
