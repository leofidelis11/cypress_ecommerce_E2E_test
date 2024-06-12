const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1440,
  viewportHeight: 900,

  reporter: 'mochawesome',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
