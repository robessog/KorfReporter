/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../../Types","../../Integer","../../Compare","../../Exceptions/ArgumentException","../../Exceptions/ArgumentNullException","../../Exceptions/ArgumentOutOfRangeException"],function(e,t,n,r,a,i,f,o){"use strict";function u(e){r["default"].assert(e,"length");var t;return e>65536?t=new Array(e):(t=[],t.length=e),t}function l(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=1/0),e?h(e,u(Math.min(n,Math.max(e.length-t,0))),t,0,n):e}function h(e,t,n,r,a){if(void 0===n&&(n=0),void 0===r&&(r=0),void 0===a&&(a=1/0),!e)throw new f["default"]("source",q);if(!t)throw new f["default"]("destination",q);if(0>n)throw new o["default"]("sourceIndex",n,F);var i=e.length;if(n>=i)throw new o["default"]("sourceIndex",n,"Must be less than the length of the source array.");if(t.length<0)throw new o["default"]("destinationIndex",r,F);var u=e.length-n;if(isFinite(a)&&a>u)throw new o["default"]("sourceIndex",n,"Source index + length cannot exceed the length of the source array.");a=Math.min(a,u);for(var l=0;a>l;++l)t[r+l]=e[n+l];return t}function c(e,t,n){if(void 0===n&&(n=a.areEqual),e&&e.length){if(Array.isArray(e))return-1!=e.indexOf(t);for(var r=0;r<e.length;++r)if(n(e[r],t))return!0}return!1}function d(e,t,n,r){var a=0;if(0!==r){if(r){if(0>r)throw new o["default"]("max",r,F)}else r=1/0;for(var i=e.length-1;i>=0&&(e[i]!==t||(e[i]=n,++a,--r));--i);}return a}function s(e,t,n,a){r["default"].assert(n,"index"),r["default"].assert(n,"length");for(var i=n+a,f=n;i>f;++f)e[f]=t}function v(e,t,n){s(e,null,t,n)}function w(e,t,n){if(void 0===n&&(n=a.areEqual),!e)throw new f["default"]("array",q);var r=e.length,i=!r||!c(e,t,n);return i&&(e[r]=t),i}function g(e,t){if(!e)throw new f["default"]("array",q);if(!n["default"].isFunction(t))throw new i["default"]("predicate","Must be a function.");for(var r=e.length,a=0;r>a;++a)if(a in e&&t(e[a]))return a;return-1}function p(e,t){if(!e)throw new f["default"]("source",q);if(t)for(var n=0;n<e.length&&t(e[n])!==!1;++n);return e}function x(e,t){if(!e)throw new f["default"]("target",q);if(t)for(var n=0;n<e.length;++n)e[n]=t(e[n]);return e}function y(e,t){if(!e)throw new f["default"]("array",q);if(r["default"].assert(t,"index"),0>t)throw new o["default"]("index",t,F);var n=t<e.length;return n&&e.splice(t,1),n}function m(e,t,n,r){if(void 0===r&&(r=a.areEqual),!e)throw new f["default"]("array",q);var i=0;if(e&&e.length&&0!==n){if(n){if(0>n)throw new o["default"]("max",n,F)}else n=1/0;for(var u=e.length-1;u>=0&&(!r(e[u],t)||(e.splice(u,1),++i,--n));--u);}return i}function E(e,t){if(r["default"].assert(t,"count"),0>t)throw new o["default"]("count",t,F);for(var n=[];t--;)n.push(e);return n}function A(e,t){void 0===t&&(t=0);for(var n=[],r=0;r<e.length;r++){var a=e[r];if(Array.isArray(a)){t>0&&(a=A(a,t-1));for(var i=0;i<a.length;i++)n.push(a[i])}else n.push(a)}return n}function I(e,t,r){if(e&&e.length)for(var a=0,i=e.length;i>a;a++){var f=e[a];if(f)try{f(t)}catch(o){if(!r)throw o;n["default"].isFunction(r)&&r(o,a)}}}function M(e,t,n){I(l(e),t,n)}function b(e,t,r){if(!e)return null;var a=l(e);if(e.length)for(var i=0,f=a.length;f>i;i++){var o=a[i];try{a[i]=o?o(t):void 0}catch(u){if(a[i]=void 0,!r)throw u;n["default"].isFunction(r)&&r(u,i)}}return a}t.initialize=u,t.copy=l;var q="Cannot be null.",F="Cannot be less than zero.";t.copyTo=h,t.contains=c,t.replace=d,t.updateRange=s,t.clear=v,t.register=w,t.findIndex=g,t.forEach=p,t.applyTo=x,t.removeIndex=y,t.remove=m,t.repeat=E,t.flatten=A,t.dispatchUnsafe=I,t.dispatch=M,t.dispatchMapped=b});
//# sourceMappingURL=Utility.js.map
