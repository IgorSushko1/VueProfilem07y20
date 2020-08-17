import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

// const list = ['aboutFilm/1', 'aboutFilm/1', 'aboutFilm/1']
const list = async () => {
  const res = await axios.get('http://localhost:3000/api/films')
  console.log(res.data)
  return res.data.map((el) => `aboutFilm/${el._id}`)
}
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
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  generate: { routes: list },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  // plugins: ['~/plugins/api-context.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxt/http',
  ],

  http: {
    // proxyHeaders: false
  },

  // serverMiddleware: [
  //   {
  //     path: '/api',
  //     handler: require('body-parser').json(),
  //   },
  //   {
  //     path: '/api',
  //     handler: (req, res, next) => {
  //       req.query = new URL(req.url)
  //       req.params = {
  //         ...req.query,
  //         ...req.body,
  //       }
  //       next()
  //     },
  //   },
  //   {
  //     path: '/api',
  //     handler: '~/serverMiddleware/api-server.js',
  //   },
  // ],
  serverMiddleware: { '/api': '~/api' },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      // themes: {
      //   dark: {
      //     primary: colors.blue.darken2,
      //     accent: colors.grey.darken3,
      //     secondary: colors.amber.darken3,
      //     info: colors.teal.lighten1,
      //     warning: colors.amber.base,
      //     error: colors.deepOrange.accent4,
      //     success: colors.green.accent3,
      //   },
      // },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
