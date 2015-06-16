buster.spec.expose(); // Make spec functions global

var spec = describe("draws canvas graphics of npothesis map ", function () {
	before(function () {
		
		this.testnpSpace = new selfNpothesisSpace();
	
	});

	it("check object defined", function () {
	   
		buster.assert.defined(selfNpothesisSpace); 
		
	});
	
	it("object is created", function () {
	 
		buster.assert.isObject(this.testnpSpace);
	});
	
	it("start the base canvas drawing", function () {
		
		buster.assert.isFunction(this.testnpSpace.startNpothesisSpace);

	});

	it("start drawing of oval space", function () {
		
		buster.assert.isFunction(this.testnpSpace.drawOval);

	});	
	
});	