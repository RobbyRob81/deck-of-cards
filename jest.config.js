module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "src/**/**/*.{js,vue}",
    "src/**/*.stories.storyshot",
    "src/**/**/*.stories.storyshot"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleFileExtensions: ["js", "vue", "json"],
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  transform: {
    // should be above any other js transform like babel-jest
    "^.+\\.stories\\.js$": "@storybook/addon-storyshots/injectFileName"
  },
  testMatch: [
    "<rootDir>/src/components/**/?(*.)(itest).{js,jsx,mjs}",
    "<rootDir>/src/**/?(*.)(itest).{js,jsx,mjs}",
    "<rootDir>/Tests/**/*.js?(x)",
    "**/?(*.)(spec|test).js?(x)",
    "<rootDir>/Tests/**/*.vue"
  ],
  verbose: true
};
