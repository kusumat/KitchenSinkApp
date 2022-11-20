describe("SampleTestSuite", function() {
	it("sampleTestCase", async function() {
		kony.automation.button.click(["FrmHome","Button0a62e5b1d141f46"]);
		await kony.automation.playback.waitFor(["FrmImg","Button0f281c8c48da74b"]);
		kony.automation.button.click(["FrmImg","Button0f281c8c48da74b"]);
		await kony.automation.playback.waitFor(["FrmHome","CopyButton0g9e27435a4fe4d"]);
		kony.automation.button.click(["FrmHome","CopyButton0g9e27435a4fe4d"]);
		await kony.automation.playback.waitFor(["FrmBrowLocal","Button0f281c8c48da74b"]);
		kony.automation.button.click(["FrmBrowLocal","Button0f281c8c48da74b"]);
	});
});