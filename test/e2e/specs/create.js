module.exports = {

  'Test for register meets' :client => {
    client
    .url('http://localhost:8080/signin')
    .waitForElementVisible('#time', 1000)
    .setValue('input[name=email]', 'test@test.com')
    .setValue('input[name=pass]', '12345678')
    .click('button[id=loginBTN]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/')
    .url('http://localhost:8080/create')
    .waitForElementVisible('#createPage', 3000)
    .setValue('input[id="title"]', 'HanTest')
    //.setValue('input[id="description"]', 'HanTestDescrip')
    .setValue('input[id="location"]', "HanTestLocation")
    .click('button[id="sub"]')
    .pause(5000)
    .assert.urlEquals('http://localhost:8080/orgmeets')
    .assert.containsText('#orgMeets', 'HanTest')
    .end();
  }
}
