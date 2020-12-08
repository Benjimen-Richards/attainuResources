import React from "react";
import Body from "./Body";
import Header from "./Header";
import Data from "./Data.json";
class Layout extends React.Component {
  state = {
    data: Data,
    res: "",
  };
  filtereddataIn = (keyword) => {
    const output = this.state.data.filter((user) => {
      return user.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
    if (keyword) {
      this.setState({
        res: output,
      });
    } else {
      this.setState({
        res: "",
      });
    }
  };

  render() {
    return (
      <div>
        <Header uservalue={(inputvalue) => this.filtereddataIn(inputvalue)} />
        <Body data={this.state.res} />
      </div>
    );
  }
}
export default Layout;
