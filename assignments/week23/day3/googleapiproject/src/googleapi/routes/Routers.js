import { Switch, Route } from "react-router-dom";
import Nav from "./nav";

const Routers = () => {
  const profile = () => {
    return <h1>U have logged in successfully</h1>;
  };
  const home = () => {
    return <h1>Home page</h1>;
  };
  return (
    <div>
      <Switch>
        <Nav>
          <Route exact path="/" component={home} />
          <Route exact path="/profile" component={profile} />
        </Nav>
      </Switch>
    </div>
  );
};
export default Routers;
