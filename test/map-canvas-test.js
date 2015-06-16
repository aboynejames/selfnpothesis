/*
* check steam elements
* casperjs test test/ --baseUrl=http://localhost/ll/selfnpothesis/src/index.html 
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: interactive canvas map of Npothesis");

casper.start(baseUrl, function() {
	this.test.comment('map section is visible');
	this.mouseEvent('click', '#npothesis-map-view');
	casper.test.assertVisible('#map-npothesis', 'the element exists');

});

casper.then(function() {
	this.test.comment('check canvas map element exists');
	casper.test.assertExists('#map-npothesis-canvas');
	
});

casper.run(function() {

	this.test.done();

});