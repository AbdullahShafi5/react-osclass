if (process.env.NODE_ENV !== 'development' || process.env.PLATFORM_ENV !== 'web') {
  module.exports = require('./ConfigureStore.prod');
} else {
  module.exports = require('./ConfigureStore.dev');
}
