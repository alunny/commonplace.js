// require statements, of the form "// require: helpers/Array.js"

// scrap description
	
	// two references: one for internal scraps (var), one for export (this)
	// constructor definition
	this.<% scrap_name %> = function <% scrap_name %>() {
		Lunny.prototype.constructor_only.call(this);
		
		// constructor code
	};
	var <% scrap_name %> = this.<% scrap_name %>;
	
	// prototype attributes go here
	this.<% scrap_name %>.prototype.className = "<% scrap_name %>" // sample, not required