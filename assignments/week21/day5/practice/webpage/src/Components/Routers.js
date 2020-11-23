import { Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import Error from "./Error";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const Routers = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};
export default Routers;
