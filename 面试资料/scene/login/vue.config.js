module.exports = {
    publicPath: './',
    chainWebpack: config => {

        config.set('externals', {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          axios: 'axios',
          nprogress: 'NProgress',
          'element-ui': 'ELEMENT'
        })
        
      }
  }