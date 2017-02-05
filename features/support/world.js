require('chromedriver');

let {defineSupportCode} = require('cucumber'),
    seleniumWebdriver = require('selenium-webdriver'),
    until = seleniumWebdriver.until,
    By = seleniumWebdriver.By;

function SuperheroesWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();

    this.getSIDLocator = (sidValue) => {
        return By.css(`[data-sid=${sidValue}]`);
    }
}

defineSupportCode(function({setWorldConstructor, setDefaultTimeout}) {
    setWorldConstructor(SuperheroesWorld);
    setDefaultTimeout(10 * 1000);
});