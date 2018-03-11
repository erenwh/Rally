// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
/*
module.exports = {

  'Report: Test Invalid Email Input' :client => {
    client
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
    .url('http://localhost:8080/report')
    .waitForElementVisible('#report', 1000)
    .setValue('input[name=nameField]', 'John')
    .setValue('input[name=emailField]', 'john@john.com')
    .setValue('textarea[name=issueField]', 'Testing a report')
    .click('#submit')
    .pause(5000)
    .end();
  },

  'Report: Test email clear' :client => {
    client
    .url('http://localhost:8080/report')
    .waitForElementVisible('#report', 1000)
    .setValue('input[name=nameField]', 'John')
    .setValue('input[name=emailField]', 'john@john.com')
    .setValue('textarea[name=issueField]', 'Testing a report')
    .click('#clear')
    .pause(5000)
    .assert.containsText('input[name=nameField]', '')
    .assert.containsText('input[name=emailField]', '')
    .assert.containsText('textarea[name=issueField]', '')
    .end();
  },
}
*/
