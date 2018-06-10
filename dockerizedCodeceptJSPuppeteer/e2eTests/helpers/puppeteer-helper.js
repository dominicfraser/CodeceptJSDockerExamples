// eslint-disable-next-line no-undef
class MyPuppeteer extends Helper {
  async amOnPage(url) {
    const { page } = this.helpers.Puppeteer;
    await page.goto(url, { timeout: 170000 });
  }
}

module.exports = MyPuppeteer;
