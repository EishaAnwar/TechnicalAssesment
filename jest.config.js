module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
        '^intersection-observer$': '<rootDir>/__mocks__/intersectionObserver',
        "\\.module\\.scss$": "<rootDir>/__mocks__/styleMock.js"    
      },
    // other Jest configuration options
  };