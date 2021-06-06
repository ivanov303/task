exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    smsCenter: 'mvp',
    runner: 'local',
    framework: 'mocha',
    mochaOpts: {
        timeout: 1100000,
    },
    sync: true,
    logLevel: 'silent',
    // logLevel: 'error',
    deprecationWarnings: true,
    bail: 0,
    path: '/wd/hub/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 100000,
    connectionRetryCount: 2,
    reporters: [ 'spec' ],

    // ====================
    // Appium Configuration
    // ====================
    appium: {
        args: {
            address: '0.0.0.0',
            port: 4723,},
        command: 'appium'
    },
    screenshotPath: 'reports/screenShots',

    // ====================
    // Some hooks
    // ====================
    beforeSession: (config, capabilities, specs) => {
        require('@babel/register');
    },

    async onPrepare (config) {

    },

    onComplete () {
        driver.closeApp();
    },

    beforeTest () {
        console.log('TEST STARTED');
        driver.launchApp();
    },

    async afterTest () {

    },
};
