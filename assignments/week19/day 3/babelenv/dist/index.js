"use strict";

require("babel-polyfill");

var _usermodel = _interopRequireDefault(require("./usermodel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userone = new _usermodel["default"]();
console.log('initial name set is', userone);
userone.setname('alfred Richards');
console.log('aftername set is', userone.getname());
console.log('benjimen richards');
//# sourceMappingURL=index.js.map