const { By, Key, Builder, Condition } = require("selenium-webdriver");
require("chromedriver");

async function test_case() {
  // creating new webdriver
  let driver = await new Builder().forBrowser("chrome").build();
  // driver reading amazon prime
  await driver.get(
    "https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root"
  );
  // clicking on Elemenet
  await driver
    .findElement(By.className("DVPAWebWidgetsUI_Button__button"))
    .click();
  // consoling to get title
  console.log(await driver.getTitle());
  // comparing title to Condition
  if ((await driver.getTitle()) == "Amazon Sign-In") {
    console.log("test success");
  } else {
    console.log("test failed");
  }
  // passing value in element
  await driver
    .findElement(By.name("email"))
    .sendKeys("kartikyadav", Key.RETURN);
  // checking what is being Displayed
  if (driver.findElement(By.className("a-alert-heading")).isDisplayed()) {
    console.log("success");
  }
  // after 10seconds driver will shutdown or quit
  setInterval(() => {
    driver.quit();
  }, 10000);
}
// calling function
test_case();
