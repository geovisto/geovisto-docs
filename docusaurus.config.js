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
  favicon: 'img/geovisto-logo4.png',
  organizationName: 'geovisto', // Usually your GitHub org/user name.
  projectName: 'geovisto.github.io', // Usually your repo name.
  plugins: [
     'docusaurus-plugin-sass',
      ['@docusaurus/plugin-content-docs',
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
          editLocalizedFiles: false,
          editCurrentVersion: false,
        },
        blog: {
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
          blogSidebarCount: 0,
          showReadingTime: false,
          editLocalizedFiles: false,
          sortPosts: 'descending'
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
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Geovisto',
        hideOnScroll: true,
        logo: {
          alt: 'Site Logo',
          src: 'img/geovisto-logo4.png',
          srcDark: 'img/geovisto-logo4.png',
          href: '/',
          target: '_self',
          width: 35,
          height: 35
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
            activeBaseRegex: `/docs-geovisto/README`,
          },
          {
            to: 'blog',
            position: 'left',
            label: 'Research',
          },
          {
            href: 'https://github.com/geovisto',
            position: 'right',
            className: 'toggle',
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
              {
                label: 'Documentation',
                to: '/docs-geovisto/',
              }
            ],
          },
          {
            title: 'Pages',
            items: [
              {
                label: 'Playground',
                to: '/playground#playground-hook',
              },
              {
                label: 'Research',
                to: '/research',
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
        darkTheme: darkCodeTheme
      },
    }),
};

module.exports = config;

