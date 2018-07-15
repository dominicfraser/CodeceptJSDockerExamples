exports.config = {
  tests: './*_test.js',
  output: './output/chrome',
  helpers: {
    WebDriverIO: {
      url: 'http://app:3000',
      host: 'hub',
      browser: 'chrome',
      smartWait: 5000,
      restart: false,
      waitForTimeout: 10000,
      timeouts: {
        script: 60000,
        'page load': 60000,
      },
      coloredLogs: true,
      desiredCapabilities: {
        chromeOptions: {
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--allow-insecure-localhost',
          ],
        },
      },
    },
  },
  bootstrap: false,
  mocha: {},
  name: 'codeceptjs-docker',
};
