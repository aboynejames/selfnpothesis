/*
* check steam elements
* casperjs test test/ --baseUrl=http://localhost/ll/selfnpothesis/src/index.html 
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: test Dapp connectivity section");

casper.start(baseUrl, function() {
	this.test.comment('connectivity section is visable to start');
	casper.test.assertExists('#connectivity', 'the element exists');
	casper.test.assertVisible('#connectivity', 'the element visible');

});

casper.then(function() {
	this.test.comment('check types of connectivity');
	casper.test.assertExists('#dshare');
	casper.test.assertExists('#sshare');
	casper.test.assertExists('#help-online');
	
});

casper.then(function() {
	this.test.comment('click on dshare');
	this.mouseEvent('click', '#dshare');
	
});

casper.then(function() {
	this.test.comment('check apis status');
	casper.test.assertVisible('#bitcoin-api-status');
	casper.test.assertVisible('#ethereum-api-status');
	casper.test.assertVisible('#Dsensor-api-status');
	casper.test.assertVisible('#maidsafe-api-status');
	
});

casper.run(function() {

	this.test.done();

});