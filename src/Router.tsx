import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Main from "./components/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
