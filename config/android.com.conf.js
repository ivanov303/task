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
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Pixel 3',
        'appium:platformVersion': '9',
        'appium:automationName': 'Appium (default)',
        'appium:app': 'androidTest.apk',
        'appium:appActivity': 'SplashActivity',
    },
];

exports.config = config;
