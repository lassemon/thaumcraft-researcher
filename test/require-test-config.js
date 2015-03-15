"use strict";

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) { // this makes it so that each test file must be in **Spec.js syntax
            tests.push(file);
        }
    }
}

var rootPath = '/base/';
var modulesPath = rootPath + 'app/scripts/modules';

require.config({
	baseUrl: rootPath,
    paths: {
        modules: modulesPath
    },
	deps: tests,
	callback: function(){
		var runKarma = function(){
			window.__karma__.start();
		};
		setTimeout(runKarma, 2000);
	}
});