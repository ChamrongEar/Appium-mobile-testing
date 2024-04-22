

class registerOTP {
    async registerBtn() {
        await driver.pause(7000);
        await $('//android.widget.TextView[@text="Register"]').click();
    }
    async chooseCountry() {
        await driver.pause(5000);
        await $('//android.widget.TextView[@text=""]').click();
    }
    async inputCountry() {
        // await $('//android.widget.EditText[@text="Search"]').click();
        const inputText = await driver.$('//android.widget.EditText[@text="Search"]');
        // Input text into the element
        await inputText.setValue('Indonesia');
    }
    async clickonCountry() {
        await driver.pause(2000);
        await $('//android.widget.TextView[@text="Indonesia"]').click();
        // // await $('//android.view.ViewGroup[@content-desc="🇵🇱, Poland, +48"]').click();
    }
    async inputPhonenumber() {
        await driver.pause(2000);
        const inputPhonenumber = await driver.$('//android.widget.EditText[@text="Phone number"]');
        // Input text into the element
        await inputPhonenumber.setValue('87752586186');
    }
    async getOTPBtn() {
        await $('//android.view.ViewGroup[@content-desc="Get OTP Code"]/android.view.ViewGroup').click();
        await driver.pause(7000);
        // open the remember app
        // await driver.pause(5000);
    }
    async inputOtp() {
      const inputOtp = await driver.$('//android.widget.EditText[@text="OTP code"]');
      await inputOtp.setValue('123456');
    }
    async switchToChrome() {
          // // switch app to google
        await driver.execute("mobile: activateApp", {
          appId: "com.android.chrome",
        });
        await driver.pause(3000);
    }
    async refreshBtn() {
      await driver.pause(10000);
      await $('//android.widget.Button[@text="refresh"]').click();
    }
    async backToUserApp() {
        // open the remember app nham24
        await driver.execute("mobile: activateApp", {
          appId: "com.nham24.nham24_dev",
        });
        await driver.pause(3000);
    }
        // // switch app to nham24 app by not remember screen
        // await driver.startActivity("com.nham24.nham24_dev","com.nham24.nham24_dev.MainActivity");
    get touchHoldScreen() {
        return driver.performActions([
            {
              type: "pointer",
              id: "finger1",
              parameters: { pointerType: "touch" },
              actions: [
                { type: "pointerMove", duration: 0, x: 200, y: 803 },
                { type: "pointerDown", button: 0 },
                { type: "pause", duration: 5000 },
                { type: "pointerUp", button: 0 },
              ],
            },
          ]);
    }
    async continueBtn() {
        await driver.pause(3000);
        await $('//android.view.ViewGroup[@content-desc="Continue"]/android.view.ViewGroup').click();
    }
    async inputFirstname() {
      await driver.pause(3000);
      const firstName = await driver.$('//android.widget.EditText[@text="First Name"]');
      await firstName.setValue('Indo');
    }
    async inputLastname() {
      await driver.pause(3000);
      const lastName = await driver.$('//android.widget.EditText[@text="Last Name"]');
      await lastName.setValue('User');
    }
    async inputPassword() {
      await driver.pause(3000);
      const password = await driver.$('//android.widget.EditText[@text="Password"]');
      await password.setValue('123456');
    }
    async inputTelegram() {
      await driver.pause(3000);
      await $('(//android.widget.TextView[@text=""])[1]').click();
      await driver.pause(3000);
      const searchBar = await driver.$('//android.widget.EditText[@text="Search"]');
      await searchBar.setValue('Indonesia');
      await driver.pause(3000);
      await $('//android.widget.TextView[@text="Indonesia"]').click();
      await driver.pause(3000);
      const telegram = await driver.$('(//android.widget.EditText[@text="Phone number"])[1]');
      await telegram.setValue('87752586186');
    }
    async Continue() {
      await driver.pause(3000);
      await $('//android.widget.TextView[@text="CONTINUE"]').click();
    }
  }
module.exports = new registerOTP();