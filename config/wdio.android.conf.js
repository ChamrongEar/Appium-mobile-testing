const { config } = require('./wdio.shared.conf');

// ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    config.runner= 'local',
    config.port = 4723;
    // config.before = async () => {
    //     await driver.execute("mobile: activateApp", {
    //       appId: "com.nham24.nham24_dev",
    //     });
    //   };
      

    // ====================
    // Specs
    // ====================
    // config.specs= [
    //     './automationbro/test/specs/android/nham24superapp.js'
    // ];

    // ====================
    // Capabilities
    // ====================
    config.capabilities= [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Pixel 4',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        // "appium:autoGrantPermissions": true,
        // "appium:noReset": true,
        // "appium:skipLogin": true,
        // "appium:appPackage": "com.nham24.nham24_dev",
        // "appium:appActivity": "com.nham24.nham24_dev.MainActivity",
    }];

    // config.after = async () => {
    //     await driver.terminateApp("com.nham24.nham24_dev");
    //   };
      

    exports.config =config;