module.exports = {
    'Test if login works' : client => {
        client
        .url('http://localhost:8080/signin')
        .waitForElementVisible('#signin', 1000)
        .setValue('input[name=email]','john@john.com')
        .setValue('input[name=pass]','12345678')
        .click('button[id=signinBTN]')
        .pause(5000)
        .assert.urlEquals('http://localhost:8080/')
        .end();
    }
}
