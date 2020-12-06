const { combineReducers } = require("redux");
const { default: AuthReducer } = require("./AuthReducer");
const { default: Profilereducer } = require("./profilereducer");

export const reducer = combineReducers({
  Auth: AuthReducer,
  Profile: Profilereducer,
});
