const pkg = require('./package')
const marked = require('marked')

const renderer = new marked.Renderer()
renderer.link = (href, title, text) =>
  '<a target="_blank" rel="nofollow"' +
  (href ? ` href="${href}"` : '') +
  (title ? ` title="${title}"` : '') +
  `>${text || ''}</a>`



export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - Hongxu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  transition: {
    name: 'page',
    mode: 'out-in',
  },

  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: false,
        lazy: true,
        langDir: 'locales/',
        locales: [
          {
            code: 'zh',
            iso: 'zh-CN',
            file: 'zh-CN.js',
          },
          {
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
          },
        ],
      },
    ],
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(md|markdown)$/i,
        exclude: /node_modules/,
        use: [
          { loader: 'html-loader' },
          { loader: 'markdown-loader', options: { renderer } },
        ],
      })
    },
  },
}
