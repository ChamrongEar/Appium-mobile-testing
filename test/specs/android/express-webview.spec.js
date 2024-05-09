const addNoteScreen = require("../../screenobjects/android/food-order.spec");
const WebView = require ("/Users/earchamrong/Desktop/automationbro/test/screenobjects/android/webview.spec.js");

describe("WebView", () => {
    it("find element", async () => {
        await addNoteScreen.NHAM24APP.click();
        await driver.pause(10000);
        await WebView.expressService.click();
        await driver.pause(6000);
        await WebView.deliveryToSaveRecipient.click();
        await WebView.parcelType.click();
        await WebView.parcelTypeDocuments.click();
        await driver.pause(3000);
        await WebView.btnConfirm.click();
        await driver.pause(3000);
        await WebView.proceedToPay.click();
        await driver.pause(3000);
        await WebView.cashOnDelivery.click();
        await driver.pause(1000);
        await WebView.checkoutPay.click();
        await WebView.viewTracking.click();
        await driver.pause(6000);
        await WebView.shareBtn.click();
        await WebView.copyLink.click();
        // terminate app
        await driver.terminateApp("com.nham24.nham24_dev");
        await WebView.chrome.click();
        await WebView.newTab();
        await WebView.searchBar.click();
        await driver.pause(6000);
        await WebView.searchBarPasteLink.click();
        await driver.pause(2000);
        await WebView.pasteLink();
        await expect(WebView.trackingView).toBeDisplayed();
    });
});