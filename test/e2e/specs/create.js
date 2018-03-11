
module.exports = {
  
  'Test for creating meets with only title': client => {
    client
      //sign in
      .url('http://localhost:8080/signin')
      .waitForElementVisible('#signin', 1000)
      .setValue('input[id=email]', 'test@test.com')
      .setValue('input[name=pass]', '12345678')
      .click('button[id=loginBTN]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/')
      //create event
      .url('http://localhost:8080/create')
      .waitForElementVisible('#createPage', 3000)
      .setValue('input[id="title"]', 'HanTest1')
      .click('button[id="sub"]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/orgmeets')
      .assert.containsText('#orgMeets', 'HanTest1')
      //delete event
      .pause(3000)
      .click('.white--text')
      .pause(3000)
      .click('button[id="cancelBTN"]')
      .pause(1000)
      .assert.urlEquals('http://localhost:8080/')
      .end();
  },
  'Test for creating meets with only title and location': client => {
    client
      //sign in
      .url('http://localhost:8080/signin')
      .waitForElementVisible('#signin', 1000)
      .setValue('input[id=email]', 'test@test.com')
      .setValue('input[name=pass]', '12345678')
      .click('button[id=loginBTN]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/')
      //create event
      .url('http://localhost:8080/create')
      .waitForElementVisible('#createPage', 3000)
      .setValue('input[id="title"]', 'HanTest2')
      .setValue('input[id="location"]', "HanTestLocation")
      .click('button[id="sub"]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/orgmeets')
      .assert.containsText('#orgMeets', 'HanTest2')
      //delete event
      .pause(3000)
      .click('.white--text')
      .pause(3000)
      .click('button[id="cancelBTN"]')
      .pause(1000)
      .assert.urlEquals('http://localhost:8080/')
      .end();
  },
  'Test for creating meets with few information': client => {
    client
      //sign in
      .url('http://localhost:8080/signin')
      .waitForElementVisible('#signin', 1000)
      .setValue('input[id=email]', 'test@test.com')
      .setValue('input[name=pass]', '12345678')
      .click('button[id=loginBTN]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/')
      //create event
      .url('http://localhost:8080/create')
      .waitForElementVisible('#createPage', 3000)
      .setValue('input[id="title"]', 'HanTest3')
      //.setValue('input[id="description"]', 'HanTestDescrip')
      .setValue('input[id="location"]', "HanTestLocation")
      .click('button[id="sub"]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/orgmeets')
      .assert.containsText('#orgMeets', 'HanTest3')
      //delete event
      .pause(3000)
      .click('.white--text')
      .pause(3000)
      .click('button[id="cancelBTN"]')
      .pause(1000)
      .assert.urlEquals('http://localhost:8080/')
      .end();
  },
  'Test for creating meets with all information': client => {
    client
      //sign in
      .url('http://localhost:8080/signin')
      .waitForElementVisible('#signin', 1000)
      .setValue('input[id=email]', 'test@test.com')
      .setValue('input[name=pass]', '12345678')
      .click('button[id=loginBTN]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/')
      //create event
      .url('http://localhost:8080/create')
      .waitForElementVisible('#createPage', 3000)
      .setValue('input[id="title"]', 'HanTest4')
      //.setValue('input[id="description"]', 'HanTestDescrip')
      .setValue('input[id="location"]', "HanTestLocation")
      .click('button[id="sub"]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/orgmeets')
      .assert.containsText('#orgMeets', 'HanTest4')
      //delete event
      .pause(3000)
      .click('.white--text')
      .pause(3000)
      .click('button[id="cancelBTN"]')
      .pause(1000)
      .assert.urlEquals('http://localhost:8080/')
      .end();
  },
}

