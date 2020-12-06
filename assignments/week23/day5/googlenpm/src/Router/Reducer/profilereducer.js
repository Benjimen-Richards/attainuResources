import { Profile } from "./Actiontype";
const initialProfile = {
  email: "",
  familyName: "",
  givenName: "",
  googleId: "",
  imageUrl: "",
  name: "",
};

const Profilereducer = (state, action) => {
  state = initialProfile;
  switch (action.type) {
    case Profile.SET:
      return { ...action.payload };
    case Profile.REMOVE:
      return { ...initialProfile };
    default:
      return state;
  }
};
export default Profilereducer;
