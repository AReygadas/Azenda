module.exports = {
    content: [
      './src/**/*.{vue,html,js}', // Especifica los archivos que Tailwind CSS debe analizar
      './node_modules/vuetify/src/**/*.{vue,css,js}', // Incluye archivos de Vuetify
      './node_modules/flowbite/**/*.js',
    ],
    theme: {
      extend: {}, // Opcional: Aquí puedes extender la configuración de Tailwind CSS
    },
    plugins: [
      require('flowbite/plugin')
    ], // Opcional: Aquí puedes agregar plugins de Tailwind CSS
  }
  