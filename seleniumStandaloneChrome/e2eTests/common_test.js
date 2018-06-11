Feature('Basic test');

Scenario('navigate to homepage', I => {
  I.amOnPage('http://app-express:3000');
  I.saveScreenshot('frontpageScreenshot.png');
  I.see('Hello');
});
