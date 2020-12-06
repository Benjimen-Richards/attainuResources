import { connect } from "react-redux";
import React from "react";
import { Redirect } from "react-router-dom";
class Profile extends React.Component {
  render() {
    console.log(this.props.isloggedin);
    if (!this.props.isloggedin) {
      return <Redirect to="/" />;
    }
    console.log(this.props.profile);
    return (
      <>
        <div>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            <li>GoogleID:{this.props.profile.googleId}</li>
            <li>Email:{this.props.profile.email}</li>
            <li>GivenName{this.props.profile.givenName}</li>
            <img src={this.props.profile.imageUrl} alt="#" />
            {/* <li>{this.props.Profile.familyName}</li> */}
            {/* <li>{this.props.Profile.email}</li> */}
          </ul>
        </div>
      </>
    );
  }
}
const mapstatetoprops = (state) => {
  // console.log(state);
  return {
    profile: state.Profile,
    isloggedin: state.Auth.isloggedin,
  };
};
export default connect(mapstatetoprops)(Profile);
