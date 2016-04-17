/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
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
        define(["require", "exports", './TimeUnit', './TimeQuantity'], factory);
    }
})(function (require, exports) {
    'use strict';
    var TimeUnit_1 = require('./TimeUnit');
    var TimeQuantity_1 = require('./TimeQuantity');
    var TimeUnitValue = (function (_super) {
        __extends(TimeUnitValue, _super);
        function TimeUnitValue(value, _units) {
            _super.call(this, typeof (value) == 'number'
                ? value
                : getUnitQuantityFrom(value, _units));
            this._units = _units;
            TimeUnit_1.default.assertValid(_units);
        }
        Object.defineProperty(TimeUnitValue.prototype, "value", {
            get: function () {
                return this._quantity;
            },
            set: function (v) {
                this._total = null;
                this._quantity = v;
            },
            enumerable: true,
            configurable: true
        });
        TimeUnitValue.prototype.getTotalMilliseconds = function () {
            return TimeUnit_1.default.toMilliseconds(this._quantity, this._units);
        };
        Object.defineProperty(TimeUnitValue.prototype, "units", {
            get: function () {
                return this._units;
            },
            enumerable: true,
            configurable: true
        });
        TimeUnitValue.prototype.to = function (units) {
            if (units === void 0) { units = this.units; }
            return TimeUnitValue.from(this, units);
        };
        TimeUnitValue.from = function (value, units) {
            if (units === void 0) { units = TimeUnit_1.default.Milliseconds; }
            return new TimeUnitValue(value, units);
        };
        return TimeUnitValue;
    }(TimeQuantity_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TimeUnitValue;
    function getUnitQuantityFrom(q, units) {
        return TimeUnit_1.default.fromMilliseconds(q.getTotalMilliseconds(), units);
    }
});
//# sourceMappingURL=TimeUnitValue.js.map