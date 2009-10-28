// json serializing and parsing javascript objects
// called "Json" to differentiate from window.JSON

	this.Json = function Json() {
	};
	var Json = this.Json;
	
	this.Json.prototype.serialize = function(obj) {
		var jp = Json.prototype;
		var serializeObject = function(obj) {
			var str = "{";
			for (x in obj) {
				str += serializeString(x) + ":";
				str += jp.serialize(obj[x]) + ",";
			}
			return str.replace(/,$/,"}");
		};
		var serializeArray = function(arr) {
			var str = "[";
			arr.each(function(i) { str += jp.serialize(this[i]) + ","; });
			return str.replace(/,$/,"]");
		};
		var serializeString = function(str) {
			var template = "\"_\"";
			return template.replace("_",str);
		};
		switch (typeof obj) {
			case "object":
				if (obj instanceof Array) return serializeArray(obj);
				else if (obj == null) return "null";
				else {
					return serializeObject(obj);
				}
				break;
			case "string":
				return serializeString(obj);
				break;
			default:
				return obj.toString();
		}
	};