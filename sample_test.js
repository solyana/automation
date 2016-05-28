var creds = require("../creds.js");

module.exports = {
  'Demo login test' : function (browser) {
    browser
        .url('https://www.google.com/intl/en/mail/help/about.html')
        .waitForElementVisible('body', 1000)
        .click('a#gmail-sign-in')
        .pause(1000)
        .waitForElementVisible('body', 1000)
        .setValue('input[type=Email]', creds.email)
        .click('input[id=next]')
        .pause(1000)
        .setValue('input[id=Passwd]', creds.password)
        .click('input[id=signIn]')
        .pause(1000)
        .assert.urlEquals('https://mail.google.com/mail/#inbox')
        .end();
    },

    'flight search' : function (browser) {
      browser
        .url('http://kayak.com')
        .waitForElementVisible('body', 1000)
        .jqueryClick('.verticalsGrid div:nth-child(2):first a:first')
        .pause(1000)
        .waitForElementVisible('body', 1000)
    }
  };
