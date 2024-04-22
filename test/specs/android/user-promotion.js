describe("nham24driverapp", () => {
    it("promotion", async () => {
        await $('//android.widget.TextView[@text="To Pay"]/following-sibling::android.widget.TextView').getText();
        await $('//android.widget.TextView[contains(@text, "$")]').getText();
        await $('//android.widget.TextView[contains(@text, "$")][2]').getText();
        await $('//android.widget.TextView[contains(@text, "$")][3]').getText();
        await $('//android.widget.TextView[contains(@text, "$")][4]').getText();
        await $('//android.widget.TextView[contains(@text, "$")][5]').getText();
        
    });
});