exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriverIO: {
      url: 'http://app:3000',
      host: 'firefox-container',
      browser: 'firefox',
      smartWait: 5000,
      restart: false,
      waitForTimeout: 10000,
      timeouts: {
        script: 60000,
        'page load': 60000,
      },
      coloredLogs: true,
      desiredCapabilities: {
        acceptInsecureCerts: true,
      },
    },
  },
  bootstrap: false,
  mocha: {},
  name: 'codeceptjs-docker',
};
