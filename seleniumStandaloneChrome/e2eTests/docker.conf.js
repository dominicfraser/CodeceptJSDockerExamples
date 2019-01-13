exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://app-express:3000',
      host: 'chrome-container',
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
          // https://peter.sh/experiments/chromium-command-line-switches/
          args: [
            '--headless',
            '--disable-gpu', // Temporarily needed if running headless on Windows
            // '--no-sandbox',
            // '--disable-setuid-sandbox',
          ],
        },
      },
    },
  },
  bootstrap: false,
  mocha: {},
  name: 'codeceptjs-docker',
};
