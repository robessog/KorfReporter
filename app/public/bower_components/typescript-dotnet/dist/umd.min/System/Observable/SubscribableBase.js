/*!
 * @author electricessence / https://github.com/electricessence/
 * Based upon .NET source.
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Source: http://referencesource.microsoft.com/#mscorlib/system/IObserver.cs
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Collections/LinkedList","../Disposable/Utility","./Subscription"],e)}(function(e,t){"use strict";var i=e("../Collections/LinkedList"),r=e("../Disposable/Utility"),s=e("./Subscription"),o=function(){function e(){this.__subscriptions=new i["default"]}return e.prototype._getSubscribers=function(){return this.__subscriptions.toArray().map(function(e){return e.subscriber})},e.prototype._findEntryNode=function(e){for(var t=this.__subscriptions.first;t&&t.value.subscriber!==e;)t=t.next;return t},e.prototype.subscribe=function(e){var t=this,i=t._findEntryNode(e);if(i)return i.value;var r=new s["default"](t,e);return t.__subscriptions.add(r),r},e.prototype.unsubscribe=function(e){var t=this._findEntryNode(e);if(t){var i=t.value;t.remove(),i.dispose()}},e.prototype._unsubscribeAll=function(e){void 0===e&&(e=!1);var t=this,i=t.__subscriptions,s=i.toArray(),o=e?s.map(function(e){return e.subscriber}):null;return i.clear(),r.disposeThese(s),o},e.prototype.unsubscribeAll=function(){this._unsubscribeAll()},e.prototype.dispose=function(){this._unsubscribeAll()},e}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o});
//# sourceMappingURL=SubscribableBase.js.map