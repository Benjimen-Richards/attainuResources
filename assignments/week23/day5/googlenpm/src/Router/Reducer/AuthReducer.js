import { Auth } from "./Actiontype";
const initialstate = {
  token: null,
  isloggedin: false,
};
const AuthReducer = (state, action) => {
  state = state || initialstate;
  switch (action.type) {
    case Auth.LOGIN:
      return { token: action.payload, isloggedin: true };
    case Auth.lOGOUT:
      return { token: null, isloggedin: false };
    default:
      return state;
  }
};
export default AuthReducer;
