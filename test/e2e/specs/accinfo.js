
// testing for accinfo page
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
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=acc]')
    .pause(3000)
    //.assert.urlEquals('http://localhost:8080/')
    //.url('http://localhost:8080/accInfo')
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
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=acc]')
    .pause(3000)
    // .assert.urlEquals('http://localhost:8080/')
    //url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    .click('button[id=editBTN]')
    .pause(3000)
    .click('input[id=accDob]')
    .clearValue('input[id=accDob]')
    .pause(3000)
    .setValue('input[name=input-7-1-dob]', '002/20/12')
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
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=acc]')
    .pause(3000)
    // .assert.urlEquals('http://localhost:8080/')
    //.url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    // .setValue('input[name=emailField]', 'john@john.com')
    .click('button[id=editBTN]')
    .pause(3000)
    .click('input[name=input-7-1-username]')
    .clearValue('input[name=input-7-1-username]')
    .setValue('input[name=input-7-1-username]', 'ericistesting')
    .click('input[id=accDob]')
    .clearValue('input[id=accDob]')
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
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=acc]')
    .pause(3000)
    // .assert.urlEquals('http://localhost:8080/')
    //.url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    // .setValue('input[name=emailField]', 'aaa')
    .click('button[id=editBTN]')
    .pause(3000)
    .click('button[id=cancelBTN]')
    .pause(3000)
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
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=acc]')
    .pause(3000)
    // .assert.urlEquals('http://localhost:8080/')
    //.url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    // .setValue('input[name=emailField]', 'aaa')
    .click('button[id=editBTN]')
    .pause(3000)
    .click('button[id=unloadBTN]')
    .pause(5000)
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
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=acc]')
    .pause(3000)
    // .assert.urlEquals('http://localhost:8080/')
    //.url('http://localhost:8080/accInfo')
    .waitForElementVisible('#accInfo', 1000)
    // .setValue('input[name=emailField]', 'aaa')
    .click('button[id=editBTN]')
    .pause(3000)
    .click('button[id=deleteBTN]')
    .pause(3000)
    .end();
  }


}
