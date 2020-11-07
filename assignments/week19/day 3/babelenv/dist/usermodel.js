"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var usermodel = /*#__PURE__*/function () {
  function usermodel() {
    _classCallCheck(this, usermodel);

    this.name = '';
  }

  _createClass(usermodel, [{
    key: "getname",
    value: function getname() {
      return this.name;
    }
  }, {
    key: "setname",
    value: function setname(name) {
      this.name = name;
    }
  }]);

  return usermodel;
}();

var _default = usermodel;
exports["default"] = _default;
//# sourceMappingURL=usermodel.js.map