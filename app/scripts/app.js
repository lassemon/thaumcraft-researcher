(function(){
	"use strict";

	require(['modules/HelloWorld'], function(HelloWorld){
		console.log(HelloWorld.sayHello());
	});
})();