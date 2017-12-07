module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'homepage',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Web developer in Los Angeles',
      },
      {name: 'theme-color', content: '#ffffff'},
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans:400,400i,700',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'},
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /**
   * Register external modules.
   */
  modules: [
    'nuxtent',
  ],
  /**
   * Settings for the static content loader, nuxtent.
   * https://nuxtent.now.sh/guide
   */
  nuxtent: {
    content: {
      page: '/_slug',
      permalink: ':slug',
      isPost: false,
      generate: [
        'get',
        'getAll',
      ],
    },
  },
};
