import { render } from "react-dom";
import { Link } from "react-router-dom";
import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import googleconfig from "../Config/google.json";
import { connect } from "react-redux";
import { Auth, Profile } from "../Router/Reducer/Actiontype";
import "./nav.css";
class Menu extends React.Component {
  state = {
    user: {},
    isloggedin: false,
  };
  login = (response) => {
    if (!response) {
      alert("Data not found");
    } else {
      const user = {
        token: response.accessToken,
        userData: response.profileObj,
      };
      localStorage.setItem("user", JSON.stringify(user));
      // // this.setState({
      // //   user: user,
      // // });
      // console.log(this.state.user);
      // this.setState({ isauthenticated: true });
      // console.log(user.token);
      this.props.dispatch({
        type: Auth.LOGIN,
        payload: user.token,
      });
      this.props.dispatch({
        type: Profile.SET,
        payload: user.userData,
      });
    }
    // console.log(response);
  };
  logout = () => {
    localStorage.removeItem("user");
    this.props.dispatch({
      type: Auth.lOGOUT,
    });
    this.props.dispatch({
      type: Profile.REMOVE,
    });
  };
  render() {
    // console.log(this.props.Auth.isloggedin);
    return (
      <div>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <div className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {this.props.Auth.isloggedin && (
                <div>
                  <Link to="/profile">Profile</Link>
                  <GoogleLogout
                    buttonText="logout"
                    onLogoutSuccess={this.logout}
                  />
                </div>
              )}
            </li>
            {!this.props.Auth.isloggedin && (
              <GoogleLogin
                buttonText="Login"
                clientId={googleconfig.client_id}
                onSuccess={this.login}
                onFailure={this.login}
              />
            )}
          </div>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
const mapstatetoprops = (state) => {
  // console.log(state);
  return {
    Auth: state.Auth,
  };
};
export default connect(mapstatetoprops)(Menu);
