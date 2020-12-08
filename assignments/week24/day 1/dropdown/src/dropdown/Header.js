import React from "react";
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      inputvalue: null,
    };
  }
  changeHandler = (e) => {
    this.setState({
      inputvalue: e.target.value,
    });
    this.props.uservalue(e.target.value);
  };
  render() {
    return (
      <form
        style={{
          position: "relative",
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
          }}
        >
          <h1>Header</h1>
          <input
            placeholder="Enter your search....."
            onChange={this.changeHandler}
          />
        </div>
      </form>
    );
  }
}
export default Header;
