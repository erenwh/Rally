
// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

/*module.exports = {

  'Test if login works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#time', 1000)
    // .setValue('input[name=userName]', 'john')
    // .setValue('input[name=dob]', '02/12/12')
    .setValue('input[name=email]', 'john@john.com')
    .setValue('input[name=pass]', '12345678')
    // .setValue('input[name=compass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(4000)
    .end();
  },

  'Test if username and password is unacceptable' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#time', 1000)
    // .setValue('input[name=userName]', 'johnjohnjohn')
    // .setValue('input[name=dob]', '02/12/12')
    .setValue('input[name=email]', 'john@john.com')
    .setValue('input[name=pass]', '12345')
    // .setValue('input[name=compass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/signin')
    // .assert.containsText('#time', 'E-mail must be valid')
    .assert.containsText('#time', 'Password must be 8 characters or more')
    .pause(4000)
    .end();
  }
}*/
