/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
System.register(['../../Compare'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var Values;
    var SortContext;
    return {
        setters:[
            function (Values_1) {
                Values = Values_1;
            }],
        execute: function() {
            SortContext = (function () {
                function SortContext(_next, _comparer, _order) {
                    if (_comparer === void 0) { _comparer = Values.compare; }
                    if (_order === void 0) { _order = 1; }
                    this._next = _next;
                    this._comparer = _comparer;
                    this._order = _order;
                }
                Object.defineProperty(SortContext.prototype, "order", {
                    get: function () { return this._order; },
                    enumerable: true,
                    configurable: true
                });
                SortContext.prototype.generateSortedIndexes = function (source) {
                    var _this = this;
                    if (source == null)
                        return [];
                    var result = source.map(function (s, i) { return i; });
                    result.sort(function (a, b) { return _this.compare(source[a], source[b]); });
                    return result;
                };
                SortContext.prototype.compare = function (a, b) {
                    var _ = this;
                    var d = _._comparer(a, b);
                    if (d == 0 && _._next)
                        return _._next.compare(a, b);
                    return _._order * d;
                };
                return SortContext;
            }());
            exports_1("default", SortContext);
        }
    }
});
//# sourceMappingURL=SortContext.js.map