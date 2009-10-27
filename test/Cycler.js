// require: helpers/Test.js
// require: scraps/Cycler.js

	this.Cycler_Test = function Cycler_Test() {
		var ctp = Cycler_Test.prototype;
		
		ctp.init = function() {
			this.cycler_A = new Cycler(1,2);
			this.cycler_A_list = [1,2];
			this.cycler_B = new Cycler("a","b","c");
			this.cycler_B_list = ["a","b","c"];
		}
		
		ctp.test_vals = function() {
			this.assert(this.cycler_A.vals.isEqual(this.cycler_A_list), "cycler A values recorded correctly");
			this.assert(this.cycler_B.vals.isEqual(this.cycler_B_list), "cycler B values recorded correctly");
			return 1; // automate this in some way
		};
		
		ctp.test_cycle = function() {
			this.assert(this.cycler_A.cycle() == this.cycler_A_list[0], "first cycle performs correctly");
			this.assert(this.cycler_A.cycle() == this.cycler_A_list[1], "second cycle performs correctly");
			this.assert(this.cycler_A.cycle() == this.cycler_A_list[0], "third cycle performs correctly");
			return 1;
		};
		
		ctp.test_reset = function() {
			this.assert(this.cycler_B.cycle() == this.cycler_B_list[0], "first cycle performs correctly");
			this.assert(this.cycler_B.cycle() == this.cycler_B_list[1], "second cycle performs correctly");
			this.cycler_B.reset();
			this.assert(this.cycler_B.cycle() == this.cycler_B_list[0], "cycle returns correctly after reset");
			return 1;
		};
		
	};
	
	this.Cycler_Test.prototype = new Test();