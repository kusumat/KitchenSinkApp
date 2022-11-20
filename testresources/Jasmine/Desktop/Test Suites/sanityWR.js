describe("sanityWR", function() {
	it("testcase1", async function() {
		await kony.automation.playback.waitFor(["FrmHome","Button0a62e5b1d141f46"]);
		kony.automation.button.click(["FrmHome","Button0a62e5b1d141f46"]);
	});
	
	it("testcase2", async function() {
		await kony.automation.playback.waitFor(["FrmImg","Button0b6bf2bd266dd41"]);
		kony.automation.button.click(["FrmImg","Button0b6bf2bd266dd41"]);
		kony.automation.button.click(["FrmImg","Button0f281c8c48da74b"]);
	});
	
	it("testcase3", async function() {
		await kony.automation.playback.waitFor(["FrmHome","CopyButton0c5e7fd42ed0e4a"]);
		kony.automation.button.click(["FrmHome","CopyButton0c5e7fd42ed0e4a"]);
		await kony.automation.playback.waitFor(["FrmCustomWid","CopyButton0bfdda4be05884d"]);
		kony.automation.button.click(["FrmCustomWid","CopyButton0bfdda4be05884d"]);
	});
	
	it("pause", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		var cf = kony.application.getCurrentForm();
			cf.TextField0a4c3a6ab89794c.text = 'Pause';
		// :End User Injected Code Snippet {be7d46ca-e514-2107-17c5-2a3e3b094f90}
	});
	
	it("testcase4", async function() {
		await kony.automation.playback.waitFor(["FrmHome","txt"]);
		kony.automation.button.click(["FrmHome","CopyButton0d0fd782a04ac49"]);
		await kony.automation.playback.waitFor(["FrmDPUsage","Button0f281c8c48da74b"]);
		kony.automation.button.click(["FrmDPUsage","Button0f281c8c48da74b"]);
	});
	
	it("testcase5", async function() {
		await kony.automation.playback.waitFor(["FrmHome","CopyButton0a2513fa9736f46"]);
		kony.automation.button.click(["FrmHome","CopyButton0a2513fa9736f46"]);
		await kony.automation.playback.waitFor(["FrmVideo","Button0f281c8c48da74b"]);
		kony.automation.button.click(["FrmVideo","Button0f281c8c48da74b"]);
	});
	
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
});