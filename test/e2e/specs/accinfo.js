
// tsting for accinfo page
/*
module.exports = {
  'accinfo : Test for edit information button works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .pause(1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    //.assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    // .setValue('input[name=emailField]', 'john@john.com')
    .click('button[id=editBTN]')
    .pause(3000)
    .assert.containsText('input[name=input-7-1-username]', '')
    .assert.containsText('input[name=input-7-1-dob]', '')
    .end();
  },

  'accinfo : Test if DOB is unacceptable' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    // .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    .click('button[id=editBTN]')
    .pause(3000)
    .setValue('input[name=input-7-1-dob]', '02/20/12')
    .pause(3000)
    .assert.urlEquals('http://localhost:8080/accInfo')
    // .assert.containsText('#accInfo', 'Format must be MM/DD/YY')
    // client.expect.element('#saveBTN').to.not.enabled;
    // client
    .pause(3000)
    .end();
  },

  'accinfo : Test if save button works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    // .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    // .setValue('input[name=emailField]', 'john@john.com')
    .click('button[id=editBTN]')
    .pause(3000)
    .setValue('input[name=input-7-1-username]', 'ericistesting')
    .setValue('input[name=input-7-1-dob]', '03/05/18')
    .click('button[id=saveBTN]')
    .assert.urlEquals('http://localhost:8080/accInfo')
    // .assert.containsText('#accInfo', 'Format must be MM/DD/YY')
    // client.expect.element('#saveBTN').to.not.be.enabled;
    client
    .pause(3000)
    .end();
  },

// cancel()
  'accinfo : Test if cancel button works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    // .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    // .setValue('input[name=emailField]', 'aaa')
    .click('button[id=editBTN]')
    .pause(3000)
    .click('button[id=cancelBTN]')
    .end();
  },

  // deleteacc()
  'accinfo : Test if delete button works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    // .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    // .setValue('input[name=emailField]', 'aaa')
    .click('button[id=editBTN]')
    .pause(3000)
    .click('button[id=deleteBTN]')
    .end();
  },

  //onPickFile()
  'accinfo : Test if upload button works' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#signin', 1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    // .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    // .setValue('input[name=emailField]', 'aaa')
    .click('button[id=editBTN]')
    .pause(3000)
    .click('button[id=unloadBTN]')
    .end();
  },

  // onFilePicked()
  // 'accinfo : Test for cancel' :client => {
  //   client
  //   .url('http://localhost:8080/accInfo')
  //   .waitForElementVisible('#accInfo', 1000)
  //   .setValue('input[name=emailField]', 'aaa')
  //   .pause(5000)
  //   .click('#submit')
  //   .assert.containsText('#invite', 'E-mail must be valid')
  //   .end();
  // },



  //// do we need this? cuz users are already logined in
  // 'accinfo : Test for for account creation': client => {
  //   client
  //     .url('http://localhost:8080/signin')
  //     .waitForElementVisible('#accInfo', 1000)
  //     .setValue('input[name=email]', 'test@test.com')
  //     .setValue('input[name=pass]', '12345678')
  //     .click('button[id=loginBTN]')
  //     .pause(5000)
  //     .assert.urlEquals('http://localhost:8080/')
  //     .url('http://localhost:8080/accInfo')
  //     .waitForElementVisible('#createPage', 3000)
  //     .setValue('input[id="title"]', 'HanTest')
  //     //.setValue('input[id="description"]', 'HanTestDescrip')
  //     .setValue('input[id="location"]', "HanTestLocation")
  //     .click('button[id="sub"]')
  //     .pause(5000)
  //     .assert.urlEquals('http://localhost:8080/orgmeets')
  //     .assert.containsText('#orgMeets', 'HanTest')
  //     .end();
  // }

  /// / no need to test cuz email is already written by default
  // 'accinfo : Test if Email is empty' :client => {
  //   client
  //   .url('http://localhost:8080/accInfo')
  //   .waitForElementVisible('#accInfo', 1000)
  //   // .setValue('input[name=pass]', '12345678')
  //   .click('button[id=editBTN]')
  //   .pause(3000)
  //   .click('button[id=saveBTN]')
  //   .assert.urlEquals('http://localhost:8080/accInfo')
  //   .assert.containsText('#signin', 'E-mail is required');
  //   client.expect.element('#saveBTN').to.not.be.enabled;
  //
  //   client
  //   .pause(3000)
  //   .end();
  // },

  /// / no need to test cuz email is already written by default
  // 'Test if Email is unacceptable' :client => {
  //   client
  //   .url('http://localhost:8080/accInfo')
  //   .waitForElementVisible('#accInfo', 1000)
  //   .click('button[id=editBTN]')
  //   .pause(3000)
  //   .click('button[id=saveBTN]')
  //   .setValue('input[id=email]', 'ericTest')
  //   .assert.urlEquals('http://localhost:8080/accInfo')
  //   .assert.containsText('#accInfo', 'E-mail must be valid');
  //   client.expect.element('#saveBTN').to.not.be.enabled;
  //
  //   client
  //   .pause(3000)
  //   .end();
  // },

}
*/
