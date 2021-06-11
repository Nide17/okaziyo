const { Builder, By } = require('selenium-webdriver');

const edge = require('selenium-webdriver/edge');
// const chrome = require('selenium-webdriver/chrome');
let service = new edge.ServiceBuilder("C:/WebDriver/bin/msedgedriver.exe");

// chrome.setDefaultService(new chrome.ServiceBuilder('path/to/chromedriver').build());
  

(async function test() {
    let driver = await new Builder()
        .setEdgeService(service)
        .forBrowser('MicrosoftEdge')
        .build();

        // (async function myFunction() {
        //     let driver = await new Builder().forBrowser('chrome').build();
            //your code inside this block

    //  open your website.
    await driver.get('https://www.google.com');
    // read the current URL
    await driver.getCurrentUrl();




    //your code inside this block

    // const cheese = driver.findElement(By.id('cheese'));

    // const cheddar = cheese.findElement(By.id('cheddar'));

    // Find all buttons
    const buttons = driver.findElement(By.css('.nav-buttons button'));

})();



