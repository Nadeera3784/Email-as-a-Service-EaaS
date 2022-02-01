const { Template_Model } = require("../models");

Template_Model.insertMany([
  {
    variables: {
      subject: [],
      content: ["firstname", "plan_name"],
    },
    subject: [
      {
        en: "Subscription Unsuccessful",
      },
      {
        fr: "Subscription Unsuccessful",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html> <head> <title>Subscription Unsuccessful</title> </head> <body>Hi {{firstname}}, Your subscription to plan {{plan_name}} was unsuccessful. Please try again later. <br> Thank you </body></html>",
      },
      {
        fr: "<!DOCTYPE html><html> <head> <title>Subscription Unsuccessful</title> </head> <body>Hi {{firstname}}, Your subscription to plan {{plan_name}} was unsuccessful. Please try again later. <br> Thank you </body></html>",
      },
    ],
    template: "create-subscription-failed",
    type: "o2o-event",
  },
  {
    variables: {
      subject: ["package_name"],
      content: ["name", "business_name"],
    },
    subject: [
      {
        en: "You are subscribed to the {{package_name}}!!",
      },
      {
        fr: "You are subscribed to the {{package_name}}!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{name}}</p><p>Subscription has been created as below.</p><p>Business Name:{{business_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{name}}</p><p>Subscription has been created as below.</p><p>Business Name:{{business_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "subscription-create-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["name", "business_name"],
    },
    subject: [
      {
        en: "Subscription successfully updated!!",
      },
      {
        fr: "Subscription successfully updated!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{name}}</p><p>Subscription has been updated as below.</p><p>Business Name:{{business_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{name}}</p><p>Subscription has been updated as below.</p><p>Business Name:{{business_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "subscription-update-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "plan_name"],
    },
    subject: [
      {
        en: "Subscription Successful",
      },
      {
        fr: "Subscription Successful",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html> <head> <title>Subscription Successful</title> </head> <body>Hi {{firstname}}, Your subscription to plan {{plan_name}} was successful. <br> Thank you </body></html>",
      },
      {
        fr: "<!DOCTYPE html><html> <head> <title>Subscription Successful</title> </head> <body>Hi {{firstname}}, Your subscription to plan {{plan_name}} was successful. <br> Thank you </body></html>",
      },
    ],
    template: "create-subscription-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["name", "email"],
    },
    subject: [
      {
        en: "Your profile has been updated!!",
      },
      {
        fr: "Your profile has been updated!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{name}}</p><p>Your profile has been updated as below.</p><p>Username :{{email}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{name}}</p><p>Your profile has been updated as below.</p><p>Username :{{email}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "profile-update-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["username"],
    },
    subject: [
      {
        en: "Supplier Package upgrade failed",
      },
      {
        fr: "Supplier Package upgrade failed",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;padding:15pt 0pt 15pt 0pt;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:24.999999999999996pt;font-family:Arial;color:#ab1307;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Ooops...</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:17.5pt;font-family:Arial;color:#099948;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>&nbsp;</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:13.5pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>There has been a glitch processing your upgrade</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:17.5pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>&nbsp;</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:13.5pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>If you received this message,</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:13.5pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>PLEASE CONTACT&nbsp;</span><a href='mailto:sales@globalspiceroad.com?subject=re%3A%20payment%20failed' style='text-decoration:none;'><span style='font-size:13.5pt;font-family:Arial;color:#a5ac08;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>SUPPORT</span></a></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>&nbsp;</span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#099948;padding:15pt 0pt 15pt 0pt;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><a href='https://us20.admin.mailchimp.com/templates/design/%5B%5Burl%5D%5D' style='text-decoration:none;'><span style='font-size:12pt;font-family:Arial;color:#ffffff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Click here to get started &rarr;</span></a><span style='font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>(Magic Link)</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:13pt;font-family:Arial;color:#ffffff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Here are your login credentials:</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:13pt;font-family:Arial;color:#ffffff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Username:</span><span style='font-size:13pt;font-family:Arial;color:#ffffff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'><br></span><span style='font-size:17.5pt;font-family:Arial;color:#ffffff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>[[username]]</span></p><br></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;font-family:-webkit-standard;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>&nbsp;</span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;padding:22.5pt 30pt 0pt 30pt;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:17.5pt;font-family:Arial;color:#099948;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>If You Need Assistance, We&rsquo;re Here For You</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Go to your&nbsp;</span><a href='https://us20.admin.mailchimp.com/templates/design/%5B%5Burl%5D%5D' style='text-decoration:none;'><span style='font-size:12pt;font-family:Arial;color:#a5ac08;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>dashboard</span></a><span style='font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>, chat support is on your lower right!&nbsp;</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:10.5pt;font-family:Arial;color:#675854;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Keep an eye out of our emails. They&rsquo;re full of useful information and special offers to help your business grow.</span></p></td></tr></tbody> </table></div></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;padding:15pt 0pt 15pt 0pt;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:24.999999999999996pt;font-family:Arial;color:#ab1307;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Ooops...</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:17.5pt;font-family:Arial;color:#099948;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>&nbsp;</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:13.5pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>There has been a glitch processing your upgrade</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:17.5pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>&nbsp;</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:13.5pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>If you received this message,</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:13.5pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>PLEASE CONTACT&nbsp;</span><a href='mailto:sales@globalspiceroad.com?subject=re%3A%20payment%20failed' style='text-decoration:none;'><span style='font-size:13.5pt;font-family:Arial;color:#a5ac08;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>SUPPORT</span></a></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>&nbsp;</span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#099948;padding:15pt 0pt 15pt 0pt;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><a href='https://us20.admin.mailchimp.com/templates/design/%5B%5Burl%5D%5D' style='text-decoration:none;'><span style='font-size:12pt;font-family:Arial;color:#ffffff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Click here to get started &rarr;</span></a><span style='font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>(Magic Link)</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:13pt;font-family:Arial;color:#ffffff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Here are your login credentials:</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:13pt;font-family:Arial;color:#ffffff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Username:</span><span style='font-size:13pt;font-family:Arial;color:#ffffff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'><br></span><span style='font-size:17.5pt;font-family:Arial;color:#ffffff;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>[[username]]</span></p><br></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;font-family:-webkit-standard;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>&nbsp;</span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;padding:22.5pt 30pt 0pt 30pt;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:17.5pt;font-family:Arial;color:#099948;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>If You Need Assistance, We&rsquo;re Here For You</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Go to your&nbsp;</span><a href='https://us20.admin.mailchimp.com/templates/design/%5B%5Burl%5D%5D' style='text-decoration:none;'><span style='font-size:12pt;font-family:Arial;color:#a5ac08;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>dashboard</span></a><span style='font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>, chat support is on your lower right!&nbsp;</span></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:10.5pt;font-family:Arial;color:#675854;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Keep an eye out of our emails. They&rsquo;re full of useful information and special offers to help your business grow.</span></p></td></tr></tbody> </table></div></body></html>",
      },
    ],
    template: "supplier-package-upgrade-failed",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["name", "Supplier_name", "Category", "Country"],
    },
    subject: [
      {
        en: "Supplier recommendations",
      },
      {
        fr: "Supplier recommendations",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body> <div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:37.5pt;'>Hello{{name}}</span></p></td></tr><tr style='height:13pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:8.5pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:15pt;'>Thank you for sourcing on{{event_site}}. Based on the items you recently viewed, we put together a selection of recommended products just for you.</span></p></td></tr></tbody> </table> </div><p><br></p><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#3e3c63;overflow:hidden;overflow-wrap:break-word;'> <br><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:500pt;'> <td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:26.499999999999996pt;'>POPULER SUPPLIERS</span></p></td></tr><tr style='height:13pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td></tr></tbody> </table> </div><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td><td style='vertical-align:top;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:10pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:18pt;'>BEST MATCHING SUPPLIERS&nbsp;</span> </p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:12pt;'>SET UP MEETING, CONNECT, CALL OR CHAT</span></p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td><td style='vertical-align:top;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='https://lh4.googleusercontent.com/piZUTRqjD8GVQw7udukgdjqAah5hlv4A7FnBL6SI68ct9c0c-L5DmbI8we89E8A0NAsXsnKx7A8JLb6Amnwlwi04G15rsLbfbTx6gMIhR21hu36Pipa3X0JWG-VVoToiM-jHfWy-I4XDGiSzM08' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{Supplier_name}}</span> </p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{Category}}</span> </p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{{Country}}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>View</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Profile</span> </p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td><td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='https://lh3.googleusercontent.com/RSF6h4thC49tJKuP7djKNICt8qUxFGKKaLN1sb3mtnoRzO351bjp8x6RQbtpFViV8N2rNovHVMEhy3hrvi8sn3qxr-BkZJlKRz8hmB6Z2BEg7FcuBgN8dSJXoSMBqKNgWQBIKwkbT4uPIB-9N2Y' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{Supplier_name}}</span> </p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{Category}}</span> </p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{Country}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>View</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Profile</span> </p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>&nbsp;</span></p></td></tr></tbody> </table> </div><br></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td><td style='vertical-align:top;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='https://lh5.googleusercontent.com/NgobG-cpXeIj0IDGRUL7iJ3frs43UL43oTw5GkcYdSxbY0FNpxoyIlolvVr2Cp8jgaTXguS-ItfhB_xrb8Ut7BQvoReL38ZGvHklo9w6dMe_J-9C0yTKqxPGJzbmUKaBmQiWSZ7ch3ZnNbQk-FU' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{Supplier_name}}</span> </p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{Category}}</span> </p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{Country}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>View</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Profile&nbsp;</span> </p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <br></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td><td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='https://lh4.googleusercontent.com/_fpKGWpxcdn3hCiLmZr4TkJ_yjTVlAbP-15_p5I5I16K4zHsUyvcgDRKFvq2xdmcjn6MhdD6Mloqy0_984VQ_LPJejP3IqFerhUFtvsD8ZtVnVeUtZ11vQvtBwranvUgaREeadN8qLfX7BtNQI0' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{Supplier_name}}</span> </p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{Category}}</span> </p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{Country}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>View</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Profile</span> </p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body> <div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:37.5pt;'>Hello{{name}}</span></p></td></tr><tr style='height:13pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:8.5pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:15pt;'>Thank you for sourcing on{{event_site}}. Based on the items you recently viewed, we put together a selection of recommended products just for you.</span></p></td></tr></tbody> </table> </div><p><br></p><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#3e3c63;overflow:hidden;overflow-wrap:break-word;'> <br><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:500pt;'> <td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:26.499999999999996pt;'>POPULER SUPPLIERS</span></p></td></tr><tr style='height:13pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td></tr></tbody> </table> </div><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td><td style='vertical-align:top;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:10pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:18pt;'>BEST MATCHING SUPPLIERS&nbsp;</span> </p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:12pt;'>SET UP MEETING, CONNECT, CALL OR CHAT</span></p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td><td style='vertical-align:top;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='https://lh4.googleusercontent.com/piZUTRqjD8GVQw7udukgdjqAah5hlv4A7FnBL6SI68ct9c0c-L5DmbI8we89E8A0NAsXsnKx7A8JLb6Amnwlwi04G15rsLbfbTx6gMIhR21hu36Pipa3X0JWG-VVoToiM-jHfWy-I4XDGiSzM08' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{Supplier_name}}</span> </p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{Category}}</span> </p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{{Country}}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>View</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Profile</span> </p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td><td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='https://lh3.googleusercontent.com/RSF6h4thC49tJKuP7djKNICt8qUxFGKKaLN1sb3mtnoRzO351bjp8x6RQbtpFViV8N2rNovHVMEhy3hrvi8sn3qxr-BkZJlKRz8hmB6Z2BEg7FcuBgN8dSJXoSMBqKNgWQBIKwkbT4uPIB-9N2Y' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{Supplier_name}}</span> </p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{Category}}</span> </p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{Country}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>View</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Profile</span> </p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>&nbsp;</span></p></td></tr></tbody> </table> </div><br></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td><td style='vertical-align:top;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='https://lh5.googleusercontent.com/NgobG-cpXeIj0IDGRUL7iJ3frs43UL43oTw5GkcYdSxbY0FNpxoyIlolvVr2Cp8jgaTXguS-ItfhB_xrb8Ut7BQvoReL38ZGvHklo9w6dMe_J-9C0yTKqxPGJzbmUKaBmQiWSZ7ch3ZnNbQk-FU' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{Supplier_name}}</span> </p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{Category}}</span> </p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{Country}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>View</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Profile&nbsp;</span> </p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <br></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td><td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='https://lh4.googleusercontent.com/_fpKGWpxcdn3hCiLmZr4TkJ_yjTVlAbP-15_p5I5I16K4zHsUyvcgDRKFvq2xdmcjn6MhdD6Mloqy0_984VQ_LPJejP3IqFerhUFtvsD8ZtVnVeUtZ11vQvtBwranvUgaREeadN8qLfX7BtNQI0' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{Supplier_name}}</span> </p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{Category}}</span> </p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{Country}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>View</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Profile</span> </p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='https://lh6.googleusercontent.com/SUdIQbb1vVyG9UlmColkI_PaEChvU78RER-NBYa2SOSjH7LunTL5_3Pqo58WAdfsC4V3tPndsNpgo7jErRi2Uj_xnqlKxKESlzs231_MyQKN3C-ynBemSFmg8CBPJv8hIzFi-xIp5A3qrK4Q4ow' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div></body></html>",
      },
    ],
    template: "supplier-recommendations",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["Name", "product name", "MOQ", "price", "magic Link Enquiry"],
    },
    subject: [
      {
        en: "weekly selection of top trending items",
      },
      {
        fr: "weekly selection of top trending items",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{Name}}</span> </p><p><br></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:16.5pt;font-family:Roboto,sans-serif;color:#202124;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Here&apos;s your weekly selection of top trending items just for you.</span></p><p><br></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Explore All</span></p><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align: top; background-color: rgb(255, 255, 255); overflow: hidden; overflow-wrap: break-word; width: 47.0587%;'> <br></td><td style='vertical-align: middle; background-color: rgb(255, 255, 255); overflow: hidden; overflow-wrap: break-word; width: 47.0589%;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><br></p></td></tr></tbody> </table> <p><br></p></div><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:8.5pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td><td style='vertical-align:top;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACfCAYAAADEZQ0cAAAAAXNSR0IArs4c6QAABUtJREFUeF7t2u1qmlsYRdFs7/+S/EouTMsOUbS+SUDN/OMICKftMQ8dLCZqOt7f34+Hw+FtPubXGOPzcTwePx/zv30RIEDgUYFTS8ZutxOdRzU9nwCBXwXO0dlsNjfROT17vvpZrVa/fjP/AwECBH4SuHzHNNbrtVc69kKAwJ8JXAVnfnzjlc6fWfvGBAh8CVyFZ7vdLr69On2Q7O2V3RAg8AyB82c6ovMMTt+DAIElgcufgP/4QbIfmRsQAQLPFrh5pbP073Lm7/kiQIDAvQKLr3ROb69E515WzyNA4DsB0bENAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBBajs9/vj4fD4W0+5tcY4yw1f+/y1wgJECBwr8CpJWO9Xt9EZ/7hLNR8rFare294HgECLy5w+cLlHJ3tdrv4SucUHa90Xnw1/voEniBwDs4Yb2O323l79QRU34IAge8FrqLz29srkAQIEHhU4Co6S2+vLj/T8fbqUW7PJ/C6AvNjmv9/QDU+Pj5+/CD5dbn8zQkQeIbA5auc+f3+AVcCHUXkNasAAAAAAElFTkSuQmCC' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{product name}}</span></p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{MOQ}}</span></p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{price}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>Contact</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Supplier{{magic Link Enquiry}}</span></p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td><td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACfCAYAAADEZQ0cAAAAAXNSR0IArs4c6QAABUtJREFUeF7t2u1qmlsYRdFs7/+S/EouTMsOUbS+SUDN/OMICKftMQ8dLCZqOt7f34+Hw+FtPubXGOPzcTwePx/zv30RIEDgUYFTS8ZutxOdRzU9nwCBXwXO0dlsNjfROT17vvpZrVa/fjP/AwECBH4SuHzHNNbrtVc69kKAwJ8JXAVnfnzjlc6fWfvGBAh8CVyFZ7vdLr69On2Q7O2V3RAg8AyB82c6ovMMTt+DAIElgcufgP/4QbIfmRsQAQLPFrh5pbP073Lm7/kiQIDAvQKLr3ROb69E515WzyNA4DsB0bENAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBBajs9/vj4fD4W0+5tcY4yw1f+/y1wgJECBwr8CpJWO9Xt9EZ/7hLNR8rFare294HgECLy5w+cLlHJ3tdrv4SucUHa90Xnw1/voEniBwDs4Yb2O323l79QRU34IAge8FrqLz29srkAQIEHhU4Co6S2+vLj/T8fbqUW7PJ/C6AvNjmv9/QDU+Pj5+/CD5dbn8zQkQeIbA5auc+f3+AVcCHUXkNasAAAAAAElFTkSuQmCC' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{products}}</span> </p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{MOQ}}</span></p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{price}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>Contact</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Supplier{{magic Link Enquiry}}</span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <br></td></tr></tbody> </table> </div><br></td></tr></tbody> </table> </div><br><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><br><br></span></p></td></tr></tbody> </table> </div><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <br></td><td style='vertical-align:top;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><br></p></td></tr></tbody> </table> </div><p>&quot;</p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{Name}}</span> </p><p><br></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:16.5pt;font-family:Roboto,sans-serif;color:#202124;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Here&apos;s your weekly selection of top trending items just for you.</span></p><p><br></p><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Explore All</span></p><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align: top; background-color: rgb(255, 255, 255); overflow: hidden; overflow-wrap: break-word; width: 47.0587%;'> <br></td><td style='vertical-align: middle; background-color: rgb(255, 255, 255); overflow: hidden; overflow-wrap: break-word; width: 47.0589%;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><br></p></td></tr></tbody> </table> <p><br></p></div><p><br></p><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span open='' style='font-size:8.5pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td><td style='vertical-align:top;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACfCAYAAADEZQ0cAAAAAXNSR0IArs4c6QAABUtJREFUeF7t2u1qmlsYRdFs7/+S/EouTMsOUbS+SUDN/OMICKftMQ8dLCZqOt7f34+Hw+FtPubXGOPzcTwePx/zv30RIEDgUYFTS8ZutxOdRzU9nwCBXwXO0dlsNjfROT17vvpZrVa/fjP/AwECBH4SuHzHNNbrtVc69kKAwJ8JXAVnfnzjlc6fWfvGBAh8CVyFZ7vdLr69On2Q7O2V3RAg8AyB82c6ovMMTt+DAIElgcufgP/4QbIfmRsQAQLPFrh5pbP073Lm7/kiQIDAvQKLr3ROb69E515WzyNA4DsB0bENAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBBajs9/vj4fD4W0+5tcY4yw1f+/y1wgJECBwr8CpJWO9Xt9EZ/7hLNR8rFare294HgECLy5w+cLlHJ3tdrv4SucUHa90Xnw1/voEniBwDs4Yb2O323l79QRU34IAge8FrqLz29srkAQIEHhU4Co6S2+vLj/T8fbqUW7PJ/C6AvNjmv9/QDU+Pj5+/CD5dbn8zQkQeIbA5auc+f3+AVcCHUXkNasAAAAAAElFTkSuQmCC' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{product name}}</span></p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{MOQ}}</span></p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{price}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>Contact</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Supplier{{magic Link Enquiry}}</span></p></td></tr><tr style='height:40pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr></tbody> </table> </div><br></td><td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td><td style='vertical-align:top;overflow:hidden;overflow-wrap:break-word;'><br><div align='left' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:380px;height:212px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACfCAYAAADEZQ0cAAAAAXNSR0IArs4c6QAABUtJREFUeF7t2u1qmlsYRdFs7/+S/EouTMsOUbS+SUDN/OMICKftMQ8dLCZqOt7f34+Hw+FtPubXGOPzcTwePx/zv30RIEDgUYFTS8ZutxOdRzU9nwCBXwXO0dlsNjfROT17vvpZrVa/fjP/AwECBH4SuHzHNNbrtVc69kKAwJ8JXAVnfnzjlc6fWfvGBAh8CVyFZ7vdLr69On2Q7O2V3RAg8AyB82c6ovMMTt+DAIElgcufgP/4QbIfmRsQAQLPFrh5pbP073Lm7/kiQIDAvQKLr3ROb69E515WzyNA4DsB0bENAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBETHBggQSAVEJ+V2jAAB0bEBAgRSAdFJuR0jQEB0bIAAgVRAdFJuxwgQEB0bIEAgFRCdlNsxAgRExwYIEEgFRCfldowAAdGxAQIEUgHRSbkdI0BAdGyAAIFUQHRSbscIEBAdGyBAIBUQnZTbMQIERMcGCBBIBUQn5XaMAAHRsQECBFIB0Um5HSNAQHRsgACBVEB0Um7HCBAQHRsgQCAVEJ2U2zECBBajs9/vj4fD4W0+5tcY4yw1f+/y1wgJECBwr8CpJWO9Xt9EZ/7hLNR8rFare294HgECLy5w+cLlHJ3tdrv4SucUHa90Xnw1/voEniBwDs4Yb2O323l79QRU34IAge8FrqLz29srkAQIEHhU4Co6S2+vLj/T8fbqUW7PJ/C6AvNjmv9/QDU+Pj5+/CD5dbn8zQkQeIbA5auc+f3+AVcCHUXkNasAAAAAAElFTkSuQmCC' width='380' height='212'></span></span> </p></td></tr><tr style='height:20pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:14.5pt;'>{{products}}</span> </p></td></tr><tr style='height:7pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:10.5pt;'>{{MOQ}}</span></p></td></tr><tr style='height:6pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span open='' style='font-size:16pt;'>{{price}}</span></p></td></tr><tr style='height:11pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <span style='font-size:12pt;'><span style='border:none;display:inline-block;overflow:hidden;width:1px;height:1px;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC' width='1' height='1'></span></span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'> <a href='https://us20.admin.mailchimp.com/templates/design/preview-template-html?tid=96726' style='text-decoration:none;'><span open='' style='font-size:10.5pt;'>Contact</span></a><span open='' style='font-size:10.5pt;'>&nbsp;Supplier{{magic Link Enquiry}}</span></p></td></tr><tr style='height:0pt;'> <td style='vertical-align:middle;overflow:hidden;overflow-wrap:break-word;'> <br></td></tr></tbody> </table> </div><br></td></tr></tbody> </table> </div><br><p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:12pt;'><br><br></span></p></td></tr></tbody> </table> </div><div align='center' dir='ltr' style='margin-left:0pt;'> <table style='border:none;border-collapse:collapse;'> <tbody> <tr style='height:0pt;'> <td style='vertical-align:middle;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <br></td><td style='vertical-align:top;background-color:#ffffff;overflow:hidden;overflow-wrap:break-word;'> <p dir='ltr' style='line-height:1.2;margin-top:0pt;margin-bottom:0pt;'><br></p></td></tr></tbody> </table> </div><p>&quot;</p></body></html>",
      },
    ],
    template: "weekly-selection-top-trending-items",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["visitor", "exhibition"],
    },
    subject: [
      {
        en: "Confirmation of your enquiry",
      },
      {
        fr: "Confirmation of your enquiry",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hello{{visitor}},</p><p>Welcome and thank you for using the{{exhibition}}online sourcing platform.</p><p>Your Inquiry has been sent to the Supplier and you will receive a notification as soon as the supplier responded to the inquiry.</p><p>Meantime you can log in to your dashboard and Request a meeting Directly call from the dashboard</p><p>Chat with suppliers in your language</p><p>Manage your profile and preferences</p><p>Log in and see special offers from suppliers</p><p><a href='http://email.mail.arabianorganics.com/c/eJwdjsuOhSAQRL8Gd2PABpEFi0km9z-6eShRgSBO5v79mJvUqk5Sp7zVSnA-JGsIolBRejfxRcHkVVRECwASopaOSX5i20NPeR3LVMJvyP0aXTmHzUaIwQhBRssJPQWNXM4RQC_OkDAwHHbrvV4Mvtn0eoK1jtiQEubSVszJfaYekrIPf2PdKoNXxTUw-KH7HdqXx2ujgs2zad7D--kRZ5q1J-ROK4iSL6jiQjyC44YrMTSLOz7HfVpTx-MMPuFVjrunkj--Ee-h239iIVNt'>GO TO DASHBOARD</a></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hello{{visitor}},</p><p>Welcome and thank you for using the{{exhibition}}online sourcing platform.</p><p>Your Inquiry has been sent to the Supplier and you will receive a notification as soon as the supplier responded to the inquiry.</p><p>Meantime you can log in to your dashboard and Request a meeting Directly call from the dashboard</p><p>Chat with suppliers in your language</p><p>Manage your profile and preferences</p><p>Log in and see special offers from suppliers</p><p><a href='http://email.mail.arabianorganics.com/c/eJwdjsuOhSAQRL8Gd2PABpEFi0km9z-6eShRgSBO5v79mJvUqk5Sp7zVSnA-JGsIolBRejfxRcHkVVRECwASopaOSX5i20NPeR3LVMJvyP0aXTmHzUaIwQhBRssJPQWNXM4RQC_OkDAwHHbrvV4Mvtn0eoK1jtiQEubSVszJfaYekrIPf2PdKoNXxTUw-KH7HdqXx2ujgs2zad7D--kRZ5q1J-ROK4iSL6jiQjyC44YrMTSLOz7HfVpTx-MMPuFVjrunkj--Ee-h239iIVNt'>GO TO DASHBOARD</a></p></body></html>",
      },
    ],
    template: "enquiry-confirmation",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "plan_name"],
    },
    subject: [
      {
        en: "Cancel Subscription Unsuccessful",
      },
      {
        fr: "Cancel Subscription Unsuccessful",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html> <head> <title>Cancel Subscription Unsuccessful</title> </head> <body>Hi {{firstname}}, cancellation of subscription to plan {{plan_name}} was unsuccessful. Please try again later. <br> Thank you </body></html>",
      },
      {
        fr: "<!DOCTYPE html><html> <head> <title>Cancel Subscription Unsuccessful</title> </head> <body>Hi {{firstname}}, cancellation of subscription to plan {{plan_name}} was unsuccessful. Please try again later. <br> Thank you </body></html>",
      },
    ],
    template: "cancel-subscription-failed",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "last4"],
    },
    subject: [
      {
        en: "Card Added Successfully",
      },
      {
        fr: "Card Added Successfully",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body> <p>Hi{{firstname}},</p><p>The card **************{{last4}}was added successfully to your account.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body> <p>Hi{{firstname}},</p><p>The card **************{{last4}}was added successfully to your account.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "add-card-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["fromName ", "fromEmail ", "action"],
    },
    subject: [
      {
        en: "Getting a Call!!",
      },
      {
        fr: "Getting a Call!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p><span style='color: rgb(0, 0, 0);'>Hello</span><span style='color: rgb(0, 0, 0);'>&nbsp;{{fromName}},</span></p><p><span style='color: rgb(0, 0, 0);'>You are getting a call{{fromEmail}}</span></p><p><span style='color: rgb(0, 0, 0);'>View Calls ,{{action}}</span></p><p><br></p><p><span style='color: rgb(0, 0, 0);'>Happy trading!</span></p><p><br></p><p><span style='color: rgb(0, 0, 0);'>Regards,</span></p><p><span style='color: rgb(0, 0, 0);'>organization_name.</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p><span style='color: rgb(0, 0, 0);'>Hello</span><span style='color: rgb(0, 0, 0);'>&nbsp;{{fromName}},</span></p><p><span style='color: rgb(0, 0, 0);'>You are getting a call{{fromEmail}}</span></p><p><span style='color: rgb(0, 0, 0);'>View Calls ,{{action}}</span></p><p><br></p><p><span style='color: rgb(0, 0, 0);'>Happy trading!</span></p><p><br></p><p><span style='color: rgb(0, 0, 0);'>Regards,</span></p><p><span style='color: rgb(0, 0, 0);'>organization_name.</span></p></body></html>",
      },
    ],
    template: "incoming-call-notification",
    type: "o2o-core",
  },
  {
    variables: {
      subject: ["Buyer_Name"],
      content: [
        "Company_Name1",
        "Company_Name2",
        "Company_Name3",
        "Person_Name1",
        "Person_Name2",
        "Person_Name3",
      ],
    },
    subject: [
      {
        en: "Hi {{Buyer_Name}} Suppliers are waiting for your respond",
      },
      {
        fr: "Hi {{Buyer_Name}} Suppliers are waiting for your respond",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body> <div> <table> <tbody> <tr> <td> <p>Reminder, Suppliers have responded to your enquriey and waiting for a reply</p><br><p>{{Company_Name1}}/{{Person_Name1}}</p><p>{{Company_Name2}}/{{Person_Name2}}</p><p>{{Company_Name3}}/{{Person_Name3}}</p><p>See All</p><p>Can't decide or no time? Get one of our matchmaking consultants to help you finding the best supplier</p><p>Get In Touch (Ticket) Chat with Us (Chat)</p></td></tr></tbody> </table> </div></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body> <div> <table> <tbody> <tr> <td> <p>Reminder, Suppliers have responded to your enquriey and waiting for a reply</p><br><p>{{Company_Name1}}/{{Person_Name1}}</p><p>{{Company_Name2}}/{{Person_Name2}}</p><p>{{Company_Name3}}/{{Person_Name3}}</p><p>See All</p><p>Can't decide or no time? Get one of our matchmaking consultants to help you finding the best supplier</p><p>Get In Touch (Ticket) Chat with Us (Chat)</p></td></tr></tbody> </table> </div></body></html>",
      },
    ],
    template: "pending-action",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "last4"],
    },
    subject: [
      {
        en: "Card Failed To Add",
      },
      {
        fr: "Card Failed To Add",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE<html><body>Hi{{firstname}},<p>The card **************{{last4}}failed to add. Please try again later.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE<html><body>Hi{{firstname}},<p>The card **************{{last4}}failed to add. Please try again later.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "add-card-fail",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "last4"],
    },
    subject: [
      {
        en: "Default Card Changed Successfully",
      },
      {
        fr: "Default Card Changed Successfully",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE<html><body>Hi{{firstname}},<p>Your default card was successfully changed to **************{{last4}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE<html><body>Hi{{firstname}},<p>Your default card was successfully changed to **************{{last4}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "set-default-card-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "last4"],
    },
    subject: [
      {
        en: "Change Of Default Card Unsuccessful",
      },
      {
        fr: "Change Of Default Card Unsuccessful",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE<html><body>Hi{{firstname}},<p>The change of default card to **************{{last4}}was unsuccessfully. Please try again later.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE<html><body>Hi{{firstname}},<p>The change of default card to **************{{last4}}was unsuccessfully. Please try again later.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "set-default-card-failed",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "last4"],
    },
    subject: [
      {
        en: "Card Successfully Deleted",
      },
      {
        fr: "Card Successfully Deleted",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE<html><body>Hi{{firstname}},<p>The card **************{{last4}}was deleted successfully.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE<html><body>Hi{{firstname}},<p>The card **************{{last4}}was deleted successfully.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "delete-card-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "last4"],
    },
    subject: [
      {
        en: "Delete Card Unsuccessful",
      },
      {
        fr: "Delete Card Unsuccessful",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE<html><body>Hi{{firstname}},<p>deleting card **************{{last4}}was unsuccessful. Please try again later.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE<html><body>Hi{{firstname}},<p>deleting card **************{{last4}}was unsuccessful. Please try again later.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "delete-card-failed",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "last4"],
    },
    subject: [
      {
        en: "Card Information Successfully Updated",
      },
      {
        fr: "Card Information Successfully Updated",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE<html><body>Hi{{firstname}},<p>The information of card **************{{last4}}was updated successfully.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE<html><body>Hi{{firstname}},<p>The information of card **************{{last4}}was updated successfully.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "update-card-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "last4"],
    },
    subject: [
      {
        en: "Update Card Unsuccessful",
      },
      {
        fr: "Update Card Unsuccessful",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE<html><body>Hi{{firstname}},<p>The information update of card **************{{last4}}was unsuccessful. Please try again later.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE<html><body>Hi{{firstname}},<p>The information update of card **************{{last4}}was unsuccessful. Please try again later.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "update-card-failed",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["Name", "username", "Magic_Link"],
    },
    subject: [
      {
        en: "Virtual Only Event Registration (Conference) /Past visitor for past events attempts registers to a current event",
      },
      {
        fr: "Virtual Only Event Registration (Conference) /Past visitor for past events attempts registers to a current event",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE<html><p>Hello{{Name}}</p><p>Your registration is completed</p><p>EVENT NAME</p><p>DATE</p><p>Time</p><p>ADD To Calendar - Full Sechedule</p><p>Your access to the EVENT virtual experience platform, explore sessions and speakers</p><p><a href='{{Magic_Link}}'>Click here to get started</a></p><p>Here are your login credentials:</p><p>Username:{{username}}</p><p>Send an easy to join link, share network with your peers</p><p>Invite a Friend to Join You</p><p>If You Need Assistance, We are Here For You</p><p>Go to your <a href='https://us20.admin.mailchimp.com/templates/design/%5B%5Burl%5D%5D'>dashboard</a>, chat support is on your lower right!</p><p>Keep an eye out of our emails. They&rsquo;re full of useful information and special offers to help your business grow.</p></html>",
      },
      {
        fr: "<!DOCTYPE<html><p>Hello{{Name}}</p><p>Your registration is completed</p><p>EVENT NAME</p><p>DATE</p><p>Time</p><p>ADD To Calendar - Full Sechedule</p><p>Your access to the EVENT virtual experience platform, explore sessions and speakers</p><p><a href='{{Magic_Link}}'>Click here to get started</a></p><p>Here are your login credentials:</p><p>Username:{{username}}</p><p>Send an easy to join link, share network with your peers</p><p>Invite a Friend to Join You</p><p>If You Need Assistance, We are Here For You</p><p>Go to your <a href='https://us20.admin.mailchimp.com/templates/design/%5B%5Burl%5D%5D'>dashboard</a>, chat support is on your lower right!</p><p>Keep an eye out of our emails. They&rsquo;re full of useful information and special offers to help your business grow.</p></html>",
      },
    ],
    template: "virtual-event-conference-registration",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["role", "owner_name"],
    },
    subject: [
      {
        en: "Business Person have successfully deleted!!",
      },
      {
        fr: "Business Person have successfully deleted!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{owner_name}}</p><p>Business Person has been deleted as below.</p><p>Role:{{role}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{owner_name}}</p><p>Business Person has been deleted as below.</p><p>Role:{{role}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "businessPerson-delete-successs",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["fullName", "email", "action_link"],
    },
    subject: [
      {
        en: "Your password has been reset",
      },
      {
        fr: "Your password has been reset",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body> <p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hi{{fullName}}</span> </p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Your password has been reset. Please find the new password details below:</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Username{{email}}</span> </p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Login (action link label)</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Regards</span> </p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body> <p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hi{{fullName}}</span> </p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Your password has been reset. Please find the new password details below:</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Username{{email}}</span> </p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Login (action link label)</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Regards</span> </p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
    ],
    template: "reset-password-by-admin",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["fullName", "packageName", "action_link"],
    },
    subject: [
      {
        en: "Welcome to the #1 B2B Marketplace in the Middle East.",
      },
      {
        fr: "Welcome to the #1 B2B Marketplace in the Middle East.",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hi{{fullName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You are now a qualified supplier on ArabianOrganics, where 38,000+ buyers source their organic &amp; natural products from in the region.</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Your package details are below:</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Package{{packageName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Login (action link label)</span></p><p><br></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hi{{fullName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You are now a qualified supplier on ArabianOrganics, where 38,000+ buyers source their organic &amp; natural products from in the region.</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Your package details are below:</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Package{{packageName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Login (action link label)</span></p><p><br></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
    ],
    template: "exhibitor-package-subscription",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["fullName", "PersonName", "action_link"],
    },
    subject: [
      {
        en: "You have received a New Product Enquiry",
      },
      {
        fr: "You have received a New Product Enquiry",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{fullName}}</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You have received a new product enquiry from{{PersonName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>View Enquiries&nbsp;{{action_link}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{fullName}}</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You have received a new product enquiry from{{PersonName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>View Enquiries&nbsp;{{action_link}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
    ],
    template: "new-enquiry",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["productName", "productPrice"],
    },
    subject: [
      {
        en: "Your product has been published",
      },
      {
        fr: "Your product has been published",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello,</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Your product has been published by the Admin</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'><br></span><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Please find the product details below</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Product Name{{productName}}</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Price{{productPrice}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello,</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Your product has been published by the Admin</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'><br></span><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Please find the product details below</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Product Name{{productName}}</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Price{{productPrice}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
    ],
    template: "exhibitor-product-published",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["productName", "productPrice"],
    },
    subject: [
      {
        en: "Your product has been unpublished",
      },
      {
        fr: "Your product has been unpublished",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Your product has been unpublished by the Admin</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'><br></span><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Please find the product details below</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Product Name{{productName}}</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Price{{productPrice}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Your product has been unpublished by the Admin</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'><br></span><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Please find the product details below</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Product Name{{productName}}</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Price{{productPrice}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
    ],
    template: "exhibitor-product-unpublished",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["fullName", "friendName", "action_link"],
    },
    subject: [
      {
        en: "You have received a New Connection Request",
      },
      {
        fr: "You have received a New Connection Request",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{fullName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You have received a new connection notification from{{friendName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Accept the Connection {{action_link}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{fullName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You have received a new connection notification from{{friendName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Accept the Connection {{action_link}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
    ],
    template: "connection-request",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["fullName", "PersonName", "action_link"],
    },
    subject: [
      {
        en: "You have received a New Message",
      },
      {
        fr: "You have received a New Message",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{fullName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You have received a new message from{{PersonName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>View Messages&nbsp;{{action_link}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{fullName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You have received a new message from{{PersonName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>View Messages&nbsp;{{action_link}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
    ],
    template: "new-message",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["fullName", "PersonName", "action_link"],
    },
    subject: [
      {
        en: "You have received a New Message",
      },
      {
        fr: "You have received a New Message",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{fullName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You have received a new rfq from{{PersonName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>View RFQ &nbsp;{{action_link}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{fullName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You have received a new rfq from{{PersonName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>View RFQ &nbsp;{{action_link}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p></body></html>",
      },
    ],
    template: "new-rfq",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: [
        "fullName",
        "ExhibitorName",
        "InviterName",
        "email",
        "action_link",
      ],
    },
    subject: [
      {
        en: "You have been invited to {{ExhibitorName}} team",
      },
      {
        fr: "You have been invited to {{ExhibitorName}} team",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{fullName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You have been invited to the team of{{ExhibitorName}}by{{InviterName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Login using the below credentials:</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Username{{email}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Login&nbsp;{{action_link}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p><p><br></p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Hello{{fullName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>You have been invited to the team of{{ExhibitorName}}by{{InviterName}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Login using the below credentials:</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Username{{email}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Login&nbsp;{{action_link}}</span></p><p><br></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Happy trading!</span></p><p dir='ltr' style='line-height:1.38;margin-top:0pt;margin-bottom:0pt;'><span style='font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;'>Organic Expo Dubai</span></p><p><br></p><p><br></p></body></html>",
      },
    ],
    template: "exhibitor-invitation",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["name"],
    },
    subject: [
      {
        en: "Your account has been deleted!!",
      },
      {
        fr: "Your account has been deleted!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{name}}</p><p>Your account has been deleted.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{name}}</p><p>Your account has been deleted.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "account-delete-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["fromName ", "fromEmail ", "action", "organization_name"],
    },
    subject: [
      {
        en: "Missed Call!!",
      },
      {
        fr: "Missed Call!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p><span style='color: rgb(0, 0, 0);'>Hello</span><span style='color: rgb(0, 0, 0);'>&nbsp;{{fromName}},</span></p><p><span id='isPasted' style='color: rgb(0, 0, 0); font-family: 'Times New Roman'; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>You have missed a call from&nbsp;</span><span style='color: rgb(0, 0, 0);'>&nbsp;{{fromEmail}}</span></p><p><span style='color: rgb(0, 0, 0);'>View Calls ,{{action}}</span></p><p><br></p><p><span style='color: rgb(0, 0, 0);'>Happy trading!</span></p><p><br></p><p><span style='color: rgb(0, 0, 0);'>Regards,</span></p><p><span style='color: rgb(0, 0, 0);'>{{organization_name}}.</span></p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p><span style='color: rgb(0, 0, 0);'>Hello</span><span style='color: rgb(0, 0, 0);'>&nbsp;{{fromName}},</span></p><p><span id='isPasted' style='color: rgb(0, 0, 0); font-family: 'Times New Roman'; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>You have missed a call from&nbsp;</span><span style='color: rgb(0, 0, 0);'>&nbsp;{{fromEmail}}</span></p><p><span style='color: rgb(0, 0, 0);'>View Calls ,{{action}}</span></p><p><br></p><p><span style='color: rgb(0, 0, 0);'>Happy trading!</span></p><p><br></p><p><span style='color: rgb(0, 0, 0);'>Regards,</span></p><p><span style='color: rgb(0, 0, 0);'>{{organization_name}}.</span></p><p><br></p></body></html>",
      },
    ],
    template: "missed-call-notification",
    type: "o2o-core",
  },
  {
    variables: {
      subject: [],
      content: ["first_name "],
    },
    subject: [
      {
        en: "Domain Verified!!",
      },
      {
        fr: "Domain Verified!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hello,{{first_name}}</p><p>Your custom domain has been verified.</p><p><br></p><p>Enjoy!</p><p>The O2O Events team</p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hello,{{first_name}}</p><p>Your custom domain has been verified.</p><p><br></p><p>Enjoy!</p><p>The O2O Events team</p></body></html>",
      },
    ],
    template: "domain-verified-notification",
    type: "o2o-core",
  },
  {
    variables: {
      subject: [],
      content: ["first_name "],
    },
    subject: [
      {
        en: "Domain Verification Failed!!",
      },
      {
        fr: "Domain Verification Failed!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hello,{{first_name}}</p><p>Your custom domain verification has failed.</p><p><br></p><p>Enjoy!</p><p>The O2O Events team</p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hello,{{first_name}}</p><p>Your custom domain verification has failed.</p><p><br></p><p>Enjoy!</p><p>The O2O Events team</p></body></html>",
      },
    ],
    template: "domain-verified-failed-notification",
    type: "o2o-core",
  },
  {
    variables: {
      subject: [],
      content: ["name", "reciever_name"],
    },
    subject: [
      {
        en: "You received new messages from supplier. Please check your messages",
      },
      {
        fr: "You received new messages from supplier. Please check your messages",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hello{{reciever_name}}</p><p>Hello,{{name}}</p><p>Your request will be forwarded to the most suitable suppliers and they will get in touch with you shortly</p><p>You can edit or update this request by logging&nbsp;into your dashboard</p><p>Your Request Details</p><p>Log In &amp; Manage RFQ</p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hello{{reciever_name}}</p><p>Hello,{{name}}</p><p>Your request will be forwarded to the most suitable suppliers and they will get in touch with you shortly</p><p>You can edit or update this request by logging&nbsp;into your dashboard</p><p>Your Request Details</p><p>Log In &amp; Manage RFQ</p></body></html>",
      },
    ],
    template: "supplier-enquiry-reply-notification",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["product_name", "reciever_name", "supplier", "action_link"],
    },
    subject: [
      {
        en: "You have received a quote for {{product_name}}",
      },
      {
        fr: "You have received a quote for {{product_name}}",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hello{{reciever_name}},</p><p>You have received a quote for{{product_name}}</p><p>{{supplier}}has responded to your quotation request, please LOG IN to your dashboard and review the proposal. You can respond to the supplier, accept or ask for more information from the dashboard.</p><p>Your Quotation Details</p><p>SEE THE OFFER &ndash;{{action_link}}></p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hello{{reciever_name}},</p><p>You have received a quote for{{product_name}}</p><p>{{supplier}}has responded to your quotation request, please LOG IN to your dashboard and review the proposal. You can respond to the supplier, accept or ask for more information from the dashboard.</p><p>Your Quotation Details</p><p>SEE THE OFFER &ndash;{{action_link}}></p><p><br></p></body></html>",
      },
    ],
    template: "supplier-responded-to-rfq",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["owner_name", "business_name"],
    },
    subject: [
      {
        en: "Business deleted succesfully!!",
      },
      {
        fr: "Business deleted succesfully!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{owner_name}}</p><p>Business has been deleted as below.</p><p>Business Name:{{business_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{owner_name}}</p><p>Business has been deleted as below.</p><p>Business Name:{{business_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "business-delete-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["owner_name", "business_name"],
    },
    subject: [
      {
        en: "Business have successfully updated!!",
      },
      {
        fr: "Business have successfully updated!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{owner_name}}</p><p>Your business has been updated as below.</p><p>Name:{{business_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{owner_name}}</p><p>Your business has been updated as below.</p><p>Name:{{business_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "business-update-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["business_name", "owner_name"],
    },
    subject: [
      {
        en: "Business have successfully created!!",
      },
      {
        fr: "Business have successfully created!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{owner_name}}</p><p>Your business has been created as below.</p><p>Business Name:{{business_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{owner_name}}</p><p>Your business has been created as below.</p><p>Business Name:{{business_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "business-create-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["firstname", "business_name"],
    },
    subject: [
      {
        en: "Subscription Cancelled Successfully",
      },
      {
        fr: "Subscription Cancelled Successfully",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html> <head> <title>Subscription Cancelled Successfully</title> </head> <body>Hi {{firstname}}, Your subscription to business {{business_name}} was cancelled successful. <br> Thank you </body></html>",
      },
      {
        fr: "<!DOCTYPE html><html> <head> <title>Subscription Cancelled Successfully</title> </head> <body>Hi {{firstname}}, Your subscription to business {{business_name}} was cancelled successful. <br> Thank you </body></html>",
      },
    ],
    template: "cancel-subscription-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["name", "email"],
    },
    subject: [
      {
        en: "Profile updated successfully!!",
      },
      {
        fr: "Profile updated successfully!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{name}}</p><p>Your profile has been updated successfully for the following account</p><p>Username :{{email}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{name}}</p><p>Your profile has been updated successfully for the following account</p><p>Username :{{email}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "update-profile-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["role", "name"],
    },
    subject: [
      {
        en: "Business Person have successfully created!!",
      },
      {
        fr: "Business Person have successfully created!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{name}}</p><p>Team member have added to the bussiness.</p><p>Role:{{role}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><head> <title></title></head><body> <p>Hi ,{{name}}</p><p>Team member have added to the bussiness.</p><p>Role:{{role}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "businessPerson-createOrupdate-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["name", "email", "token", "base_path"],
    },
    subject: [
      {
        en: "Your email has been updated!!",
      },
      {
        fr: "Your email has been updated!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><head> <title></title></head><body spellcheck='false'> <p>Hi ,{{name}}</p><p>Your email has been updated as below.</p><p><a href='{{action_link}}'>Click here to verify the email</a></p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><head> <title></title></head><body spellcheck='false'> <p>Hi ,{{name}}</p><p>Your email has been updated as below.</p><p><a href='{{action_link}}'>Click here to verify the email</a></p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "change-email-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["name", "email"],
    },
    subject: [
      {
        en: "Password updated successfully!!",
      },
      {
        fr: "Password updated successfully!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{name}}</p><p>Your password has been updated successfully for the following account</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{name}}</p><p>Your password has been updated successfully for the following account</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "change-password-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["name", "action_link"],
    },
    subject: [
      {
        en: "You have successfully registered!!",
      },
      {
        fr: "You have successfully registered!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><head> <title></title></head><body><p>Hi ,{{name}}</p><p>You have successfully registered.</p><p>Please verify your email :</p><p><a href='{{action_link}}'>Click here to verify the email</a></p><p>Happy Trading!!</p><p>Regards.</p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><head> <title></title></head><body><p>Hi ,{{name}}</p><p>You have successfully registered.</p><p>Please verify your email :</p><p><a href='{{action_link}}'>Click here to verify the email</a></p><p>Happy Trading!!</p><p>Regards.</p></body></html>",
      },
    ],
    template: "account-registered-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["name", "action_link"],
    },
    subject: [
      {
        en: "Reset your password!!",
      },
      {
        fr: "Reset your password!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{name}}</p><p>Someone has requested a new password for your account</p><p>If you didn&apos;t make this request, just ignore this email. If you&apos;d like to proceed :</p><p><a href='{{action_link}}'>Click here to reset the password</a></p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{name}}</p><p>Someone has requested a new password for your account</p><p>If you didn&apos;t make this request, just ignore this email. If you&apos;d like to proceed :</p><p><a href='{{action_link}}'>Click here to reset the password</a></p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "forgot-password-reset",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["owner_name", "product_name"],
    },
    subject: [
      {
        en: "Product added successfully!!",
      },
      {
        fr: "Product added successfully!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>Product has added to the bussiness.</p><p>Product Name:{{product_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>Product has added to the bussiness.</p><p>Product Name:{{product_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "product-add-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["owner_name", "product_name"],
    },
    subject: [
      {
        en: "Product updated successfully!!",
      },
      {
        fr: "Product updated successfully!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>Product has been updated to the bussiness.</p><p>Product Name:{{product_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>Product has been updated to the bussiness.</p><p>Product Name:{{product_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "product-update-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["owner_name", "product_name"],
    },
    subject: [
      {
        en: "Product deleted successfully!!",
      },
      {
        fr: "Product deleted successfully!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>Product has been deleted to the bussiness.</p><p>Product Name:{{product_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>Product has been deleted to the bussiness.</p><p>Product Name:{{product_name}}</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "product-delete-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["owner_name"],
    },
    subject: [
      {
        en: "RFQ added successfully!!",
      },
      {
        fr: "RFQ added successfully!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>RFQ has added successfully.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>RFQ has added successfully.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "rfq-add-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["owner_name"],
    },
    subject: [
      {
        en: "RFQ updated successfully!!",
      },
      {
        fr: "RFQ updated successfully!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>RFQ has updated successfully.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>RFQ has updated successfully.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "rfq-update-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["owner_name"],
    },
    subject: [
      {
        en: "RFQ deleted successfully!!",
      },
      {
        fr: "RFQ deleted successfully!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>RFQ has deleted successfully.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body><p>Hi ,{{owner_name}}</p><p>RFQ has deleted successfully.</p><p>Happy Trading!!</p><p>Regards.</p><p><br></p></body></html>",
      },
    ],
    template: "rfq-delete-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["action_link"],
    },
    subject: [
      {
        en: "You have successfully registered!!",
      },
      {
        fr: "You have successfully registered!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body> <p>Complete profiles are the first ones to receive inquires and get matched with the right leads<br>It's easy to be found, just update your Profile</p><p>Add Category</p><p>Add business description</p><p>Address,Contact details,phone number</p><p>Add videos</p><p>Add photos </p><p>Upload certifications </p><p>Upload products</p><p>Create offers</p><p>Update your News Feed Regularly<br>Profiles with regular updates, news, offers on the activity feed engage more audience.</p><p>Update Your Profile Now</p><p>If You Need Assistance, We're fere for you<a href='{{action_link}}' target='_blank'> Go to your dashboard, chat support is on your lower right!</a>Keep an eye out of our emails. They're full of useful information and special offers to help your business grow.</p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body> <p>Complete profiles are the first ones to receive inquires and get matched with the right leads<br>It's easy to be found, just update your Profile</p><p>Add Category</p><p>Add business description</p><p>Address,Contact details,phone number</p><p>Add videos</p><p>Add photos </p><p>Upload certifications </p><p>Upload products</p><p>Create offers</p><p>Update your News Feed Regularly<br>Profiles with regular updates, news, offers on the activity feed engage more audience.</p><p>Update Your Profile Now</p><p>If You Need Assistance, We're fere for you<a href='{{action_link}}' target='_blank'> Go to your dashboard, chat support is on your lower right!</a>Keep an eye out of our emails. They're full of useful information and special offers to help your business grow.</p></body></html>",
      },
    ],
    template: "supplier-registered-success",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["receiver_name", "sender_name", "action_link", "company_name"],
    },
    subject: [
      {
        en: "You have been received a connection request!!",
      },
      {
        fr: "You have been received a connection request!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html> <body> Hi{{receiver_name}},<br><p> You have been received a connection request from{{sender_name}}<br>To accept the connection request <a href='{{action_link}}'> Click here</a></p>Happy Trading. Regards,{{company_name}}</body></html>",
      },
      {
        fr: "<!DOCTYPE html><html> <body> Hi{{receiver_name}},<br><p> You have been received a connection request from{{sender_name}}<br>To accept the connection request <a href='{{action_link}}'> Click here</a></p>Happy Trading. Regards,{{company_name}}</body></html>",
      },
    ],
    template: "new-connection-request",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: ["receiver_name", "sender_name", "event_name", "company_name"],
    },
    subject: [
      {
        en: "You have been received an invitation!!",
      },
      {
        fr: "You have been received an invitation!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html> <body> Hi{{receiver_name}}, <p>You have been received an invitation from{{sender_name}}to register to{{event_name}}.</p><p> To register to the event <a href='{{action_link}}'> Click here</a></p><p>Happy Trading.</p><p> Regards,{{company_name}}</p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html> <body> Hi{{receiver_name}}, <p>You have been received an invitation from{{sender_name}}to register to{{event_name}}.</p><p> To register to the event <a href='{{action_link}}'> Click here</a></p><p>Happy Trading.</p><p> Regards,{{company_name}}</p></body></html>",

      },
    ],
    template: "register-invitation",
    type: "o2o-event",
  },
  {
    recurring : {
      status : true,
      period : "daily"
    },
    variables: {
      subject: [],
      content: ["company", "supplier_name"],
    },
    subject: [
      {
        en: "Meeting reminder!!",
      },
      {
        fr: "Meeting reminder!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body> <p>Your meeting request is successfully sent to the exhibitor{{company}}. As soon as the exhibitor responds, you will receive outcome via email. LOG IN your dashboard and manage meetings.</p><p>Timeline: 1 day before meeting</p><p>GO TO DASHBOARD</p><p>Your Meeting Request Details.</p><p>Exhibitor Name</p><p>Category</p><p>Meeting Date</p><p>Meeting Time</p><p><span style='font-size:14pt;color:#ff0000;'>Duration</span><span>-30minutes</span></p><p>Exhibition</p><p>Venue</p><p>Booth Number</p><p>Get To Know{{supplier_name}}Better Product From{{supplier_name}},</p><p>Before the meeting explore the supplier profile, products and know more about what the suppliers can offer. Enquiry information about the products and organize sample inspections at the expo.</p><p>VISIT SUPPLIER PROFILE</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body> <p>Your meeting request is successfully sent to the exhibitor{{company}}. As soon as the exhibitor responds, you will receive outcome via email. LOG IN your dashboard and manage meetings.</p><p>Timeline: 1 day before meeting</p><p>GO TO DASHBOARD</p><p>Your Meeting Request Details.</p><p>Exhibitor Name</p><p>Category</p><p>Meeting Date</p><p>Meeting Time</p><p><span style='font-size:14pt;color:#ff0000;'>Duration</span><span>-30minutes</span></p><p>Exhibition</p><p>Venue</p><p>Booth Number</p><p>Get To Know{{supplier_name}}Better Product From{{supplier_name}},</p><p>Before the meeting explore the supplier profile, products and know more about what the suppliers can offer. Enquiry information about the products and organize sample inspections at the expo.</p><p>VISIT SUPPLIER PROFILE</span></p></body></html>",
      },
    ],
    template: "meeting-reminder-1day",
    type: "o2o-event",
  },
  {
    recurring : {
      status : true,
      period : "30minutes"
    },
    variables: {
      subject: [],
      content: ["company", "supplier_name"],
    },
    subject: [
      {
        en: "Meeting reminder!!",
      },
      {
        fr: "Meeting reminder!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body> <p>Your meeting request is successfully sent to the exhibitor{{company}}. As soon as the exhibitor responds, you will receive outcome via email. LOG IN your dashboard and manage meetings.</p><p>Timeline: 30 minutes before meeting</p><p>GO TO DASHBOARD</p><p>Your Meeting Request Details.</p><p>Exhibitor Name</p><p>Category</p><p>Meeting Date</p><p>Meeting Time</p><p><span style='font-size:14pt;color:#ff0000;'>Duration</span><span>-30minutes</span></p><p>Exhibition</p><p>Venue</p><p>Booth Number</p><p>Get To Know{{supplier_name}}Better Product From{{supplier_name}},</p><p>Before the meeting explore the supplier profile, products and know more about what the suppliers can offer. Enquiry information about the products and organize sample inspections at the expo.</p><p>VISIT SUPPLIER PROFILE</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body> <p>Your meeting request is successfully sent to the exhibitor{{company}}. As soon as the exhibitor responds, you will receive outcome via email. LOG IN your dashboard and manage meetings.</p><p>Timeline: 30 minutes before meeting</p><p>GO TO DASHBOARD</p><p>Your Meeting Request Details.</p><p>Exhibitor Name</p><p>Category</p><p>Meeting Date</p><p>Meeting Time</p><p><span style='font-size:14pt;color:#ff0000;'>Duration</span><span>-30minutes</span></p><p>Exhibition</p><p>Venue</p><p>Booth Number</p><p>Get To Know{{supplier_name}}Better Product From{{supplier_name}},</p><p>Before the meeting explore the supplier profile, products and know more about what the suppliers can offer. Enquiry information about the products and organize sample inspections at the expo.</p><p>VISIT SUPPLIER PROFILE</span></p></body></html>",
      },
    ],
    template: "meeting-reminder-30minutes",
    type: "o2o-event",
  },
  {
    recurring : {
      status : true,
      period : "10minutes"
    },
    variables: {
      subject: [],
      content: ["company", "supplier_name"],
    },
    subject: [
      {
        en: "Meeting reminder!!",
      },
      {
        fr: "Meeting reminder!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body> <p>Your meeting request is successfully sent to the exhibitor{{company}}. As soon as the exhibitor responds, you will receive outcome via email. LOG IN your dashboard and manage meetings.</p><p>Timeline: 10 minutes before meeting</p><p>GO TO DASHBOARD</p><p>Your Meeting Request Details.</p><p>Exhibitor Name</p><p>Category</p><p>Meeting Date</p><p>Meeting Time</p><p><span style='font-size:14pt;color:#ff0000;'>Duration</span><span>-30minutes</span></p><p>Exhibition</p><p>Venue</p><p>Booth Number</p><p>Get To Know{{supplier_name}}Better Product From{{supplier_name}},</p><p>Before the meeting explore the supplier profile, products and know more about what the suppliers can offer. Enquiry information about the products and organize sample inspections at the expo.</p><p>VISIT SUPPLIER PROFILE</span></p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body> <p>Your meeting request is successfully sent to the exhibitor{{company}}. As soon as the exhibitor responds, you will receive outcome via email. LOG IN your dashboard and manage meetings.</p><p>Timeline: 10 minutes before meeting</p><p>GO TO DASHBOARD</p><p>Your Meeting Request Details.</p><p>Exhibitor Name</p><p>Category</p><p>Meeting Date</p><p>Meeting Time</p><p><span style='font-size:14pt;color:#ff0000;'>Duration</span><span>-30minutes</span></p><p>Exhibition</p><p>Venue</p><p>Booth Number</p><p>Get To Know{{supplier_name}}Better Product From{{supplier_name}},</p><p>Before the meeting explore the supplier profile, products and know more about what the suppliers can offer. Enquiry information about the products and organize sample inspections at the expo.</p><p>VISIT SUPPLIER PROFILE</span></p></body></html>",
      },
    ],
    template: "meeting-reminder-10minutes",
    type: "o2o-event",
  },
  {
    recurring : {
      status : true,
      period : "weekly"
    },
    variables: {
      subject: [],
      content: ["name", "price", "action_link", "product_name", "MOQ"],
    },
    subject: [
      {
        en: "Weekly selection!!",
      },
      {
        fr: "Weekly selection!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><body> <p><span style='font-weight: 400;'>Hello{{name}}</span></p><p>Here's your weekly selection of top trending items just for you.</p><p><span style='font-weight: 400;'>Explore All</span></p><p>{{product_name}}</p><p>{{MOQ}}</p><p>{{price}}</p><p><a href='{{action_link}}'>Contact</a> Supplier</p></body></html>",
      },
      {
        fr: "<!DOCTYPE html><html><body> <p><span style='font-weight: 400;'>Hello{{name}}</span></p><p>Here's your weekly selection of top trending items just for you.</p><p><span style='font-weight: 400;'>Explore All</span></p><p>{{product_name}}</p><p>{{MOQ}}</p><p>{{price}}</p><p><a href='{{action_link}}'>Contact</a> Supplier</p></body></html>",
      },
    ],
    template: "weekly-selection-products-visitor",
    type: "o2o-event",
  },
  {
    variables: {
      subject: [],
      content: [
        "name",
        "event_site",
        "action_link",
        "supplier_name",
        "category",
        "country",
      ],
    },
    subject: [
      {
        en: "Recommended products just for you!!",
      },
      {
        fr: "Recommended products just for you!!",
      },
    ],
    content: [
      {
        en: "<!DOCTYPE html><html><p>Hello{{name}}</p><p>Thank you for sourcing on{{event_site}}. Based on the items you recently viewed, we put together a selection of recommended products just for you.</p><p><strong>POPULAR SUPPLIERS</strong></p><p>BEST MATCHING SUPPLIERS</p><p>SET UP MEETINGS, CONNECT, CALL, OR CHAT</p><p>{{supplier_name}}</p><p>{{category}}</p><p>{{country}}</p><p><a href='{{action_link}}'>View</a> Profile</p></html>",
      },
      {
        fr: "<!DOCTYPE html><html><p>Hello{{name}}</p><p>Thank you for sourcing on{{event_site}}. Based on the items you recently viewed, we put together a selection of recommended products just for you.</p><p><strong>POPULAR SUPPLIERS</strong></p><p>BEST MATCHING SUPPLIERS</p><p>SET UP MEETINGS, CONNECT, CALL, OR CHAT</p><p>{{supplier_name}}</p><p>{{category}}</p><p>{{country}}</p><p><a href='{{action_link}}'>View</a> Profile</p></html>",
      },
    ],
    template: "supplier-recommendation-products",
    type: "o2o-event",
  },
  
])
  .then((docs) => {
    console.log("data added", docs);
  })
  .catch((err) => {
    console.log(err);
  });
