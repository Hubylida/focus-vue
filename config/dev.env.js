'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://api-dev"',
  APP_ORIGIN: '"https://easy-mock.com/mock/5a8c5215ceff962779055b3f/focus"'
})
