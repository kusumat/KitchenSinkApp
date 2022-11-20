it("testcase2", async function() {
	await kony.automation.playback.waitFor(["FrmImg","Button0b6bf2bd266dd41"]);
	kony.automation.button.click(["FrmImg","Button0b6bf2bd266dd41"]);
	kony.automation.button.click(["FrmImg","Button0f281c8c48da74b"]);
});