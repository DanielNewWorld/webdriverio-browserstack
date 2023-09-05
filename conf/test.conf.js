const parallelConfig = {
  user: 'bsuser_pUoTQV',
  key: 'JyH2owozyUHLUsjxzgmR',
  hostname: 'hub.browserstack.com',
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
        browserVersion: 'latest'
      }
    },
    {
      browserName: 'Firefox',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
        browserVersion: 'latest-beta'
      }
    },
    {
      browserName: 'android',
      'bstack:options': {
        deviceName: 'Samsung Galaxy S23 Ultra',
        osVersion: '13.0',
        deviceOrientation: 'portrait'
      }
    }
  ],
  commonCapabilities: {
    'bstack:options': {
      buildName: 'browserstack-build-1'
    }
  },
  maxInstances: 10
};
const { config: baseConfig } = require('./base.conf.js');
exports.config = { ...baseConfig, ...parallelConfig };
// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
});