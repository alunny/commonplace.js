// helper functions that extend native Function object

	// takes a decorator function, returns a function that calls this with the decorator
	// decorator should always return a function that modifies original
	// a(1) == 1
	// b = function(fn) { return function() { 
	//											return 2 + fn.apply(this,Array.prototype.slice.call(arguments)); } 
	// 									}
	// c = a.decorate(b);
	// c(1) == 3
	Function.prototype.decorate = function(decorator) { 
		return decorator(this);
	};