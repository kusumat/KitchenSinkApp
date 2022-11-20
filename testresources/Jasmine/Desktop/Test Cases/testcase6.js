it("testcase6", async function() {
	await kony.automation.playback.waitFor(["FrmHome","CopyButton0cc71e0810b1447"]);
	kony.automation.button.click(["FrmHome","CopyButton0cc71e0810b1447"]);
	await kony.automation.playback.waitFor(["FrmImg","Button0f281c8c48da74b"]);
	kony.automation.button.click(["FrmImg","Button0f281c8c48da74b"]);
	await kony.automation.playback.waitFor(["FrmHome","CopyButton0c3ae73c8b2cc45"]);
	kony.automation.button.click(["FrmHome","CopyButton0c3ae73c8b2cc45"]);
	await kony.automation.playback.waitFor(["FrmAnim","Button0e39a479a22e141"]);
	kony.automation.button.click(["FrmAnim","Button0e39a479a22e141"]);
	kony.automation.button.click(["FrmAnim","Button0e39a479a22e141"]);
	kony.automation.button.click(["FrmAnim","Button0e39a479a22e141"]);
	kony.automation.button.click(["FrmAnim","CopyButton0ad1613abc78f40"]);
	await kony.automation.playback.waitFor(["FrmHome","CopyButton0g9e27435a4fe4d"]);
	kony.automation.button.click(["FrmHome","CopyButton0g9e27435a4fe4d"]);
	await kony.automation.playback.waitFor(["FrmBrowLocal","Button0f281c8c48da74b"]);
	kony.automation.button.click(["FrmBrowLocal","Button0f281c8c48da74b"]);
});