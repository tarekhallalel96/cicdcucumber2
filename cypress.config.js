const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; 

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/features/**/*.feature", // a ajouter
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber()); // ajouter
    },
  },
});