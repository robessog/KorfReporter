/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)};!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","../../Compare","./DictionaryBase"],t)}(function(t,e){"use strict";var r=t("../../Compare"),o=t("./DictionaryBase"),n=void 0,a=function(t){function e(){t.apply(this,arguments),this._count=0,this._map={}}return __extends(e,t),e.prototype.containsKey=function(t){return t in this._map},e.prototype.containsValue=function(t){var e=this._map,o=r.areEqual;for(var n in e)if(e.hasOwnProperty(n)&&o(e[n],t))return!0;return!1},e.prototype.getValue=function(t){return this._map[t]},e.prototype.setValue=function(t,e){var r=this,o=r._map,a=o[t];return a!==e?(e===n?t in o&&(delete o[t],--r._count):(t in o||++r._count,o[t]=e),r._onValueUpdate(t,e,a),!0):!1},e.prototype.importMap=function(t){var e=this;return e.handleUpdate(function(){var r=!1;for(var o in t)t.hasOwnProperty(o)&&e.setValue(o,t[o])&&(r=!0);return r})},e.prototype.toMap=function(t){var e=this,r={};for(var o in e._map)if(e._map.hasOwnProperty(o)){var a=e._map[o];t&&(a=t(o,a)),a!==n&&(r[o]=a)}return r},e.prototype.getKeys=function(){var t=this,e=[];for(var r in t._map)t._map.hasOwnProperty(r)&&e.push(r);return e},e.prototype.getValues=function(){var t=this,e=[];for(var r in t._map)t._map.hasOwnProperty(r)&&e.push(t._map[r]);return e},e.prototype.getCount=function(){return this._count},e}(o["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a});
//# sourceMappingURL=StringKeyDictionary.js.map
