require(["modules/HelloWorld"], function(HelloWorld) {
	"use strict";

    describe("Hello World test", function() {

        it("Says hello", function() {
            var hello = HelloWorld.sayHello();
            expect(hello).toBe("Hello World!");
        });

    });
});