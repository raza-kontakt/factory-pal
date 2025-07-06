import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    pageLoadTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Factory Pal Cypress Tests',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
    },
    async setupNodeEvents(on, config) {
      const { default: reporter } = await import('cypress-mochawesome-reporter/plugin.js');
      reporter(on);

      if (config.env.ENVIRONMENT === "production") {
        config.baseUrl =
          config.env.PROD_URL || "https://factory-pal-6c4b7.firebaseapp.com/";
      }

      return config;
    },
  },
});
