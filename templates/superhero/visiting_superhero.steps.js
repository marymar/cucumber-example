let {defineSupportCode} = require('cucumber'),
    assert = require('assert');

defineSupportCode(function({Given, When, Then}) {

    Given('I am on the superheroes guide', function() {
        return this.driver.get('http://127.0.0.1:8000/index.html');
    });

    When('I click on {stringInDoubleQuotes} link', function (text) {
        return this.waitForElement({linkText: text})
            .then((element) => {
                return element.click();
            });
    });

    Then('I should see the heroes name {name:stringInDoubleQuotes}', function (name) {
        let locator = this.getSIDLocator('hero');

        return this.waitForElement(locator)
            .then(elem => {
                elem.getText()
                    .then( text => {assert.equal(text, name)});
            });
    });

    Then('I should see the statement {desc:stringInDoubleQuotes}', function (desc) {
        let locator = this.getSIDLocator('statement');

        return this.waitForElement(locator)
            .then(elem => {
                elem.getText().then(text => assert.equal(text, desc));
        });
    });
});