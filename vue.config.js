const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  devServer: {
    proxy: {
      '/user' : {
        target : 'http://127.0.0.1:3000/user',
        ws : true,
        changeOrigin : true,
        pathRewrite : {
          '^/user' : ''
        },
      },
    },
  },
};