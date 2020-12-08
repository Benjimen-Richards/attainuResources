import React from "react";
class Body extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            height: "400px",
            overflowY: "hidden",
          }}
        >
          {this.props.data &&
            this.props.data.map((user) => (
              <li
                key={user.id}
                style={{
                  listStyle: "none",
                }}
              >
                {user.title}
              </li>
            ))}
        </div>
      </div>
    );
  }
}
export default Body;
