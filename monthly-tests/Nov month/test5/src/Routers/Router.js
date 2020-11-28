import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Profile from "../Portfolio/Protfoliohtml";
import Flexbox from "../CssFlexbox/Flexbox";
import Singlepost from "../Api/Singlepost";
import Post from "../Api/Posts";
import Message from "../MessageFunction/Message";
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
        <Route exact path="/api" component={Post}></Route>
        <Route exact path="/api/:id" component={Singlepost}></Route>
        <Route exact path="/Csscolour" component={Message}></Route>
      </Switch>
    </>
  );
};
export default Router;
