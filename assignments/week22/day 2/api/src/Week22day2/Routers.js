import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Users from "./Users";
import Details from "./Userdetails";
const Routers = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/users" component={Users} exact />
        <Route path="/users/:id" component={Details} />
      </Switch>
    </div>
  );
};
export default Routers;
