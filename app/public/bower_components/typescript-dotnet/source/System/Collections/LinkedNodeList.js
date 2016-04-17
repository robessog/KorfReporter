/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../Text/Utility", "../Exceptions/InvalidOperationException", "../Exceptions/ArgumentException", "../Exceptions/ArgumentNullException"], factory);
    }
})(function (require, exports) {
    'use strict';
    var TextUtility = require("../Text/Utility");
    var InvalidOperationException_1 = require("../Exceptions/InvalidOperationException");
    var ArgumentException_1 = require("../Exceptions/ArgumentException");
    var ArgumentNullException_1 = require("../Exceptions/ArgumentNullException");
    var LinkedNodeList = (function () {
        function LinkedNodeList() {
            this._first = null;
            this._last = null;
        }
        Object.defineProperty(LinkedNodeList.prototype, "first", {
            get: function () {
                return this._first;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LinkedNodeList.prototype, "last", {
            get: function () {
                return this._last;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LinkedNodeList.prototype, "count", {
            get: function () {
                var next = this._first, i = 0;
                while (next) {
                    i++;
                    next = next.next;
                }
                return i;
            },
            enumerable: true,
            configurable: true
        });
        LinkedNodeList.prototype.forEach = function (action) {
            var current = null, next = this.first, index = 0;
            do {
                current = next;
                next = current && current.next;
            } while (current
                && action(current, index++) !== false);
        };
        LinkedNodeList.prototype.clear = function () {
            var _ = this, n, cF = 0, cL = 0;
            n = _._first;
            _._first = null;
            while (n) {
                cF++;
                var current = n;
                n = n.next;
                current.next = null;
            }
            n = _._last;
            _._last = null;
            while (n) {
                cL++;
                var current = n;
                n = n.previous;
                current.previous = null;
            }
            if (cF !== cL)
                console.warn('LinkedNodeList: Forward versus reverse count does not match when clearing. Forward: ' + cF + ", Reverse: " + cL);
            return cF;
        };
        LinkedNodeList.prototype.dispose = function () {
            this.clear();
        };
        LinkedNodeList.prototype.contains = function (node) {
            return this.indexOf(node) != -1;
        };
        LinkedNodeList.prototype.getNodeAt = function (index) {
            if (index < 0)
                return null;
            var next = this._first, i = 0;
            while (next && index < i++) {
                next = next.next;
            }
            return next;
        };
        LinkedNodeList.prototype.indexOf = function (node) {
            if (node && (node.previous || node.next)) {
                var index = 0;
                var c, n = this._first;
                do {
                    c = n;
                    if (c === node)
                        return index;
                    index++;
                } while ((n = c && c.next));
            }
            return -1;
        };
        LinkedNodeList.prototype.removeFirst = function () {
            return this.removeNode(this._first);
        };
        LinkedNodeList.prototype.removeLast = function () {
            return this.removeNode(this._last);
        };
        LinkedNodeList.prototype.removeNode = function (node) {
            if (node == null)
                throw new ArgumentNullException_1.default('node');
            var _ = this;
            var prev = node.previous, next = node.next, a = false, b = false;
            if (prev)
                prev.next = next;
            else if (_._first == node)
                _._first = next;
            else
                a = true;
            if (next)
                next.previous = prev;
            else if (_._last == node)
                _._last = prev;
            else
                b = true;
            if (a !== b) {
                throw new ArgumentException_1.default('node', TextUtility.format("Provided node is has no {0} reference but is not the {1} node!", a ? "previous" : "next", a ? "first" : "last"));
            }
            return !a && !b;
        };
        LinkedNodeList.prototype.addNode = function (node) {
            this.addNodeAfter(node);
        };
        LinkedNodeList.prototype.addNodeBefore = function (node, before) {
            assertValidDetached(node);
            var _ = this;
            if (!before) {
                before = _._first;
            }
            if (before) {
                var prev = before.previous;
                node.previous = prev;
                node.next = before;
                before.previous = node;
                if (prev)
                    prev.next = node;
                if (before == _._first)
                    _._last = node;
            }
            else {
                _._first = _._last = node;
            }
        };
        LinkedNodeList.prototype.addNodeAfter = function (node, after) {
            assertValidDetached(node);
            var _ = this;
            if (!after) {
                after = _._last;
            }
            if (after) {
                var next = after.next;
                node.next = next;
                node.previous = after;
                after.next = node;
                if (next)
                    next.previous = node;
                if (after == _._last)
                    _._last = node;
            }
            else {
                _._first = _._last = node;
            }
        };
        LinkedNodeList.prototype.replace = function (node, replacement) {
            if (node == null)
                throw new ArgumentNullException_1.default('node');
            assertValidDetached(replacement, 'replacement');
            var _ = this;
            replacement.previous = node.previous;
            replacement.next = node.next;
            if (node.previous)
                node.previous.next = replacement;
            if (node.next)
                node.next.previous = replacement;
            if (node == _._first)
                _._first = replacement;
            if (node == _._last)
                _._last = replacement;
        };
        return LinkedNodeList;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = LinkedNodeList;
    function assertValidDetached(node, propName) {
        if (propName === void 0) { propName = 'node'; }
        if (node == null)
            throw new ArgumentNullException_1.default(propName);
        if (node.next || node.previous)
            throw new InvalidOperationException_1.default("Cannot add a node to a LinkedNodeList that is already linked.");
    }
});
//# sourceMappingURL=LinkedNodeList.js.map