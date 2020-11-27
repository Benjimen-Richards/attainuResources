import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Post from "./Component/Post";
import Singlepost from "./Component/Singlepost";
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Post} />
          <Route exact path="/:id" component={Singlepost} />
        </Switch>
      </div>
    );
  }
}
export default App;
