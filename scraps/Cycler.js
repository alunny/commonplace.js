// require: helpers/Array.js
// require: helpers/Lunny.js

	// creates a new cycler object to cycle through multiple values
	// usage:
	// var m = new Cycler(1,3,4);
	// assert(m.cycle() == 1);
	// assert(m.cycle() == 3);
	// assert(m.cycle() == 4);
	// assert(m.cycle() == 1);

	function Cycler() {
		Lunny.prototype.constructor_only.call(this);
	
		var _fns = new Array(arguments.length);
		for (var i=0; i<arguments.length; i++) {
			_fns[i] = function() { 
				this.cycle = _fns.next_wrap(arguments.callee.i);
				return arguments.callee.val; 
			};
			_fns[i].i = i;
			_fns[i].val = arguments[i];
		};
	
		Cycler.prototype.vals = arguments;
		Cycler.prototype.cycle = function() {
			this.cycle = _fns.next_wrap(0);
			return _fns[0].val;
		}
	};