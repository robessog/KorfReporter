/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './SystemException', '../Text/Utility'], factory);
    }
})(function (require, exports) {
    'use strict';
    var SystemException_1 = require('./SystemException');
    var Utility_1 = require('../Text/Utility');
    var NAME = 'ArgumentException';
    var ArgumentException = (function (_super) {
        __extends(ArgumentException, _super);
        function ArgumentException(paramName, message, innerException, beforeSealing) {
            if (message === void 0) { message = null; }
            if (innerException === void 0) { innerException = null; }
            var pn = paramName ? ('{' + paramName + '} ') : '';
            _super.call(this, Utility_1.trim(pn + message), innerException, function (_) {
                _.paramName = paramName;
                if (beforeSealing)
                    beforeSealing(_);
            });
        }
        ArgumentException.prototype.getName = function () {
            return NAME;
        };
        ArgumentException.prototype.toString = function () {
            var _ = this;
            return '[' + _.name + ': ' + _.message + ']';
        };
        return ArgumentException;
    }(SystemException_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ArgumentException;
});
//# sourceMappingURL=ArgumentException.js.map