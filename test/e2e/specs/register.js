// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

  'Test if username is empty' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=dob]', '02/12/12')
    .setValue('input[name=email]', 'john@john.com')
    .setValue('input[name=pass]', '12345678')
    .setValue('input[name=compass]', '12345678')
    .click('button[id=submitBTN]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/register')
    .assert.containsText('#register', 'Username is required');
    client.expect.element('#submitBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if username is unacceptable' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=userName]', 'johnjohnjohn')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/register')
    .assert.containsText('#register', 'Username must be 10 characters or less');

    client.expect.element('#submitBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if DOB is empty' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=userName]', 'john')
    .setValue('input[name=email]', 'john@john.com')
    .setValue('input[name=pass]', '12345678')
    .setValue('input[name=compass]', '12345678')
    .click('button[id=submitBTN]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/register')
    .assert.containsText('#register', 'Date of Birth is required');
    client.expect.element('#submitBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if DOB is unacceptable' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=dob]', '02/2/12')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/register')
    .assert.containsText('#register', 'Format must be XX/XX/XX');
    client.expect.element('#submitBTN').to.not.be.enabled;
    client
    .pause(3000)
    .end();
  },

  'Test if Email is empty' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=userName]', 'john')
    .setValue('input[name=dob]', '02/12/12')
    .setValue('input[name=pass]', '12345678')
    .setValue('input[name=compass]', '12345678')
    .click('button[id=submitBTN]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/register')
    .assert.containsText('#register', 'E-mail is required');
    client.expect.element('#submitBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if Email is unacceptable' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=email]', 'john')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/register')
    .assert.containsText('#register', 'E-mail must be valid');

    client.expect.element('#submitBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if Password is empty' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=userName]', 'john')
    .setValue('input[name=dob]', '02/12/12')
    .setValue('input[name=email]', 'john@john.com')
    .click('button[id=submitBTN]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/register')
    .assert.containsText('#register', 'Password is required');
    client.expect.element('#submitBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if Password and Confirm Pass dont match' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=userName]', 'john')
    .setValue('input[name=dob]', '02/12/12')
    .setValue('input[name=email]', 'john@john.com')
    .setValue('input[name=pass]', '12345678')
    .setValue('input[name=compass]', '123456789')
    .click('button[id=submitBTN]')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/register')
    .assert.containsText('#register', 'Passwords do not match');
    client.expect.element('#submitBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

  'Test if Password is unacceptable' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .setValue('input[name=pass]', '1234567')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/register')
    .assert.containsText('#register', 'Password must be 8 characters or more');

    client.expect.element('#submitBTN').to.not.be.enabled;

    client
    .pause(3000)
    .end();
  },

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
    .pause(3000)
    .end();
  },

  'Test if FB works' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .click('button[name=facebook]')
    .pause(5000)
    .end();
  },

  'Test if Google works' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .click('button[name=google]')
    .pause(5000)
    .end();
  },

  'Test if Twitter works' :client => {
    client
    .url('http://localhost:8080/register')
    .waitForElementVisible('#register', 1000)
    .click('button[name=twitter]')
    .pause(5000)
    .end();
  }

}
