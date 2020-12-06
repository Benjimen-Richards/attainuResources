import { Route, Switch } from "react-router-dom";
import { Homepage } from "../Container.js/Homepage";
import Profile from "../Container.js/Profile";
import Menu from "../Container.js/Menu";

export const Router = () => {
  return (
    <div>
      <Switch>
        <Menu>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/profile" component={Profile} />
        </Menu>
      </Switch>
    </div>
  );
};
