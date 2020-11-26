import { Route, Switch } from "react-router-dom";
import Users from "../Users";
import Link from "./Link";
import Usermapping from "./Usermapping";
// import Userfilter from "../Userfilter";
const Routers = () => {
  return (
    <>
      <Link />
      <Switch>
        <Route exact path="/Users" component={Users}></Route>
        <Route exact path="/Users/:id" component={Usermapping}></Route>
        {/* <Route exact path="/Users/:id" component={Userfilter}></Route> */}
      </Switch>
    </>
  );
};
export default Routers;
