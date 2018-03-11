module.exports = {
    /*
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
            .assert.containsText('#meetPage', 'HanDescription1')
            .assert.containsText('#meetPage', 'DO NOT DELETE FOR TESTING')
            .end();
    },*/
    'Test for edit organized meet': client => {
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
            .click('button[id=side]')
            .pause(3000)
            .click('a[id=org]')
            .pause(3000)
            .assert.urlEquals('http://localhost:8080/orgmeets')
            .waitForElementVisible('#orgMeets', 3000)
            .click('.white--text')
            .pause(3000)
            .assert.containsText('#meetPage', 'HanDescription1')
            .assert.containsText('#meetPage', 'DO NOT DELETE FOR TESTING')
            .pause(1000)
            .click('button[id=side]')
            .pause(3000)
            .click('a[id=org]')
            .pause(3000)
            .click('button[id="editBTN"]')
            .pause(1000)
            .waitForElementVisible('#editEvent', 1000)
            .pause(5000)
            //clear
            .clearValue('textarea[id="description"]')
            .clearValue('input[id="location"]')
            //change description and location
            .setValue('textarea[id="description"]', 'HanDescription1-EDIT')
            .pause(500)
            .setValue('input[id="location"]', 'DO NOT DELETE FOR TESTING-EDIT')
            .pause(500)
            .click('button[id="saveBTN"]')
            .pause(500)
            .click('.white--text')
            .pause(3000)
            .assert.containsText('#meetPage', 'HanDescription1')
            .assert.containsText('#meetPage', 'DO NOT DELETE FOR TESTING')
            .pause(500)
            //reset info for next testing
            .setValue('textarea[id="description"]', 'HanDescription1')
            .pause(500)
            .setValue('input[id="location"]', 'DO NOT DELETE FOR TESTING')
            .end();
    },
}