/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
System.register(['../Exceptions/InvalidOperationException'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var InvalidOperationException_1;
    var NAME, ObjectDisposedException;
    return {
        setters:[
            function (InvalidOperationException_1_1) {
                InvalidOperationException_1 = InvalidOperationException_1_1;
            }],
        execute: function() {
            NAME = 'ObjectDisposedException';
            ObjectDisposedException = (function (_super) {
                __extends(ObjectDisposedException, _super);
                function ObjectDisposedException(objectName, message, innerException) {
                    if (message === void 0) { message = null; }
                    if (innerException === void 0) { innerException = null; }
                    _super.call(this, message, innerException, function (_) {
                        _.objectName = objectName;
                    });
                }
                ObjectDisposedException.prototype.getName = function () {
                    return NAME;
                };
                ObjectDisposedException.prototype.toString = function () {
                    var _ = this, oName = _.objectName;
                    oName = oName ? ('{' + oName + '} ') : '';
                    return '[' + _.name + ': ' + oName + _.message + ']';
                };
                ObjectDisposedException.throwIfDisposed = function (disposable, objectName, message) {
                    if (disposable.wasDisposed)
                        throw new ObjectDisposedException(objectName, message);
                };
                return ObjectDisposedException;
            }(InvalidOperationException_1.default));
            exports_1("default", ObjectDisposedException);
        }
    }
});
//# sourceMappingURL=ObjectDisposedException.js.map