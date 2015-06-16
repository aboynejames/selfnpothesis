/*
* check steam elements
* casperjs test test/ --baseUrl=http://localhost/ll/selfnpothesis/src/index.html 
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: test each stream element interaction");

casper.start(baseUrl, function() {
	this.test.comment('stream section is visable to start');
	casper.test.assertVisible('#stream-npothesis', 'the element exists');

});

casper.then(function() {
	this.test.comment('check a stream element exists');
	casper.test.assertExists('.stream-element');
	casper.test.assertExists('#stream-npothesis ol > li:first-child');
	
});

casper.then(function() {
	this.test.comment('check a 2nd stream element exists');
	casper.test.assertExists('.stream-element');
	casper.test.assertExists('#stream-npothesis ol > li:nth-child(2)');
	
});

casper.then(function() {
	this.test.comment('check a 3rd stream element exists');
	casper.test.assertExists('.stream-element');
	casper.test.assertExists('#stream-npothesis ol > li:nth-child(3)');
	
});

casper.run(function() {

	this.test.done();

});