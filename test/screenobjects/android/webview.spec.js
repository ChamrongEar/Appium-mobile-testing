class WebView {
    get expressService() {
        return $('~Express');
    }
    get deliveryTo() {
        return $('//android.view.View[@text="Deliver to"]');
    }
    get deliveryToSaveRecipient() {
        return $('//android.view.View[@text="Rong Eye Care, Khemarak Phumin (Street 130), Boeung Kak Community, Khan Daun Penh, Phnom Penh, 120201, Cambodia"]');
    }
    get parcelType() {
        return $('//android.view.View[@text="Parcel type *"]');
    }
    get parcelTypeDocuments() {
        return $('//android.view.View[@text="Documents"]');
    }
    get btnConfirm() {
        return $('//android.view.View[@text="Confirm"]');
    }
    get proceedToPay() {
        return $('//android.view.View[@text="Proceed to Pay"]');
    }
    get cashOnDelivery() {
        return $('//android.view.View[@text="Cash on Delivery"]');
    }
    get checkoutPay() {
        return $('//android.view.View[@text="Proceed to Pay $ 1.00"]');
    }
    get viewTracking() {
        return $('//android.view.View[@text="View Tracking"]');
    }
    get shareBtn() {
        return $('//android.view.View[@text="Share"]');
    }
    get copyLink() {
        return $('//android.widget.TextView[@text="Copy"]');
    }
    get chrome() {
        return $('~Chrome');
    }
    get searchBar() {
        return $('//android.widget.EditText[@resource-id="com.android.chrome:id/search_box_text"]');
    }
    get searchBarPasteLink() {
        return $('//android.widget.EditText[@resource-id="com.android.chrome:id/url_bar"]');
    }
    async pasteLink() {
        await driver.performActions([
            {
              type: "pointer",
              id: "finger1",
              parameters: { pointerType: "touch" },
              actions: [
                { type: "pointerMove", duration: 0, x: 90, y: 231 },
                { type: "pointerDown", button: 0 },
                { type: "pause", duration: 5000 },
                { type: "pointerUp", button: 0 },
              ],
            },
          ]);
          await driver.pause(2000);
        await $('(//android.view.View[@resource-id="com.android.chrome:id/tile_view_highlight"])[1]').click();
        const pastLink = await this.searchBarPasteLink.getText()
        // get only link 
        const Link = pastLink.replace("Hi! Here is your tracking. Recipient Name: Rong Phone: 010 383 629 Tap on the link below for tracking information: ", "");
        console.log("test", Link);
        await this.searchBarPasteLink.setValue(Link);
        await browser.keys("Enter");
    }

    async newTab() {
        await driver.pause(3000);
        await driver.performActions([
            {
              type: "pointer",
              id: "finger1",
              parameters: { pointerType: "touch" },
              actions: [
                { type: "pointerMove", duration: 1000, x: 901, y: 243 },
                { type: "pointerDown", button: 0 },
                { type: "pause", duration: 100 },
                { type: "pointerUp", button: 0 },
              ],
            },
          ]);
          
        const newTabBrowser = await driver.$("accessibility id:New tab");
        await newTabBrowser.click();
    }
    get trackingView() {
        return $('//android.webkit.WebView[@text="Tracking"]/android.view.View[2]/android.view.View[1]');
    }
}
module.exports = new WebView();