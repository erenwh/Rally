// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
// Header.vue Testing
/*
module.exports = {

  'Test if Email is empty' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/signin')
    .assert.containsText('#signin', 'E-mail is required');
    client.expect.element('#loginBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if Email is unacceptable' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'john')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/signin')
    .assert.containsText('#signin', 'E-mail must be valid');

    client.expect.element('#loginBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if Password is empty' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'john@john.com')
    .click('button[id=loginBTN]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/signin')
    .assert.containsText('#signin', 'Password is required');
    client.expect.element('#loginBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if Password is unacceptable' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[name=pass]', '1234567')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/signin')
    .assert.containsText('#signin', 'Password must be 8 characters or more');

    client.expect.element('#loginBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if signin works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'john@john.com')
    .setValue('input[name=pass]', '12345678')
    .pause(1000)
    .click('button[id=loginBTN]')
    .pause(3000)
    .end();
  },

  'Test if signin has wrong inputs' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'john@john.com')
    .setValue('input[name=pass]', '123456789')
    .pause(1000)
    .click('button[id=loginBTN]')
    .pause(1000)
    .assert.urlEquals('http://localhost:8080/signin')
    .assert.containsText('#alert', 'Invalid Email/Password')
    .pause(3000)
    .end();
  },

  'Test if FB works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .click('button[name=facebook]')
    .pause(5000)
    .end();
  },

  'Test if Google works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .click('button[name=google]')
    .pause(5000)
    .end();
  },

  'Test if Twitter works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .click('button[name=twitter]')
    .pause(5000)
    .end();
  },

  'Test if Forgot Pass button works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .click('button[id=fgpass]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/signin')
    .waitForElementVisible('#dia', 1000)
    .pause(3000)
    .end();
  },

  'Test if Email is empty in Forgot Pass' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .click('button[id=fgpass]')
    .pause(3000)
    .click('button[id=fg]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/signin')
    client.expect.element('#fg').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if Email is correct in Forgot Pass' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .click('button[id=fgpass]')
    .setValue('input[id=emailf]', 'j@j.com')
    .pause(2000)
    .click('button[id=fg]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/signin')
    .assert.containsText('#alertsuccess', 'Email Sent :)')
    .pause(3000)
    .end();
  },

  'Test if cancel btn works in Forgot Pass' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .click('button[id=fgpass]')
    .pause(2000)
    .click('button[id=can]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/signin')
    .assert.containsText('#signin', 'Sign in')
    .pause(3000)
    .end();
  }

}
  */
