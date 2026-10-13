// @ts-check

const GITHUB_USER = 'yasminromerorodrigues';
const SITE_PRINCIPAL = 'https://yasminromerorodrigues.github.io/esclerose-multipla/';
const REPO = 'wiki-esclerose-multipla';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki Esclerose Múltipla',
  tagline: 'Informação clara e confiável sobre esclerose múltipla',

  url: `https://${GITHUB_USER}.github.io`,
  baseUrl: `/${REPO}/`,
  organizationName: GITHUB_USER,
  projectName: REPO,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: `https://github.com/${GITHUB_USER}/${REPO}/tree/main/`,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Wiki EM',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Conteúdo',
          },
          {
            href: SITE_PRINCIPAL,
            label: 'Tudo sobre esclerose múltipla',
            position: 'right',
          },
          {
            href: `https://github.com/${GITHUB_USER}/${REPO}`,
            label: 'Contribuir no GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright:
          'Conteúdo informativo, não substitui orientação de profissionais de saúde. ' +
          'Textos sob CC BY-SA 4.0, código sob licença MIT.',
      },
    }),
};

export default config;
