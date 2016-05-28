var creds = require("../creds.js");

module.exports = {
  "Email sending" : function (browser) {
    browser
      .url('https://www.google.com/intl/en/mail/help/about.html')
      .waitForElementVisible('body', 1000)
      .click('a#gmail-sign-in')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      .setValue('input[type=Email]', creds.user_A.email)
      .click('input[id=next]')
      .pause(1000)
      .setValue('input[id=Passwd]', creds.user_A.password)
      .click('input[id=signIn]')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      .click('.T-I.J-J5-Ji.T-I-KE.L3')
      .pause(3000)
      .setValue('textarea[name=to]', creds.user_B.email)
      .setValue('input[name=subjectbox]', 'hi there')
      .click('.J-J5-Ji')
      .pause(1000)
      .waitForElementVisible('body', 1000)
},

  "Email recieved" : function (browser) {
    browser
      .url('https://mail.yahoo.com')
      .waitForElementVisible('body', 1000)
      .click('a#gmail-sign-in')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      .setValue('input[name=username]', creds.user_B.email)
      .click('button[id=login-signin')
      .pause(1000)
      .setValue('input[id=login-passwd]', creds.user_B.password)
      .click('button[id=login-signin')
      .pause(1000)
      .waitForElementVisible('body', 1000)
      .setvalue('input[id=yui_3_16_0_ym19_1_1464451053293_2593]', creds.user_A.email)
      .click('button[id=mail-searcg-btn]')
      .pause(1000)
      .waitForElementVisible('body', 1000)
    }

    };
