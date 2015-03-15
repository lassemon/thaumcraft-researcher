define(['jquery'], function(jQuery){
	"use strict";

	var HelloWorld = function(){
		var me = this;

		me.sayHello = function(){
			return "Hello World!";
		};
	};

	return new HelloWorld();
});

