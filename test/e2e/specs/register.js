// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

  'Test if register works' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=userName]', 'john')
    .setValue('input[name=dob]', '02/12/12')
    .setValue('input[name=email]', 'john@john.com')
    .setValue('input[name=pass]', '12345678')
    .setValue('input[name=compass]', '12345678')
    .click('button[id=submitBTN]')
    .pause(5000)
    .end();
  },

  'Test if username is unacceptable' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=userName]', 'johnjohnjohn')
    .setValue('input[name=dob]', '02/12/12')
    .setValue('input[name=email]', 'john@john.com')
    .setValue('input[name=pass]', '12345678')
    .setValue('input[name=compass]', '12345678')
    .click('button[id=submitBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/register')
    .assert.containsText('#register', 'Username must be 10 characters or less')
    .pause(5000)
    .end();
  }
}
