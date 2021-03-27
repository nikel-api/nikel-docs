module.exports = {
    title: 'Nikel API',
    tagline: 'Free API for the University of Toronto',
    url: 'https://nikei-api.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
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
            items: [
                {
                    to: 'docs',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {to: 'blog', label: 'Blog', position: 'left'},
                {to: 'showcase', label: 'Showcase', position: 'left'},
                {to: 'contact', label: 'Contact', position: 'left'},
                {
                    href: 'https://github.com/nikel-api',
                    className: 'header-github-link',
                    'aria-label': 'GitHub Repository',
                    position: 'right',
                },
                {
                    href: 'https://status.nikel.ml',
                    className: 'header-status',
                    'aria-label': 'API Status',
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
            copyright: `© ${new Date().getFullYear()} nikel-api`,
        },
        prism: {
            additionalLanguages: ["ruby"]
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: [require.resolve('./src/css/custom.css')],
                },
            },
        ],
    ],
};
