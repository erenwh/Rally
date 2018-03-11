// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
/*
module.exports = {

  'Report: Test Invalid Email Input' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/report')
    .waitForElementVisible('#report', 1000)
    .setValue('input[name=emailField]', 'aaa')
    .click('#submit')
    .pause(5000)
    .assert.containsText('#report', 'E-mail must be valid')
    .end();
  },

  'Report: Test Report' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/report')
    .waitForElementVisible('#report', 1000)
    .setValue('input[name=nameField]', 'Tester')
    .setValue('input[name=emailField]', 'test@test.com')
    .setValue('textarea[name=issueField]', 'Testing a report')
    .click('#submit')
    .pause(5000)
    .end();
  },

  'Report: Test email clear' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/report')
    .waitForElementVisible('#report', 1000)
    .setValue('input[name=nameField]', 'Tester')
    .setValue('input[name=emailField]', 'test@test.com')
    .setValue('textarea[name=issueField]', 'Testing a report')
    .click('#clear')
    .pause(5000)
    .assert.containsText('input[name=nameField]', '')
    .assert.containsText('input[name=emailField]', '')
    .assert.containsText('textarea[name=issueField]', '')
    .end();
  },
<<<<<<< HEAD
=======

  'Report: Testing No Inputs for Name, Email, Issue with value sets' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/report')
    .waitForElementVisible('#report', 1000)
    .setValue('input[name=nameField]', '')
    .setValue('input[name=emailField]', '')
    .setValue('textarea[name=issueField]', '')
    .click('#submit')
    .pause(5000)
    .assert.containsText('#report', 'Must have a name')
    .assert.containsText('#report', 'Must have email to send to')
    .assert.containsText('#report', 'Must have an issue')
    .end();
  },

  'Report: Testing No Inputs for Name, Email, Issue without value sets' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/report')
    .waitForElementVisible('#report', 1000)
    .click('#submit')
    .pause(5000)
    .assert.containsText('#report', 'Must have a name')
    .assert.containsText('#report', 'Must have email to send to')
    .assert.containsText('#report', 'Must have an issue')
    .end();
  },

}
*/
