
module.exports = {
  /*
  'Test for creating meets with only title': client => {
    client
      //sign in
      .url('http://localhost:8080/signin')
      .waitForElementVisible('#signin', 1000)
      .setValue('input[id=email]', 'han@han.com')
      .setValue('input[name=pass]', '11111111')
      .click('button[id=loginBTN]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/')
      //create event
      //.url('http://localhost:8080/create')
      .pause(1000)
      //-----------From here its to click the hamburger menu
      .click('button[id=side]')
      .pause(3000)
      //-----------From here its to click the create menu
      .click('a[id=create]')
      .pause(3000)
      .assert.urlEquals('http://localhost:8080/create')
      .waitForElementVisible('#createPage', 3000)
      .setValue('input[id="title"]', 'HanTest1')
      .click('button[id="sub"]')
      .pause(5000)
      .assert.containsText('#createPage', 'Description is required')
      .assert.containsText('#createPage', 'Location is required')
      .end();
  },
  
  'Test for creating meets with only Description': client => {
    client
      //sign in
      .url('http://localhost:8080/signin')
      .waitForElementVisible('#signin', 1000)
      .setValue('input[id=email]', 'han@han.com')
      .setValue('input[name=pass]', '11111111')
      .click('button[id=loginBTN]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/')
      //create event
      //.url('http://localhost:8080/create')
      .pause(1000)
      //-----------From here its to click the hamburger menu
      .click('button[id=side]')
      .pause(3000)
      //-----------From here its to click the create menu
      .click('a[id=create]')
      .pause(3000)
      .assert.urlEquals('http://localhost:8080/create')
      .waitForElementVisible('#createPage', 3000)
      .setValue('textarea[id="description"]', 'HanTestDescrip')
      .click('button[id="sub"]')
      .pause(5000)
      .assert.containsText('#createPage', 'Title is required')
      .assert.containsText('#createPage', 'Location is required')
      .end();
  },

  'Test for creating meets with only Location': client => {
    client
      //sign in
      .url('http://localhost:8080/signin')
      .waitForElementVisible('#signin', 1000)
      .setValue('input[id=email]', 'han@han.com')
      .setValue('input[name=pass]', '11111111')
      .click('button[id=loginBTN]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/')
      //create event
      //.url('http://localhost:8080/create')
      .pause(1000)
      //-----------From here its to click the hamburger menu
      .click('button[id=side]')
      .pause(3000)
      //-----------From here its to click the create menu
      .click('a[id=create]')
      .pause(3000)
      .assert.urlEquals('http://localhost:8080/create')
      .waitForElementVisible('#createPage', 3000)
      .setValue('input[id="location"]', "HanTestLocation")
      .click('button[id="sub"]')
      .pause(5000)
      .assert.containsText('#createPage', 'Title is required')
      .assert.containsText('#createPage', 'Description is required')
      .end();
  },
*/
  'Test for creating meets with only Title and Description': client => {
    client
      //sign in
      .url('http://localhost:8080/signin')
      .waitForElementVisible('#signin', 1000)
      .setValue('input[id=email]', 'han@han.com')
      .setValue('input[name=pass]', '11111111')
      .click('button[id=loginBTN]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/')
      //create event
      //.url('http://localhost:8080/create')
      .pause(1000)
      //-----------From here its to click the hamburger menu
      .click('button[id=side]')
      .pause(3000)
      //-----------From here its to click the create menu
      .click('a[id=create]')
      .pause(3000)
      .assert.urlEquals('http://localhost:8080/create')
      .waitForElementVisible('#createPage', 3000)
      .setValue('input[id="title"]', 'HanTest1')
      .setValue('textarea[id="description"]', 'HanTestDescrip')
      .click('button[id="sub"]')
      .pause(5000)
      .assert.containsText('#createPage', 'Location is required')
      .end();
  },

  'Test for creating meets with title description and location then cancle the event': client => {
    client
      //sign in
      .url('http://localhost:8080/signin')
      .waitForElementVisible('#signin', 1000)
      .setValue('input[id=email]', 'han@han.com')
      .setValue('input[name=pass]', '11111111')
      .click('button[id=loginBTN]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/')
      //create event
      //.url('http://localhost:8080/create')
      .pause(1000)
      //-----------From here its to click the hamburger menu
      .click('button[id=side]')
      .pause(3000)
      //-----------From here its to click the create menu
      .click('a[id=create]')
      .pause(3000)
      .assert.urlEquals('http://localhost:8080/create')
      .waitForElementVisible('#createPage', 3000)
      .setValue('input[id="title"]', 'HanTest1')
      .setValue('textarea[id="description"]', 'HanTestDescrip')
      .setValue('input[id="location"]', "HanTestLocation")
      .click('button[id="sub"]')
      .pause(5000)
      .assert.urlEquals('http://localhost:8080/orgmeets')
      .assert.containsText('#orgMeets', 'HanTest1')
      //delete event
      .pause(3000)
      .click('.white--text')
      .pause(3000)
      .assert.containsText('#meetPage', 'HanTest1')
      .assert.containsText('#meetPage', 'HanTestDescrip')
      .assert.containsText('#meetPage', 'HanTestLocation')
      .pause(1000)
      .click('button[id="cancelBTN"]')
      .pause(1000)
      .assert.urlEquals('http://localhost:8080/')
      .pause(2000)
      .end();
  },

}
