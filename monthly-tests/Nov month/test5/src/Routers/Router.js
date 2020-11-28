import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Profile from "../Portfolio/Protfoliohtml";
import Flexbox from "../CssFlexbox/Flexbox";

const Router = () => {
  const Home = () => {
    return <h1>Welcome to my project</h1>;
  };
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/flexbox" component={Flexbox}></Route>
      </Switch>
    </>
  );
};
export default Router;
