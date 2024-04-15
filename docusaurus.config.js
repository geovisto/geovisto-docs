// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Geovisto',
  tagline: 'Open-source mapping library for generic geospatial data visualization.',
  url: 'https://geovisto.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/geovisto-logo1.png',
  organizationName: 'geovisto', // Usually your GitHub org/user name.
  projectName: 'geovisto.github.io', // Usually your repo name.
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-geovisto',
        path: 'docs-geovisto',
        routeBasePath: 'docs-geovisto',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
          blogSidebarCount: 0,
          showReadingTime: false,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/blog.css')],
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'Geovisto',
        logo: {
          alt: 'Site Logo',
          src: 'img/geovisto-logo1.png',
          srcDark: 'img/geovisto-logo1.png',
          href: '/',
          target: '_self',
          width: 35,
          height: 35,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: 'playground#playground-hook',
            label: 'Playground',
            position: 'left',
          },
          {
            to: '/docs-geovisto',
            position: 'left',
            label: 'Documentation',
            activeBaseRegex: `/docs-geovisto/`,
          },
          {
            to: 'blog',
            position: 'left',
            label: 'Community',
          },
          {
            href: 'https://github.com/geovisto',
            position: 'right',
            className: 'github',
          },
          {
            href: 'https://www.npmjs.com/package/geovisto',
            position: 'right',
            className: 'npm',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Pages',
            items: [
              {
                label: 'Playground',
                to: '/playground#playground-hook',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/geovisto',
              },
              {
                label: 'NPM',
                href: 'https://www.npmjs.com/package/geovisto',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Geovisto | VUT FIT Brno. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
