/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./Exceptions/ArgumentException", "./Exceptions/ArgumentNullException"], factory);
    }
})(function (require, exports) {
    "use strict";
    var ArgumentException_1 = require("./Exceptions/ArgumentException");
    var ArgumentNullException_1 = require("./Exceptions/ArgumentNullException");
    var VOID0 = void 0, DOT = '.', KEY = 'key', VALUE = 'value', ITEM = 'item', ITEM_1 = ITEM + '[1]', ITEM_KEY = ITEM + DOT + KEY, ITEM_VALUE = ITEM + DOT + VALUE, INVALID_KVP_MESSAGE = 'Invalid type.  Must be a KeyValuePair or Tuple of length 2.', CANNOT_BE_UNDEFINED = 'Cannot equal undefined.';
    function isKeyValuePair(kvp) {
        return kvp && kvp.hasOwnProperty(KEY) && kvp.hasOwnProperty(VALUE);
    }
    exports.isKeyValuePair = isKeyValuePair;
    function assertKey(key, name) {
        if (name === void 0) { name = ITEM; }
        assertNotUndefined(key, name + DOT + KEY);
        if (key === null)
            throw new ArgumentNullException_1.default(name + DOT + KEY);
        return key;
    }
    exports.assertKey = assertKey;
    function assertTuple(tuple, name) {
        if (name === void 0) { name = ITEM; }
        if (tuple.length != 2)
            throw new ArgumentException_1.default(name, 'KeyValuePair tuples must be of length 2.');
        assertKey(tuple[0], name);
    }
    exports.assertTuple = assertTuple;
    function assertNotUndefined(value, name) {
        if (value === VOID0)
            throw new ArgumentException_1.default(name, CANNOT_BE_UNDEFINED);
        return value;
    }
    exports.assertNotUndefined = assertNotUndefined;
    function extractKeyValue(item, to) {
        var _ = this, key, value;
        if (item instanceof Array) {
            assertTuple(item);
            key = item[0];
            value = assertNotUndefined(item[1], ITEM_1);
        }
        else if (isKeyValuePair(item)) {
            key = assertKey(item.key);
            value = assertNotUndefined(item.value, ITEM_VALUE);
        }
        else {
            throw new ArgumentException_1.default(ITEM, INVALID_KVP_MESSAGE);
        }
        return to(key, value);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = extractKeyValue;
});
//# sourceMappingURL=KeyValueExtract.js.map