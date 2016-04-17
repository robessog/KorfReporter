/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../Types'], factory);
    }
})(function (require, exports) {
    'use strict';
    var Types_1 = require('../Types');
    function dispose() {
        var disposables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            disposables[_i - 0] = arguments[_i];
        }
        disposeTheseInternal(disposables, false);
    }
    exports.dispose = dispose;
    function disposeWithoutException() {
        var disposables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            disposables[_i - 0] = arguments[_i];
        }
        return disposeTheseInternal(disposables, true);
    }
    exports.disposeWithoutException = disposeWithoutException;
    function disposeThese(disposables, trapExceptions) {
        return disposables && disposables.length
            ? disposeTheseInternal(disposables.slice(), trapExceptions)
            : null;
    }
    exports.disposeThese = disposeThese;
    function using(disposable, closure) {
        try {
            return closure(disposable);
        }
        finally {
            disposeSingle(disposable, false);
        }
    }
    exports.using = using;
    function disposeSingle(disposable, trapExceptions) {
        if (Types_1.default.of(disposable).member('dispose').isFunction) {
            if (trapExceptions) {
                try {
                    disposable.dispose();
                }
                catch (ex) {
                    return ex;
                }
            }
            else
                disposable.dispose();
        }
        return null;
    }
    function disposeTheseInternal(disposables, trapExceptions, index) {
        if (index === void 0) { index = 0; }
        var exceptions;
        var len = disposables.length;
        for (; index < len; index++) {
            var next = disposables[index];
            if (!next)
                continue;
            if (trapExceptions) {
                var ex = disposeSingle(next, true);
                if (ex) {
                    if (!exceptions)
                        exceptions = [];
                    exceptions.push(ex);
                }
            }
            else {
                var success = false;
                try {
                    disposeSingle(next, false);
                    success = true;
                }
                finally {
                    if (!success && index + 1 < len) {
                        disposeTheseInternal(disposables, false, index + 1);
                    }
                }
                if (!success)
                    break;
            }
        }
        return exceptions;
    }
});
//# sourceMappingURL=Utility.js.map