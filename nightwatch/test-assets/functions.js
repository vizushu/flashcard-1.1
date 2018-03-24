const selector = require('../test-assets/selector')
const data = require('../test-assets/data')

// let initialLoad = (browser) => {

    let AppLoad = (browser) => {
        browser
            .url('https://cards.devclock.com/')
            .verify.elementPresent('title')
            .waitForElementVisible('body', 2000)
            .verify.elementPresent('body')
            .verify.elementPresent('footer')

            .verify.elementPresent(selector.LogCon)
            .verify.elementPresent(selector.LoginTab)
            .verify.containsText(selector.LoginTab, 'LOGIN')
            .verify.elementPresent(selector.Login)
            .verify.containsText(selector.Login, 'Login')
            .verify.elementPresent(selector.googleLog)
            .verify.containsText(selector.googleLog, 'Login with Google')
            .verify.elementPresent(selector.signupTab)
            .verify.containsText(selector.signupTab, 'SIGN UP')
            .verify.elementPresent(selector.signup)

            .click(selector.signupTab)
            .pause(2000)
            .verify.containsText(selector.signup, 'Sign Up')
            .verify.elementPresent(selector.signupGoo)
            .verify.containsText(selector.signupGoo, 'Sign Up with Google')

            .pause(2000)
    }

    let logIn = browser => {
        browser
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

    }

    let eleLogin = browser => {
        browser
            .pause(2000)
            .waitForElementVisible(selector.Decks, 2000)
            .verify.containsText(selector.Decks, 'Decks')

            .useXpath()
            .waitForElementVisible(selector.Subs, 2000)
            .verify.containsText(selector.Subs, 'Subscription')
            .waitForElementVisible(selector.contactUs, 2000)
            .verify.containsText(selector.contactUs, 'Contact Us')
            .waitForElementVisible(selector.Settings, 2000)
            .verify.containsText(selector.Settings, 'Settings')
            .waitForElementVisible(selector.logOut, 2000)
            .verify.containsText(selector.logOut, 'Logout')
            .pause(2000)
    }
// }

let deckTest = browser => {
    browser
        .useCss()
        .waitForElementVisible(selector.Decks, 2000)
        .verify.elementPresent(selector.Decks)
        .verify.containsText(selector.Decks, 'Decks')

        .click('body > div.main > div.content > div > div > div:nth-child(1)')
        .pause(2000)
        .waitForElementVisible(selector.deckLabel, 2000)
        .verify.containsText(selector.deckLabel, data.deckLabel)
        .verify.containsText(selector.deckBut, 'Study')
        .pause(5000)

        .useXpath()
        .click(selector["+"])

        .useCss()
        .waitForElementVisible(selector.save, 2000)
        .verify.elementPresent(selector.save)
        .verify.containsText(selector.save, 'Save')
}

module.exports = {
    // initialLoad: initialLoad,
    AppLoad :   AppLoad,
    logIn : logIn,
    eleLogin : eleLogin,
    deckTest: deckTest
}