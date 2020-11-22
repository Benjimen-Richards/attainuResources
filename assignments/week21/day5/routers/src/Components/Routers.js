import About from "./About";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Error from "./Error";

const Routers = () => {
  const Home = () => {
    return <h1>Home page</h1>;
  };
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Routers;
