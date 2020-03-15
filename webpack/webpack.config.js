const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const getAddons = (addons = []) => {
  const addonNames = Array.isArray(addons)
    ? addons
    : [addons]

  return addonNames.map(name => require(`./addons/${name}.js`))
}

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}`)
  return webpackMerge(commonConfig, envConfig, ...getAddons(addon))
}
