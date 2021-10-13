module.exports = {
  pluginOptions: {
    configureWebpack: {
      node: {
        __dirname: true
      }
    },
    electronBuilder: {
      preload: 'src/preload.js',
      contextIsolation: false,
      enableRemoteModule: true,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true,
      nodeModulesPath: ['../../node_modules', './node_modules']
    }
  }
}