const addNoteScreen = require("../../screenobjects/android/add-note.screen.spec");
const forgotPasswordUsingPhone = require("../../screenobjects/android/forgot-password-screen.spec");
describe("forgotPassword", () => {
    it("Login with new password", async () => {
        await addNoteScreen.NHAM24APP.click();
        await forgotPasswordUsingPhone.logInBtn();
        await forgotPasswordUsingPhone.forgotPW();
        await forgotPasswordUsingPhone.usingPhone();
        await forgotPasswordUsingPhone.continueBtn();
        await forgotPasswordUsingPhone.resetCode();
        await forgotPasswordUsingPhone.resetNewpassword();
        await forgotPasswordUsingPhone.resetBtn();
        await forgotPasswordUsingPhone.logInnew();
    });
});