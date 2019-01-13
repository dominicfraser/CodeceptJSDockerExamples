exports.config = {
  tests: './*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    WebDriver: {
      url: 'http://express-app:5000',
      host: process.env.HOST, // alternatively you could not use an env varialble and simply
      browser: 'firefox', // use the name of the containter directly, 'selenium-firefox-container'
      smartWait: 5000,
      waitForTimeout: 60000,
      desiredCapabilities: {
        'moz:firefoxOptions': {
          // https://developer.mozilla.org/en-US/docs/Web/WebDriver/Capabilities/firefoxOptions
          args: ['-headless'],
          prefs: {
            'browser.display.use_focus_colors ': true,
          },
        },
      },
    },
  },
};
