// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

  'Invite: Test Invitation' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=invite]')
    .pause(3000)
    .waitForElementVisible('#invite', 1000)
    .setValue('input[name=emailField]', 'john@john.com')
    .click('#submit')
    .pause(5000)
    .end();
  },

  'Invite: Test Email Clear' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=invite]')
    .pause(3000)
    .waitForElementVisible('#invite', 1000)
    .setValue('input[name=emailField]', 'john@john.com')
    .click('#clear')
    .pause(5000)
    .assert.containsText('input[name=emailField]', '')
    .end();
  },

  'Invite: Test Invalid Email Input' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=invite]')
    .pause(3000)
    .waitForElementVisible('#invite', 1000)
    .setValue('input[name=emailField]', 'aaa')
    .click('#submit')
    .pause(5000)
    .assert.containsText('#card', 'E-mail must be valid')
    .end();
  },

  'Invite: Test No Email Input with setting input fields' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=invite]')
    .pause(3000)
    .waitForElementVisible('#invite', 1000)
    .setValue('input[name=emailField]', '')
    .click('#submit')
    .pause(5000)
    .assert.containsText('#card', 'Must have email to send to')
    .end();
  },

  'Invite: Test No Email Input without setting input fields' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=invite]')
    .pause(3000)
    .waitForElementVisible('#invite', 1000)
    .click('#submit')
    .pause(5000)
    .assert.containsText('#card', 'Must have email to send to')
    .end();
  },

}
