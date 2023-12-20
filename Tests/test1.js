const { By, key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_case() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.google.com");
  await driver
    .findElement(By.className("RNNXgb"))
    .sendKeys("Hello World!", Key.RETURN);

  setInterval(() => {
    driver.quit();
  }, 10000);
}
test_case();
