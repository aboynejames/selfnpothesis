/*
* check steam elements
* casperjs test test/ --baseUrl=http://localhost/ll/selfnpothesis/src/index.html 
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: build a new Npothesis");

casper.start(baseUrl, function() {
	casper.test.assertNotVisible('#build-npothesis', 'not visible');

});

casper.then(function() {
	this.test.comment('click on Build Npothesis');
	this.mouseEvent('click', '#npothesis-add');
	
});

casper.then(function() {
	this.test.comment('build Npothesis is now visible and active');
	casper.test.assertVisible('#displaybox', 'the element visible');
	
});


casper.run(function() {

	this.test.done();

});