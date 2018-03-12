/*module.exports = {

    'Test if register for a Meeting works' :client => {
        client
        .url('http://localhost:8080/signin')
        .waitForElementVisible('#signin', 1000)
        .setValue('input[id=email]', 'register@meet.com')
        .setValue('input[name=pass]', '12341234')
        .click('button[id=loginBTN]')
        .pause(5000)

        .assert.urlEquals('http://localhost:8080/')
        .pause(500)
        .click('.white--text')
        .pause(1000)

        .element('css selector', 'button[id=registerBTN]', result => {
            //var a = client.expect.containsText('#registerBTN','UNREGISTER')
            //console.log(a)
            if (result.status > -1) {
                //client.click(button)
                //console.log(result)
                //console.log('>-1')
                client
                .click('button[id=registerBTN]')
                .pause(1000)
                .pause(5000)
            }
            else {
                //console.log('else')
                client
                .pause(200)
                .click('button[id=unregisterBTN]')
                .pause(1000)
                .click('button[id=registerBTN]')
                .pause(1000)
                .pause(5000)
            }
        })
        .pause(1000)
        //-----------From here its to click the hamburger menu
        .click('button[id=side]')
        .pause(3000)
        //-----------From here its to click the create menu
        .click('a[id=reg]')
        .pause(1000)
        .click('.white--text')
        .pause(1000)
        .assert.containsText('#unregisterBTN', 'UNREGISTER')
        .pause(5000)
        .end();
    },
    'Test if unregister for a Meeting works' :client => {
        client
        .url('http://localhost:8080/signin')
        .waitForElementVisible('#signin', 1000)
        .setValue('input[id=email]', 'register@meet.com')
        .setValue('input[name=pass]', '12341234')
        .click('button[id=loginBTN]')
        .pause(5000)

        .assert.urlEquals('http://localhost:8080/')

        //-----------From here its to click the hamburger menu
        .click('button[id=side]')
        .pause(3000)
        //-----------From here its to click the create menu
        .click('a[id=reg]')
        .pause(1000)
        .click('.white--text')
        .pause(1000)

        .element('css selector', 'button[id=unregisterBTN]', result => {
            //var a = client.expect.containsText('#registerBTN','UNREGISTER')
            //console.log(a)
            if (result.status > -1) {
                //console.log('>-1')
                client
                .click('button[id=unregisterBTN]')
                .pause(1000)
                .pause(5000)
            }
            else {
                //console.log('else')
                client
                .pause(200)
                .click('button[id=registerBTN]')
                .pause(1000)
                .click('button[id=unregisterBTN]')
                .pause(1000)
                .pause(5000)
            }
        })
        .pause(1000)

        .assert.containsText('#registerBTN', 'REGISTER')

        //-----------From here its to click the hamburger menu
        .click('button[id=side]')
        .pause(3000)
        //-----------From here its to click the create menu
        .click('a[id=acc]')
        .pause(1000)
        .click('.white--text')
        .pause(1000)

        //-----------From here its to click the hamburger menu
        .click('button[id=side]')
        .pause(3000)
        //-----------From here its to click the create menu
        .click('a[id=reg]')
        .pause(1000)
        
        //.click('.white--text')
        //.pause(1000)

        .assert.elementNotPresent('.white--text')
        .pause(5000)
        .end();
    }
}
*/