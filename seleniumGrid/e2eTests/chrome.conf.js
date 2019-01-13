exports.config = {
  tests: './*_test.js',
  output: './output/chrome',
  helpers: {
    WebDriver: {
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
          // https://peter.sh/experiments/chromium-command-line-switches/
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu', // Temporarily needed if running headless on Windows
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
