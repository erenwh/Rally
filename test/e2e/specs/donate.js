// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

  'Donate: Test Donation' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/')
    .pause(1000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=donate]')
    .pause(3000)
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
    .pause(1000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=donate]')
    .pause(3000)
    .waitForElementVisible('#donate', 1000)
    .setValue('input[name=amount]', 'aaa')
    .click('#paypal')
    .pause(6000)
    .assert.containsText('#info', 'Please enter numbers')
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
    .pause(1000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=donate]')
    .pause(3000)
    .waitForElementVisible('#donate', 1000)
    .setValue('input[name=amount]', '')
    .click('#paypal')
    .pause(5000)
    .assert.containsText('#info', 'Amount is required')
    .end();
  },

}
