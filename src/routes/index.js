import React from "react";
import { Redirect, Switch } from "react-router-dom";

// routes
import MainRoutes from "./MainRoutes";
//-----------------------|| ROUTING RENDER ||-----------------------//

const Routes = () => {
  return (
    <Switch>
      <React.Fragment>
        <MainRoutes />
      </React.Fragment>
    </Switch>
  );
};

export default Routes;
