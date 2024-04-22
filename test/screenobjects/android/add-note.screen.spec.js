class AddNoteScreen {
    get NHAM24APP() {
        // find element by accessibility id
        return $('~NHAM24-DEV');
    }
    get YourLocation() {
        // find element by xpath
        return $('//android.widget.TextView[@text="YOUR LOCATION"]');
    }
    get ChooseLocation() {
        // find element by xpath
        return $('//android.widget.TextView[@text="WORK"]');
    }
    get ServiceFood() {
        return $('//android.view.ViewGroup[@content-desc="FOOD"]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView');
    }
    get Scrolling(){
        return driver.performActions([
            {
              type: "pointer",
              id: "finger1",
              parameters: { pointerType: "touch" },
              actions: [
                { type: "pointerMove", duration: 0, x: 902, y: 1949 },
                { type: "pointerDown", button: 0 },
                { type: "pointerMove", duration: 1000, x: 902, y: 1500 },
                { type: "pointerMove", duration: 1000, x: 902, y: 1000 },
                { type: "pointerMove", duration: 1000, x: 902, y: 400 },
                { type: "pointerUp", button: 0 },
              ],
            },
          ]);
    }
    get ShushiiShop(){
        return $('//android.view.ViewGroup[@content-desc="Shushii and sea food,  $7 ~ 35Mins   4.6 (44)"]/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView');
    }
    get ShushiiGategory() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView');
    }
    get ShushiiItem() {
        return $('(//android.widget.TextView[@text=""])[2]');
    }
    get ShushiiOrderNow() {
        return $('//android.widget.TextView[@text="ORDER NOW"]');
    }
    get ShushiiProceedToPay() {
        return $('//android.widget.TextView[@text="PROCEED TO PAY"]');
    }
    get ShushiiCashOnDelivery() {
        return $('//android.widget.TextView[@text="Cash on Delivery"]');
    }
    get ShushiiPlaceOrderNow() {
        return $('//android.widget.TextView[@text="PLACE THE ORDER NOW"]');
    }
    get BackBtn() {
        return $('//android.widget.TextView[@text=""]');
    }
    get OrderPlaceArray1() {
        return $('//android.widget.TextView[@text="Order Placed"][1]');
    }
    
}

module.exports = new AddNoteScreen();