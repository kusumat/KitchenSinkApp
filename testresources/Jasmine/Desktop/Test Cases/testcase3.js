it("testcase3", async function() {
	await kony.automation.playback.waitFor(["FrmHome","CopyButton0c5e7fd42ed0e4a"]);
	kony.automation.button.click(["FrmHome","CopyButton0c5e7fd42ed0e4a"]);
	await kony.automation.playback.waitFor(["FrmCustomWid","CopyButton0bfdda4be05884d"]);
	kony.automation.button.click(["FrmCustomWid","CopyButton0bfdda4be05884d"]);
});