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
    markdown: {
        toc: {
            includeLevel: [2],
        },
    },
    themeConfig: {
        algolia: process.env.NODE_ENV === 'production' ? {
            apiKey: '1b3d815d0346dc86a09ff4d85b752d93',
            indexName: 'maelstrom-cms',
        } : false,
        sidebarDepth: 1,
        logo: '/maelstrom-icon.svg',
        repo: 'maelstrom-cms/toolkit',
        repoLabel: 'GitHub',
        docsRepo: 'maelstrom-cms/documentation',
        displayAllHeaders: true,
        sidebar: [
            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    '/getting-started/',
                    '/getting-started/installing',
                    '/getting-started/my-first-panel',
                    '/components/sidebar',
                    '/getting-started/config',
                    '/getting-started/auth',
                ]
            },
            {
                title: 'Components',
                collapsable: false,
                children: [
                    '/components/panel',
                    '/components/controllers',
                    '/components/validation',
                    '/components/templates',
                    '/components/entry-table',
                    '/components/the-form',
                    '/components/columns',
                    '/components/fields',
                    '/components/buttons',
                    '/components/repeaters',
                    '/components/tabs',
                    '/components/media-manager',
                    '/components/flash-alert',
                    '/components/form-options',
                    '/components/edit-profile',
                    '/components/header',
                    '/components/sidebar',
                ]
            },
            {
                title: 'Advance',
                collapsable: false,
                children: [
                    '/advance/tailwind',
                    '/advance/filtering',
                    '/advance/searching',
                    '/advance/ordering',
                    '/advance/pagination',
                    '/advance/bulk-actions',
                    '/advance/trash',
                    '/advance/uploading',
                    '/advance/image-processing',
                    '/advance/entry-transformer',
                    '/advance/relationships',
                    '/advance/overwriting-components',
                    '/advance/extending-components',
                    '/advance/custom-panels',
                ]
            },
            {
                title: 'Examples',
                collapsable: false,
                children: [
                    '/examples/blog-post',
                ]
            }
        ]
    }
};
