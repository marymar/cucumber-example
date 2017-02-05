require('chromedriver');

let {defineSupportCode} = require('cucumber'),
    seleniumWebdriver = require('selenium-webdriver'),
    until = seleniumWebdriver.until,
    By = seleniumWebdriver.By;

function SuperheroesWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();

    this.waitForElement = (locator) => {
        let condition = until.elementLocated(locator);
        return this.driver.wait(condition);
    };

    this.getSIDLocator = (sidValue) => {
        return By.css(`[data-sid=${sidValue}]`);
    }
}

defineSupportCode(function({setWorldConstructor, setDefaultTimeout}) {
    setWorldConstructor(SuperheroesWorld);
    setDefaultTimeout(10 * 1000);
});






/***


 http://www.richardruiter.nl/you-dont-need-to-callback-cucumber-js-but-it-will-call-you-i-promise/


 ***/