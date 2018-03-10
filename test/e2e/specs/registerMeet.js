module.exports = {

    'Test if register for a Meeting works' :client => {
        client
        .url('http://localhost:8080/signin')
        .waitForElementVisible('#time', 1000)
        .setValue('input[name=email]', 'john@john.com')
        .setValue('input[name=pass]', '12345678')
        .click('button[id=loginBTN]')
        .pause(5000)
        .assert.urlEquals('http://localhost:8080/')
        .pause(1000)
        .click('.white--text')
        .pause(1000)
        .end();
    }
}