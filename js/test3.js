// JavaScript Document
var Test3 = (function(module) {
	module.DoIt = function (resultObject) {
			resultObject.prepend(Date() + '<br/>');
	};
	
	return module;
} (Test3 || {}));