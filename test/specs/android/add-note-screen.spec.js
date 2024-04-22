const addNoteScreen = require("../../screenobjects/android/add-note.screen.spec");

describe("AddNoteSpec", () => {
    it("find element", async () => {
        await addNoteScreen.NHAM24APP.click();
        await driver.pause(10000);
        await addNoteScreen.YourLocation.click();
        await addNoteScreen.ChooseLocation.click();
        await addNoteScreen.ServiceFood.click();
        await driver.pause(5000);
        await addNoteScreen.Scrolling;
        await addNoteScreen.ShushiiShop.click();
        await driver.pause(6000);
        await addNoteScreen.ShushiiGategory.click();
        await driver.pause(3000);
        await addNoteScreen.ShushiiItem.click();
        await driver.pause(7000);
        await addNoteScreen.ShushiiOrderNow.click();
        await addNoteScreen.ShushiiProceedToPay.click();
        await addNoteScreen.ShushiiCashOnDelivery.click();
        await driver.pause(2000);
        await addNoteScreen.ShushiiPlaceOrderNow.click();
        await driver.pause(5000);
        await addNoteScreen.BackBtn.click();
        await driver.pause(5000);
        // assertion order
        await expect(addNoteScreen.OrderPlaceArray1).toBeExisting();
    });
});