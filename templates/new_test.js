// require: helpers/Test.js
// require: helpers/<% scrap_name %>.js

// test description
	
	// two references: one for internal scraps (var), one for export (this)
	this.<% scrap_name %>_Test = function <% scrap_name %>_Test() {
		Lunny.prototype.constructor_only.call(this);
		
		// constructor code
	};
	var <% scrap_name %>_Test = this.<% scrap_name %>_Test;
	
	// prototype attributes go here
	this.<% scrap_name %>_Test.prototype = new Test();