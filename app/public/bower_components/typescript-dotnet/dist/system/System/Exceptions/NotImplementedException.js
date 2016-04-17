/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
System.register(['./SystemException'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var SystemException_1;
    var NAME, NotImplementedException;
    return {
        setters:[
            function (SystemException_1_1) {
                SystemException_1 = SystemException_1_1;
            }],
        execute: function() {
            NAME = 'NotImplementedException';
            NotImplementedException = (function (_super) {
                __extends(NotImplementedException, _super);
                function NotImplementedException() {
                    _super.apply(this, arguments);
                }
                NotImplementedException.prototype.getName = function () {
                    return NAME;
                };
                return NotImplementedException;
            }(SystemException_1.default));
            exports_1("default", NotImplementedException);
        }
    }
});
//# sourceMappingURL=NotImplementedException.js.map