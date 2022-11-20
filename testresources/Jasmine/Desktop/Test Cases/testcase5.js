it("testcase5", async function() {
	await kony.automation.playback.waitFor(["FrmHome","CopyButton0a2513fa9736f46"]);
	kony.automation.button.click(["FrmHome","CopyButton0a2513fa9736f46"]);
	await kony.automation.playback.waitFor(["FrmVideo","Button0f281c8c48da74b"]);
	kony.automation.button.click(["FrmVideo","Button0f281c8c48da74b"]);
});