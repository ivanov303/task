const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============

config.specs = [
    './specs/test.spec.js'
];

config.port = 4723;
config.capabilities = [
    {
        platformName: 'iOS',
        maxInstances: 1,
        'appium:deviceName': 'iPhone 11',
        'appium:platformVersion': '14.5',
        'appium:automationName': 'XCUITest',
        'appium:app': '/Users/Denys_Azanov/Library/Developer/Xcode/DerivedData/WebDriverAgent-alwvnomvwrdtzoaxbbkniqrpcdpp/Build/Products/Debug-iphonesimulator/IntegrationApp.app',
        'appium:noReset': true,
        // 'appium:fullReset': false,
    },
];

exports.config = config;
