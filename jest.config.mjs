export default {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.test.{js,jsx,ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
