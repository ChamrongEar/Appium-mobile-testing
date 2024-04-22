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
        
        'appium:platformName': 'iOS',
        'appium:platformVersion': '15.8',
        'appium:deviceName': 'iPhone 7',
        'appium:udid': '3acfff8f60217fb34adf9dd33a648dd0a4d394ae', 
        'appium:bundleId': 'com.nham24.nham24',
        'appium:automationName': 'XCUITest',
        'appium:showXcodeLog': true 
        
    }];

    // config.after = async () => {
    //     await driver.terminateApp("com.nham24.nham24_dev");
    //   };
      

    exports.config =config;