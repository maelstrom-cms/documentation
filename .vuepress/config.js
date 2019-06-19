const purgecss = require('@fullhuman/postcss-purgecss')
const glob = require('glob-all')
const path = require('path')

module.exports = {
    title: 'Maelstrom',
    description: 'Maelstrom CMS Toolkit for Laravel and React',
    plugins: ['@vuepress/active-header-links'],
    postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
            process.env.NODE_ENV === 'production' && purgecss({
                content: glob.sync([
                    path.join(__dirname, './components/**/*.{vue,js,php,html}'),
                    path.join(__dirname, '../node_modules/@vuepress/theme-default/**/*.{vue,js,php,html}'),
                ]),
                defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
                whitelistPatterns: [/language/, /token/, /pre/, /code/],
                whitelistPatternsChildren: [/language/, /token/, /pre/, /code/],
            })
        ].filter(i => i)
    },
    themeConfig: {
        sidebarDepth: 1,
        logo: '/maelstrom-icon.svg',
        repo: 'maelstrom-cms/toolkit',
        repoLabel: 'GitHub',
        docsRepo: 'maelstrom-cms/documentation',
        displayAllHeaders: true,
        sidebar: [
            '/getting-started/',
            '/getting-started/installing',
            {
                title: 'Usage',
                collapsable: false,
                children: [
                    '/usage/my-first-panel',
                    '/usage/edit-profile',
                    '/usage/header',
                    '/usage/media-manager',
                    '/usage/sidebar',
                ]
            },
            {
                title: 'Examples',
                collapsable: false,
                children: [
                    ['/examples/blog-post', 'Blog Post']
                ]
            }
        ]
    }
};
