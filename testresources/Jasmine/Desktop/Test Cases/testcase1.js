it("testcase1", async function() {
	await kony.automation.playback.waitFor(["FrmHome","Button0a62e5b1d141f46"]);
	kony.automation.button.click(["FrmHome","Button0a62e5b1d141f46"]);
});