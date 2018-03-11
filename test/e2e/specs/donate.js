// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

  /*'Donate: Test Donation' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/donate')
    .waitForElementVisible('#donate', 1000)
    .setValue('input[name=amount]', '123')
    .click('#paypal')
    .pause(5000)
    .end();
  },

  'Donate: Test Invalid Donation Input' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/donate')
    .waitForElementVisible('#donate', 1000)
    .setValue('input[name=amount]', 'aaa')
    .click('#paypal')
    .pause(5000)
    .assert.containsText('#donate', 'Please enter numbers')
    .end();
  },

  'Donate: Test No Donation Input' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/donate')
    .waitForElementVisible('#donate', 1000)
    .setValue('input[name=amount]', '')
    .click('#paypal')
    .pause(5000)
    .assert.containsText('#donate', 'Amount is required')
    .end();
  },*/

}
