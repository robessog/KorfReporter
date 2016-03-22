"use strict";
var MyTest = (function () {
    function MyTest() {
        this.heading = 'Welcome to Aurelia!';
        this.firstName = 'John';
        this.lastName = 'Doe';
    }
    Object.defineProperty(MyTest.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    MyTest.prototype.submit = function () {
        alert("Welcome, " + this.fullName + "!");
    };
    return MyTest;
}());
exports.MyTest = MyTest;
