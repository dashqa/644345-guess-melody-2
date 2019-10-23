module.exports = {
  transform: {'\\.(js|jsx)?$': `babel-jest`},
  collectCoverageFrom: [`src/components/**/*.{js, jsx}`],
  moduleFileExtensions: [`js`, `jsx`, `json`, `node`],
  testPathIgnorePatterns: [`/node_modules/`, `/public/`],
  setupFilesAfterEnv: [`<rootDir>/src/setupTests.js`],
};
