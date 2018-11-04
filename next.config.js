const withLess = require('@zeit/next-less')
const withTypescript = require('@zeit/next-typescript')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withTypescript(withLess({
  // 打包目录
  distDir: 'dist',
  // generateEtags: false
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2
  },
  pageExtensions: ['jsx', 'js'],
  // 设置构建版本ID
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'my-build-id'
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  // 设置cdn前缀.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
  // webpack自定义配置，isServer: 区分客户端还是移动端
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    return config
  }
  // webpackDevMiddleware: config => {
  //   // Perform customizations to webpack dev middleware config
  //
  //   // Important: return the modified config
  //   return config
  // }
}))
