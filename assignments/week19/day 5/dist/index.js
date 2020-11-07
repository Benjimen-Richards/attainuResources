"use strict";

require("babel-polyfill");

var _fruits = _interopRequireDefault(require("./fruits"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// • Build an object oriented sort of connection between a Fruit and an Apple.
// • Every fruits_objects should have the name, color properties and methods naming ripe,
// grow.
// • The Apple fruits_objects should have properties of type, variety and also all other
// additional methods. Any sort of Object oriented model is fine
var fruits_objects = new _fruits["default"]();
var b = {};
fruits_objects.set_type('northern', "apple", b);
fruits_objects.set_type('southern', 'pineapple', b);
fruits_objects.set_type('meditarian', 'custardapple', b);
_fruits["default"].prototype.color = {
  "pineapple": "orange",
  "apple": "royal red",
  "custardapple": "kind of grey"
};
console.log(fruits_objects.color);
console.log(b);
//# sourceMappingURL=index.js.map