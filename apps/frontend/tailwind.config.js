// tailwind config is required for editor support

const sharedConfig = require('tailwind-config/tailwind.config.js');

/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [sharedConfig],
  plugins: [require('@tailwindcss/line-clamp')],
};
