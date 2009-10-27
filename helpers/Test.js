// test library
// by convention, unit tests in subclasses should be named "test_"...
// this allows them to be called by run_unit_tests()

	function Test() {
		Test.prototype.prefix_test = new RegExp(/^test_.+$/);
		
		Test.prototype.log = function(msg) {
			console.log(msg);
		};
	
		Test.prototype.assert = function(bool,msg) {
			var success = bool ? "WIN: " : "FAIL: "; // throw error if fail?
			this.log(success + msg);
		};
		
		Test.prototype.error = function(msg) {
			this.log("ERROR: " + msg);
		};
		
		Test.prototype.init = function() {
			// placeholder - should be overwritten in specific test classes
		};
		
		Test.prototype.run_unit_tests = function() {
			var tests = new Array(), key;
			for (key in this) {
				if (key == key.match(this.prefix_test)) tests.push(key);
			};
			
			this.init();
			try {
				for (var i=0; i<tests.length; i++) {
					this[tests[i]].call(this);
				}; 
			} catch(e) {
				debugger;
			}
		};

			
		}
	}