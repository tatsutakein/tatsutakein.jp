const sharedConfig = require('@tatsutakeinjp/tailwind-config/tailwind.config.js');

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: 'core-ui-',
  presets: [sharedConfig],
};
