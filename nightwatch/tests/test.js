const selector = require('../test-assets/selector')
const data = require('../test-assets/data')
const functions = require('../test-assets/functions')

module.exports = {
    beforeEach: browser => {
        browser.url("https://cards.devclock.com/")
    },
    after: browser => {
        browser.end()
    },
    'APP EXPECTED ELEMENTS TEST': browser => {functions.AppLoad(browser)},
    'LOGIN TEST': browser => {functions.logIn(browser)},
    'NAV MENU ELEMENTS': browser => {functions.eleLogin(browser)},
    'DECK TEST': browser => {functions.deckTest(browser)},
    

    // Future test ideas to implement

    // 'SUBSCRIBE TO PRO TEST': browser => {functions.},
    // 'EMAIL AUTHENTICATION TEST': browser => {functions.},
    // 'USER ACCOUNT CREATION TEST': browser => {functions.},
    // 'ACCOUNT DELETTION TEST': browser => {functions.},

    }