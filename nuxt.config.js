
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Tangent Cafe - Vancouver, BC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Informal hangout with craft beer, pub food, Malaysian fusion dishes & live music. View our menu, check out our taps and see our upcoming events.' },
      { hid: 'theme-color', name: 'theme-color', content: '#FFDD79' },
      { hid: 'application-name', name: 'application-name', content: 'Tangent Cafe' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#FFDD79' },
      { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: 'mstile-144x144.png' },
      { hid: 'msapplication-square310x310logo', name: 'msapplication-square310x310logo', content: 'mstile-310x310.png' },
      { hid: 'msapplication-square310x310logo', name: 'msapplication-wide310x150logo', content: 'mstile-310x150.png' },
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: 'apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: 'apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: 'apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: 'apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: 'apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: 'apple-touch-icon-152x152.png' },
      { rel: 'icon', type: 'image/png', href: 'favicon-196x196.png', sizes: '196x196' },
      { rel: 'icon', type: 'image/png', href: 'favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: 'favicon-16x16.png', sizes: '16x16' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/static/styles/normalize.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
