// • Build an object oriented sort of connection between a Fruit and an Apple.
// • Every fruits_objects should have the name, color properties and methods naming ripe,
// grow.
// • The Apple fruits_objects should have properties of type, variety and also all other
// additional methods. Any sort of Object oriented model is fine

import 'babel-polyfill';

import fruits from './fruits';

const fruits_objects = new fruits();

const b = {}
fruits_objects.set_type('northern',"apple",b)
fruits_objects.set_type('southern','pineapple',b)
fruits_objects.set_type('meditarian','custardapple',b)

fruits.prototype.color = {"pineapple" : "orange" , "apple" : "royal red" , "custardapple" : "kind of grey" }
console.log(fruits_objects.color)
console.log(b)