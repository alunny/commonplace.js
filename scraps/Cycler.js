// require: helpers/Array.js
// require: helpers/Lunny.js

	// creates a new cycler object to cycle through multiple values
	// cycle(): cycles to the next value
	// reset(): sets the next cycle to return the first value
	// usage:
	// var m = new Cycler(1,3,4);
	// assert(m.cycle() == 1);
	// assert(m.cycle() == 3);
	// assert(m.cycle() == 4);
	// assert(m.cycle() == 1);
	// m.reset()
	// assert(m.cycle() == 1)

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
		
		var _first_fn = function() {
			this.cycle = _fns.next_wrap(0);
			return _fns[0].val;
		};
	
		this.vals = Array.prototype.slice.call(arguments);
		this.cycle = _first_fn;
		this.reset = function() {
			this.cycle = _first_fn;
		};
	};
	Cycler.prototype.vals = new Array();
	Cycler.prototype.cycle = function() {};
	Cycler.prototype.reset = function() {};
	