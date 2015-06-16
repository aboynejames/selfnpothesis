/*
* check the visualisation of Npothesis between stream and map vews
* casperjs test test/ --baseUrl=http://localhost/ll/selfnpothesis/src/index.html 
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: Section between stream and map view of Npothesis");

casper.start(baseUrl, function() {
	this.test.comment('holder npothesis stream attention elements');
	casper.test.assertExists('#select-npothesis-view', 'the element exists');

});

casper.then(function() {
	this.test.comment('live stream');
	casper.test.assertVisible('#stream-npothesis');
	
});

casper.then(function() {
	this.test.comment('live stream');
	casper.test.assertNotVisible('#map-npothesis');
	
});

casper.then(function() {
	this.test.comment('check both button are there');
	casper.test.assertExists('#npothesis-stream-view');
	casper.test.assertExists('#npothesis-map-view');
	
});

casper.then(function() {
	this.test.comment('select the map view ');
	this.mouseEvent('click', '#npothesis-map-view');
	casper.test.assertNotVisible('#stream-npothesis', 'the element not visable');	
	casper.test.assertVisible('#map-npothesis', 'the element visable');	
	
});

casper.then(function() {
	this.test.comment('select the map view ');
	this.mouseEvent('click', '#npothesis-stream-view');
	casper.test.assertNotVisible('#map-npothesis', 'the element not visable');	
	casper.test.assertVisible('#stream-npothesis', 'the element visable');	
	
});

casper.run(function() {

	this.test.done();

});