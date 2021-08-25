import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

// project imports
import MainLayout from "./../layout/MainLayout";
import Loadable from "../ui-component/Loadable";

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import("../views/dashboard")));
const Page404 = Loadable(lazy(() => import("../views/errors/Page404")));
//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
  return (
    <Route>
      <MainLayout>
        <Switch>
          <Route exact={true} path="/" component={DashboardDefault} />
          <Route exact={true} path="*" component={Page404} />
        </Switch>
      </MainLayout>
    </Route>
  );
};

export default MainRoutes;
