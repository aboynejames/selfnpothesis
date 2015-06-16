/*
* check the default selfNpothesis component sections are in order
* casperjs test test/ --baseUrl=http://localhost/ll/selfnpothesis/src/index.html 
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: The Npothesis component base section layout");

casper.start(baseUrl, function() {
	this.test.comment('holder npothesis stream attention elements');
	casper.test.assertExists('#npothesis', 'the element exists');

});

casper.then(function() {
	this.test.comment('live stream');
	casper.test.assertExists('#stream-npothesis', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('visualisation map');
	casper.test.assertExists('#map-npothesis', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('summary of active steam elelment');
	casper.test.assertExists('#active-npothesis', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('new Npothesis section');
	casper.test.assertExists('#build-npothesis', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('sensor section');
	casper.test.assertExists('#sensor', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('add sensor section');
	casper.test.assertExists('#add-sensor', 'the element exists');
	
});

casper.run(function() {

	this.test.done();

});