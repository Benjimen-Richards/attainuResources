"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fruits = /*#__PURE__*/function () {
  function Fruits() {
    _classCallCheck(this, Fruits);
  }

  _createClass(Fruits, [{
    key: "set_type",
    value: function set_type(type, fruit, b) {
      b[type] = fruit;
    }
  }, {
    key: "get_fruits",
    value: function get_fruits(b) {
      return b;
    }
  }]);

  return Fruits;
}();

var _default = Fruits;
exports["default"] = _default;
//# sourceMappingURL=fruits.js.map