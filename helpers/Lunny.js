// require: helpers/Array.js

// helper utility object
	
	this.Lunny = function Lunny() {
	};
	var Lunny = this.Lunny;
	
	this.Lunny.prototype.constructor_only = function() { 
		if (!(this instanceof arguments.callee.caller)) throw Error("constructor called as function");
	};