const addNoteScreen = require("../../screenobjects/android/add-note.screen.spec");
const registerOTP = require("/Users/earchamrong/Desktop/automationbro/test/screenobjects/android/register-otp-screen.spec.js")

describe("registerOTP", () => {
    it("find element", async () => {
        await addNoteScreen.NHAM24APP.click();
        await registerOTP.registerBtn();
        await registerOTP.chooseCountry();
        await registerOTP.inputCountry();
        await registerOTP.clickonCountry();
        await registerOTP.inputPhonenumber();
        await registerOTP.getOTPBtn();
        await registerOTP.inputOtp();
        await registerOTP.continueBtn();
        await registerOTP.inputFirstname();
        await registerOTP.inputLastname();
        await registerOTP.inputPassword();
        await registerOTP.inputTelegram();
        await addNoteScreen.Scrolling;
        await registerOTP.Continue();

    
    });
});