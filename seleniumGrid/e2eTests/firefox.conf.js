exports.config = {
  tests: './*_test.js',
  output: './output/firefox',
  helpers: {
    WebDriver: {
      url: 'http://app:3000',
      host: 'hub',
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
