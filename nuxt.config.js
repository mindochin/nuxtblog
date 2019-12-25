const colors = require('vuetify/es5/util/colors').default
const os = require('os')
const hostname = os.hostname()

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | ' + hostname,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'orange' },
  /*
  ** Global CSS
  */
  css: [
    'assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // "~/plugins/tiptap",
    '~/plugins/tinymce.client.js',
    '~/plugins/axios',
    { src: '~/plugins/date.filter', ssr: false }
    // { src: '~/plugins/tinymce', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  toast: {
    position: 'top-center',
    containerClass: 'v-application',
    duration: 5000
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // disable: true,
      // dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.brown.lighten4,
          secondary: colors.brown.lighten5,
          accent: colors.deepOrange.base,
          error: colors.orange.base,
          warning: colors.red.base,
          info: colors.amber.base,
          success: colors.green.base
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['@tinymce/tinymce-vue', 'tinymce/tinymce'], // ,'vuetify/lib', "tiptap-vuetify"],
    extend (config, ctx) {
    }
  }
}
