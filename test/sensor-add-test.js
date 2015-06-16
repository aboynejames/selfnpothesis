/*
* check steam elements
* casperjs test test/ --baseUrl=http://localhost/ll/selfnpothesis/src/index.html 
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: add new sensor");

casper.start(baseUrl, function() {
	this.test.comment('sensor section hidden');
	casper.test.assertNotVisible('#sensor', 'not visible');

});

casper.then(function() {
	this.test.comment('click on add sensor');
	this.mouseEvent('click', '#add-sensor-new');
	
});

casper.then(function() {
	this.test.comment('sensor section now visible and active');
	casper.test.assertVisible('#displaybox', 'the element visible');
	
});


casper.run(function() {

	this.test.done();

});