// require: helpers/Json.js
// helper functions that extend native Array

	Array.prototype.next_wrap = function(i) {
		return (i+1==this.length ? this[0] : this[i+1]);
	};
	
	Array.prototype.each = function(fn,cntxt) {
		var context = cntxt || this;
		for (x in this) if (!isNaN(parseInt(x))) fn.call(context,x);
	};
	
	Array.prototype.isEqual = function(arr) {
		return Json.prototype.serialize(this) == Json.prototype.serialize(arr);
	};