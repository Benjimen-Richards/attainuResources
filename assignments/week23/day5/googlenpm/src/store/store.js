const { createStore } = require("redux");
const { reducer } = require("../Router/Reducer/combinereducer.js");

export const store = createStore(reducer);
