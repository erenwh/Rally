module.exports = {

    'Test if register for a Meeting works' :client => {
        client
        .url('http://localhost:8080/signin')
        .waitForElementVisible('#time', 1000)
        .setValue('input[name=email]', 'test@test.com')
        .setValue('input[name=pass]', '12345678')
        .click('button[id=loginBTN]')
        .pause(5000)
        .assert.urlEquals('http://localhost:8080/')
        .pause(500)
        .click('.white--text')
        .pause(1000)
        .click('button[id=registerBTN]')
        .pause(500)
        .url('http://localhost:8080/meets')
        //.waitForElementVisible('#register', 1000) times out
        .pause(4000)
        .end();
    }/*,
    'Test if unregister for a Meeting works' :client => {
        client
        .url('http://localhost:8080/signin')
        .setValue('input[name=email]', 'test@test.com')
        .setValue('input[name=pass]', '12345678')
        .click('button[id=loginBTN]')
        .pause(5000)
        .assert.urlEquals('http://localhost:8080/')
        .url('http://localhost:8080/meets')
        .waitForElementVisible('#register', 1000)
        .pause(500)
        .click('.white--text')
        .pause(1000)
        .click('button[id=registerBTN]')
        .pause(4000)
        .end();
    }*/
}