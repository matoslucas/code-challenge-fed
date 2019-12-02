const withCSS = require("@zeit/next-css")

const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const { resolve } = require("path")

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
}

const SetWithCSS = withLess(withCSS({
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config) {
    config.resolve.alias.components = resolve(__dirname, "./src/components")
    return config
  },
}))

module.exports = withPlugins([SetWithCSS, withFonts, withImages]);