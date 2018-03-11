// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
// Header.vue Testing


module.exports = {

  'Test for signin btn in side menu': client => {
    client
    .url('http://localhost:8080')
    .pause(2000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=signSide]')
    .pause(3000)
    .waitForElementVisible('#signin', 1000)
    .pause(1000)

    .end();

  },

  'Test for register btn in side menu': client => {
    client
    .url('http://localhost:8080')
    .pause(2000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=regSide]')
    .pause(3000)
    .waitForElementVisible('#register', 1000)
    .pause(1000)

    .end();

  },

  'Test for accInfo btn in side menu': client => {
    client
    .url('http://localhost:8080')
    .pause(2000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=signSide]')
    .pause(3000)
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
    .waitForElementVisible('#accInfo', 1000)
    .pause(3000)
    .end();

  },

  'Test for register meetings btn in side menu': client => {
    client
    .url('http://localhost:8080')
    .pause(2000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=signSide]')
    .pause(3000)
    .waitForElementVisible('#signin', 1000)
    .pause(1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=reg]')
    .pause(3000)
    .waitForElementVisible('#regMeets', 1000)
    .pause(3000)
    .end();

  },

  'Test for organized meetings btn in side menu': client => {
    client
    .url('http://localhost:8080')
    .pause(2000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=signSide]')
    .pause(3000)
    .waitForElementVisible('#signin', 1000)
    .pause(1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=org]')
    .pause(3000)
    .waitForElementVisible('#orgMeets', 1000)
    .pause(3000)
    .end();

  },

  'Test for create meeting btn in side menu': client => {
    client
    .url('http://localhost:8080')
    .pause(2000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=signSide]')
    .pause(3000)
    .waitForElementVisible('#signin', 1000)
    .pause(1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=create]')
    .pause(3000)
    .waitForElementVisible('#createPage', 1000)
    .pause(3000)
    .end();

  },

  'Test for donate btn in side menu': client => {
    client
    .url('http://localhost:8080')
    .pause(2000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=signSide]')
    .pause(3000)
    .waitForElementVisible('#signin', 1000)
    .pause(1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=donate]')
    .pause(3000)
    .waitForElementVisible('#donate', 1000)
    .pause(3000)
    .end();

  },

  'Test for invite btn in side menu': client => {
    client
    .url('http://localhost:8080')
    .pause(2000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=signSide]')
    .pause(3000)
    .waitForElementVisible('#signin', 1000)
    .pause(1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=invite]')
    .pause(3000)
    .waitForElementVisible('#invite', 1000)
    .pause(3000)
    .end();

  },

  'Test for report btn in side menu': client => {
    client
    .url('http://localhost:8080')
    .pause(2000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=signSide]')
    .pause(3000)
    .waitForElementVisible('#signin', 1000)
    .pause(1000)
    .setValue('input[id=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(1000)
    .click('button[id=side]')
    .pause(3000)
    .click('a[id=report]')
    .pause(3000)
    .waitForElementVisible('#report', 1000)
    .pause(3000)
    .end();

  }

}
