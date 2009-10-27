// clone of range from Python's standard library

	this.range = function range(a, b, c) {
		switch (arguments.length) {
			case 1: return arguments.callee(0,a,1);
			case 2: return arguments.callee(a,b,1);
		}		
		var length = Math.ceil((b-a)/c), r = new Array(length);
		
		for (var i=0; i<length; i++) {
			r[i] = (c*i)+a;
		}
		return r;
	};