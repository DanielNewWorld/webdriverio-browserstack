exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || "bsuser_pUoTQV",
    key: process.env.BROWSERSTACK_ACCESS_KEY || "JyH2owozyUHLUsjxzgmR",
    host: 'hub.browserstack.com',
    services: [
      ['browserstack']
    ],
    commonCapabilities:{
        "project" : "Marketing Website v2",
        "build" : "alpha_0.1.1",
        'browserstack.debug': 'true',  // for enabling visual logs
        'browserstack.console': 'info',  // to enable console logs at the info level. You can also use other log levels here
        'browserstack.networkLogs': 'true'  // to enable network logs to be logged
      }
  }