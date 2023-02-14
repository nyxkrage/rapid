const { rapidStylesPath, rapidTailwindTheme, rapidPlugin } = require("@rapid-web/ui");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@rapid-web/ui/src/components/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      ...rapidTailwindTheme
    },
  },
  plugins: [rapidPlugin(
    {
      global: {
        'body': {

        }
      }
    }
  )],
}
