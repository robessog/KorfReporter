/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
var __extends=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)};!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Exceptions/InvalidOperationException"],e)}(function(e,t){"use strict";var o=e("../Exceptions/InvalidOperationException"),n="ObjectDisposedException",i=function(e){function t(t,o,n){void 0===o&&(o=null),void 0===n&&(n=null),e.call(this,o,n,function(e){e.objectName=t})}return __extends(t,e),t.prototype.getName=function(){return n},t.prototype.toString=function(){var e=this,t=e.objectName;return t=t?"{"+t+"} ":"","["+e.name+": "+t+e.message+"]"},t.throwIfDisposed=function(e,o,n){if(e.wasDisposed)throw new t(o,n)},t}(o["default"]);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i});
//# sourceMappingURL=ObjectDisposedException.js.map
