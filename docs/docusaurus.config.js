const { MASK_WIZARD } = require('./src/locales')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: MASK_WIZARD,
  tagline: 'Masks',
  url: 'https://github.com/pmqueiroz/mask-wizard',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pmqueiroz',
  projectName: 'mask-wizard',
  themeConfig: {
    navbar: {
      title: MASK_WIZARD,
      logo: {
        alt: `${MASK_WIZARD} Logo`,
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/pmqueiroz/mask-wizard',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyrito © ${new Date().getFullYear()} MaskWizard. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:   
            'https://github.com/pmqueiroz/mask-wizard/edit/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
