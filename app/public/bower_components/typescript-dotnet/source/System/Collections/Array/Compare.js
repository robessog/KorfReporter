/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../../Compare', '../../Types'], factory);
    }
})(function (require, exports) {
    "use strict";
    var Values = require('../../Compare');
    var Types_1 = require('../../Types');
    function validateSize(a, b) {
        if (a && b && a === b || !a && !b)
            return true;
        if (!a || !b)
            return false;
        var len = a.length;
        if (len !== b.length)
            return false;
        if (len === 0)
            return true;
        return len;
    }
    function areAllEqual(arrays, strict, equalityComparer) {
        if (equalityComparer === void 0) { equalityComparer = Values.areEqual; }
        if (!arrays)
            throw new Error("ArgumentNullException: 'arrays' cannot be null.");
        if (arrays.length < 2)
            throw new Error("Cannot compare a set of arrays less than 2.");
        var first = arrays[0];
        for (var i = 0, l = arrays.length; i < l; ++i) {
            if (!areEqual(first, arrays[i], strict, equalityComparer))
                return false;
        }
        return true;
    }
    exports.areAllEqual = areAllEqual;
    function areEqual(a, b, strict, equalityComparer) {
        if (equalityComparer === void 0) { equalityComparer = Values.areEqual; }
        var len = validateSize(a, b);
        if (Types_1.default.isBoolean(len))
            return len;
        for (var i = 0; i < len; ++i) {
            if (!equalityComparer(a[i], b[i], strict))
                return false;
        }
        return true;
    }
    exports.areEqual = areEqual;
    function copyAndSort(a, comparer) {
        if (!a)
            return null;
        if (Array.isArray(a))
            return a.slice();
        var len = a.length, b;
        if (len > 65536)
            b = new Array(len);
        else {
            b = [];
            b.length = len;
        }
        for (var i = 0; i < len; i++)
            b[i] = a[i];
        b.sort(comparer);
        return b;
    }
    function areEquivalent(a, b, comparer) {
        if (comparer === void 0) { comparer = Values.compare; }
        var len = validateSize(a, b);
        if (Types_1.default.isBoolean(len))
            return len;
        a = copyAndSort(a, comparer);
        b = copyAndSort(b, comparer);
        for (var i = 0; i < len; ++i) {
            if (comparer(a[i], b[i]) !== 0)
                return false;
        }
        return true;
    }
    exports.areEquivalent = areEquivalent;
});
//# sourceMappingURL=Compare.js.map