module.exports = {
    title: 'Nikel API',
    tagline: 'Free API for the University of Toronto',
    url: 'https://nikei-api.github.io',
    baseUrl: '/',
    favicon: 'img/nikel-api-circle.ico',
    organizationName: 'nikel-api', // Usually your GitHub org/user name.
    projectName: 'nikel', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Nikel API',
            logo: {
                alt: 'Nikel API Logo',
                src: 'img/nikel-api-circle.ico',
            },
            links: [
                {
                    to: 'docs',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {to: 'blog', label: 'Blog', position: 'left'},
                {to: 'showcase', label: 'Showcase', position: 'left'},
                {
                    href: 'https://github.com/nikel-api',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://status.nikel.ml',
                    label: 'API Status',
                    position: 'right',
                },
                {
                    href: 'mailto:api@nikel.ml',
                    label: 'Contact',
                    position: 'right',
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
                            label: 'Official Documentation',
                            to: 'docs',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/nikel-api',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} nikel-api.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'welcome',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
