module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'for education nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'blue' },
  /*
  ** Build configuration
  */
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  axios: {
    baseURL: 'http://localhost:8000'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login/', method: 'post', propertyName: 'key' },
          logout: { url: '/auth/logout/', method: 'post' },
          user: { url: '/auth/user/', propertyName: false },
        },
        tokenType: 'Token',
        tokenName: 'Authorization'
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    }
  },

  router: {
    middleware: ['auth']
  },

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

