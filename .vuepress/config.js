const purgecss = require('@fullhuman/postcss-purgecss')
const glob = require('glob-all')
const path = require('path')

module.exports = {
    title: 'Maelstrom CMS Toolkit',
    description: 'A CMS toolkit for intermediate to advanced development teams who love React, Tailwind & Laravel.',
    plugins: [
        '@vuepress/active-header-links',
        ['seo', {
            image: ($page, $site) => ($site.themeConfig.domain || '') + '/opengraph.jpg',
        }],
    ],
    postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
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
        domain: 'https://www.maelstrom-cms.com',
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
                    '/components/input-fields',
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
                    '/examples/dashboard',
                    '/examples/blog',
                ]
            }
        ]
    }
};
