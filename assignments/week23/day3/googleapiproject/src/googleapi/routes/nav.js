import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import googleconfig from "./google.json";
import React from "react";
class Nav extends React.Component {
  state = {
    isloggedin: false,
    user: {},
  };
  googlecallback = (response) => {
    if (!response) {
      console.log("no data found");
    } else {
      const user = {
        googleId: response.googleId,
      };
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
      this.setState({
        isloggedin: true,
        user: user,
      });
    }
  };
  logout = () => {
    localStorage.removeItem("user");
    this.setState({
      isloggedin: false,
    });
  };
  render() {
    return (
      <>
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <div>
              <li>
                <Link class="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                {this.state.isloggedin && (
                  <div>
                    <Link to="/profile">Profile</Link>
                  </div>
                )}
              </li>
            </div>
            <div>
              {this.state.isloggedin && (
                <button onClick={this.logout}>Logout</button>
              )}
              {!this.state.isloggedin && (
                <GoogleLogin
                  clientId={googleconfig.client_id}
                  onSuccess={this.googlecallback}
                  onFailure={this.googlecallback}
                  buttonText="Login"
                />
              )}
            </div>
          </ul>
        </div>
        {this.props.children}
      </>
    );
  }
}
export default Nav;
