/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../../Compare","../../Types"],function(r,e,n,t){"use strict";function a(r,e){if(r&&e&&r===e||!r&&!e)return!0;if(!r||!e)return!1;var n=r.length;return n!==e.length?!1:0===n?!0:n}function u(r,e,t){if(void 0===t&&(t=n.areEqual),!r)throw new Error("ArgumentNullException: 'arrays' cannot be null.");if(r.length<2)throw new Error("Cannot compare a set of arrays less than 2.");for(var a=r[0],u=0,i=r.length;i>u;++u)if(!o(a,r[u],e,t))return!1;return!0}function o(r,e,u,o){void 0===o&&(o=n.areEqual);var i=a(r,e);if(t["default"].isBoolean(i))return i;for(var f=0;i>f;++f)if(!o(r[f],e[f],u))return!1;return!0}function i(r,e){if(!r)return null;if(Array.isArray(r))return r.slice();var n,t=r.length;t>65536?n=new Array(t):(n=[],n.length=t);for(var a=0;t>a;a++)n[a]=r[a];return n.sort(e),n}function f(r,e,u){void 0===u&&(u=n.compare);var o=a(r,e);if(t["default"].isBoolean(o))return o;r=i(r,u),e=i(e,u);for(var f=0;o>f;++f)if(0!==u(r[f],e[f]))return!1;return!0}e.areAllEqual=u,e.areEqual=o,e.areEquivalent=f});
//# sourceMappingURL=Compare.js.map