exports.config = {
  tests: './*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    Puppeteer: {
      url: 'http://localhost:5000',
      chrome: {
        // https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
        // https://peter.sh/experiments/chromium-command-line-switches/
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      waitForAction: 500,
      waitForTimeout: 60000,
      show: false,
    },
    PuppeteerHelper: {
      require: './helpers/puppeteer-helper.js',
    },
  },
};
