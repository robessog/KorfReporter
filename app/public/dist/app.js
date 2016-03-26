System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var App;
    return {
        setters:[],
        execute: function() {
            class App {
                constructor() {
                    this.heading = 'Welcome to Aurelia!';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                    this.message = 'Hello from my királyságos aurelia!';
                }
                get fullName() {
                    return `${this.firstName} ${this.lastName}`;
                }
                submit() {
                    alert(`Welcome, ${this.fullName}!`);
                }
                changeMessage() {
                    this.message = 'changed 3';
                }
            }
            exports_1("App", App);
        }
    }
});
