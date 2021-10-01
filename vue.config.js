module.exports = {
  pluginOptions: {
    configureWebpack: {
      node: {
        __dirname: true
      }
    },
    electronBuilder: {
      preload: 'src/preload.js',
      enableRemoteModule: true,
      nodeModulesPath: ['../../node_modules', './node_modules']
    }
  }
}