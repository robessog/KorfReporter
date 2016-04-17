/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
System.register([], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var NAME, Exception;
    return {
        setters:[],
        execute: function() {
            NAME = 'Exception';
            Exception = (function () {
                function Exception(message, innerException, beforeSealing) {
                    if (message === void 0) { message = null; }
                    if (innerException === void 0) { innerException = null; }
                    this.message = message;
                    var _ = this;
                    _.name = _.getName();
                    _.data = {};
                    if (innerException)
                        _.data['innerException'] = innerException;
                    if (beforeSealing)
                        beforeSealing(_);
                    Object.freeze(_);
                }
                Exception.prototype.getName = function () { return NAME; };
                Exception.prototype.toString = function () {
                    var _ = this, m = _.message;
                    m = m ? (': ' + m) : '';
                    return '[' + _.name + m + ']';
                };
                Exception.prototype.dispose = function () {
                    var data = this.data;
                    for (var k in data) {
                        if (data.hasOwnProperty(k))
                            delete data[k];
                    }
                };
                return Exception;
            }());
            exports_1("default", Exception);
        }
    }
});
//# sourceMappingURL=Exception.js.map