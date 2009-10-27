// require: helpers/Array.js

// test library
// by convention, unit tests in subclasses should be named "test_"...
// this allows them to be called by run_unit_tests()

	this.Test = function Test() {
		Test.prototype.prefix_test = new RegExp(/^test_.+$/);
		
		Test.prototype.log = function(msg) {
			console.log(msg);
		};
	
		Test.prototype.assert = function(bool,msg) {
			if (!bool) throw Error("FAIL " + msg);
			var success = "WIN ";
			this.log(success + msg);
		};
		
		Test.prototype.error = function(msg) {
			this.log(msg); // fix color
		};
		
		Test.prototype.init = function() {
			// placeholder - should be overwritten in specific test classes
		};
		
		Test.prototype.run_unit_tests = function() {
			var tests = new Array(), key;
			var call_test = function(i) {
				try {
					this[tests[i]].call(this);
					this.log(tests[i] + " Passed");
				} catch(e) {
					this.error(e);
					this.log(tests[i] + " Failed");
				}
			};
			
			for (key in this) {
				if (key == key.match(this.prefix_test)) tests.push(key);
			};
			
			this.init();
			tests.each(call_test, this);
		};		
	}