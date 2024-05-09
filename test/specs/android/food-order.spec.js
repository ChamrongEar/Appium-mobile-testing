const foodOrder = require("../../screenobjects/android/food-order.spec");

describe("foodOrder", () => {
    it("find element", async () => {
        await foodOrder.NHAM24APP.click();
        await driver.pause(10000);
        await foodOrder.YourLocation.click();
        await foodOrder.ChooseLocation.click();
        await foodOrder.ServiceFood.click();
        await driver.pause(5000);
        await foodOrder.Scrolling;
        await foodOrder.ShushiiShop.click();
        await driver.pause(6000);
        await foodOrder.ShushiiGategory.click();
        await driver.pause(3000);
        await foodOrder.ShushiiItem.click();
        await driver.pause(7000);
        await foodOrder.ShushiiOrderNow.click();
        await foodOrder.ShushiiProceedToPay.click();
        await foodOrder.ShushiiCashOnDelivery.click();
        await driver.pause(2000);
        await foodOrder.ShushiiPlaceOrderNow.click();
        await driver.pause(5000);
        await foodOrder.BackBtn.click();
        await driver.pause(5000);
        // assertion order
        await expect(foodOrder.OrderPlaceArray1).toBeExisting();
    });
});