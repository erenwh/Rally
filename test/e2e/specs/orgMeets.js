/*
module.exports = {
    'Test for opening organized meet': client => {
        client
        //signin
            .url('http://localhost:8080/signin')
            .waitForElementVisible('#signin', 1000)
            .setValue('input[id=email]', 'orgmeettest@test.com')
            .setValue('input[name=pass]', '11111111')
            .click('button[id=loginBTN]')
            .pause(5000)
            .assert.urlEquals('http://localhost:8080/')
            .pause(1000)
            //-----------From here its to click the hamburger menu
            .click('button[id=side]')
            .pause(3000)
            //-----------From here its to click the create menu
            .click('a[id=org]')
            .pause(3000)
            .assert.urlEquals('http://localhost:8080/orgmeets')
            .waitForElementVisible('#orgMeets', 3000)
            .click('.white--text')
            .pause(3000)
            .assert.containsText('#meetPage', 'DO NOT DELETE FOR TESTING')
            .end();
    },

    'Test for edit then closing an organized meet wihtout change': client => {
        client
            //signin
            .url('http://localhost:8080/signin')
            .waitForElementVisible('#signin', 1000)
            .setValue('input[id=email]', 'orgmeettest@test.com')
            .setValue('input[name=pass]', '11111111')
            .click('button[id=loginBTN]')
            .pause(3000)
            .assert.urlEquals('http://localhost:8080/')
            .pause(1000)
            .click('button[id=side]')
            .pause(3000)
            .click('a[id=org]')
            .pause(3000)
            .assert.urlEquals('http://localhost:8080/orgmeets')
            .waitForElementVisible('#orgMeets', 3000)
            .click('button[id=editBTN]')
            .pause(3000)
            .verify.visible('button[id=can]')
            .pause(1000)
            .execute(function() {
              document.querySelector('#can').click()
            })
            .pause(3000)
            //.assert.containsText('#editEvent', 'HanDescription2')
            .assert.containsText('#orgMeets', 'DO NOT DELETE')
            .assert.containsText('#orgMeets', '2018-03-15')
            .assert.containsText('#orgMeets', '20:39')
            .end();
    },

    'Test for edit organized meet': client => {
        client
        .url('http://localhost:8080/signin')
        .waitForElementVisible('#signin', 1000)
        .setValue('input[id=email]', 'orgmeettest@test.com')
        .setValue('input[name=pass]', '11111111')
        .click('button[id=loginBTN]')
        .pause(3000)
        .assert.urlEquals('http://localhost:8080/')
        .pause(1000)
        .click('button[id=side]')
        .pause(3000)
        .click('a[id=org]')
        .pause(3000)
        .assert.urlEquals('http://localhost:8080/orgmeets')
        .waitForElementVisible('#orgMeets', 3000)
        .click('button[id=editBTN]')
        .pause(3000)

        //set
        .setValue('textarea[id="description"]', 'test/')
        .pause(3000)
        .setValue('input[id="location"]', 'test2/')
        .pause(3000)
        .execute(function () {
            document.querySelector('#sbtn').click()
        })
        .pause(3000)
        //.assert.containsText('#editEvent', 'HanDescription2')
        .click('.white--text')
        .pause(3000)
        .assert.containsText('#meetPage', 'test/')
        .assert.containsText('#meetPage', 'test2/')
        .end();
},
}
*/