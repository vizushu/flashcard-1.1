const selector = require('../test-assets/selector')
const data = require('../test-assets/data')

module.exports = {
    beforeEach: browser => {
        browser.url("https://cards.devclock.com/")
    },
    after: browser => {
        browser.end()
    },
    'EXPECTED ELEMENTS TEST': browser => {
        browser
            .url('https://cards.devclock.com/')
            .verify.elementPresent('title')
            .waitForElementVisible('body', 2000)

    },
    'LOG IN TEST': browser => {
        browser
            .useCss()
            .click(selector.user)
            .setValue(selector.user, data.rjLog)
            .pause(1000)
            .verify.containsText(selector.user, data.rjLog)
            .click(selector.Password)
            .setValue(selector.Password, data.rjPass)
            .pause(2000)
            .verify.containsText(selector.Password, data.rjPass)
            .click(selector.Login)
            .pause(1000)

    },
    'ELEMENT PRESENT AFTER LOGIN': browser => {
        browser    
            .pause(5000)
            .waitForElementVisible(selector.Decks, 3000)
            .verify.containsText(selector.Decks, 'Decks')
            .useXpath()
            .waitForElementVisible(selector.Subs, 3000)
            .verify.containsText(selector.Subs, 'Subscription')
            .waitForElementVisible(selector.contactUs, 3000)
            .verify.containsText(selector.contactUs, 'Contact Us')
            .waitForElementVisible(selector.Settings, 3000)
            .verify.containsText(selector.Settings, 'Settings')
            .waitForElementVisible(selector.logOut, 2000)
            .verify.containsText(selector.logOut, 'Logout')
            .pause(5000)

    },
    'DECK TEST': browser => {
        browser
            
            .useCss()
            .click(selector.Decks)
            .pause(2000)
            .waitForElementVisible(selector.deckLabel, 2000)
            .verify.containsText(selector.deckLabel, 'Decks organize yor cards. You can view, add, update or delete cards by clicking on the deck name. Click the edit icon to modify deck settings.')
            .verify.containsText(selector.deckBut, 'Study')
            .click(selector.deckBut)
            .pause(5000)

            .useCss()
            .click(selector["+"])
    }
}

