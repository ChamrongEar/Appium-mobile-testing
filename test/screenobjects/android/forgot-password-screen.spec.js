
class forgotPasswordUsingPhone {
    async logInBtn() {
        await driver.pause(10000);
        await $('//android.widget.TextView[@text="Login"]').click();
    }
    async forgotPW() {
        await driver.pause(2000);
        await $('//android.widget.TextView[@text="Forgot Password"]').click();
    }
    async usingPhone() {
        await driver.pause(2000);
        await $('//android.widget.TextView[@text="Using phone"]').click();
        await $('//android.widget.TextView[@text=""]').click();
        await driver.pause(2000);
        const inputCountry = await driver.$('//android.widget.EditText[@text="Search"]');
        await inputCountry.setValue('Indonesia');
        await driver.pause(2000);
        await $('//android.widget.TextView[@text="Indonesia"]').click();
        await driver.pause(2000);
        const inputPhonenumber = await driver.$('//android.widget.EditText[@text="12345678"]');
        await inputPhonenumber.setValue('87752586186');
    }
    async continueBtn() {
        await driver.pause(2000);
        await $('//android.widget.TextView[@text="Continue"]').click();
    }
    async resetCode() {
        await driver.pause(2000);
        const code = await driver.$('//android.widget.EditText[@text="******"]');
        await code.setValue(123456);
        await driver.pause(2000);
        await $('//android.widget.TextView[@text="CONTINUE"]').click();
    }
    async resetNewpassword() {
        await driver.pause(5000);
        const inputPW = await driver.$('//android.widget.EditText[@text="Password"]');
        await inputPW.setValue('654321');
        await driver.pause(2000);
        const inputComfirmPW = await driver.$('//android.widget.EditText[@text="Confirm password"]');
        await inputComfirmPW.setValue('654321');
       
    }
    async resetBtn() {
        await driver.pause(3000);
        await $('//android.widget.TextView[@text="RESET"]').click();
        await driver.pause(3000);
        const alert = await driver.$('//android.widget.TextView[@resource-id="android:id/message"]');
        await expect(alert).not.toBeNull();
        // Get the alert message
        const alertMessage = await alert.getText();
        await expect(alertMessage).toBeDisplayed;
        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
    }
    async logInnew() {
        await driver.pause(3000);
        await $('//android.widget.TextView[@text=""]').click();
        const chooseCountry = await driver.$('//android.widget.EditText[@text="Search"]');
        await chooseCountry.setValue('Indonesia');
        await driver.pause(2000);
        await $('//android.widget.TextView[@text="Indonesia"]').click();
        const inputPN = await driver.$('//android.widget.EditText[@text="Phone number"]');
        await inputPN.setValue('87752586186');
        const inputNewPW = await driver.$('//android.widget.EditText[@text="Password"]');
        await inputNewPW.setValue('654321');
        await $('(//android.widget.TextView[@text="LOGIN"])[2]').click();
    }
}
module.exports = new forgotPasswordUsingPhone();