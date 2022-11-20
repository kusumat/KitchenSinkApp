it("testcase4", async function() {
	await kony.automation.playback.waitFor(["FrmHome","txt"]);
	kony.automation.button.click(["FrmHome","CopyButton0d0fd782a04ac49"]);
	await kony.automation.playback.waitFor(["FrmDPUsage","Button0f281c8c48da74b"]);
	kony.automation.button.click(["FrmDPUsage","Button0f281c8c48da74b"]);
});