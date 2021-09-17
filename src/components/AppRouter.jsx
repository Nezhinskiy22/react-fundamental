import React from "react";
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router/Routes";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth);
  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exaxt={route.exact}
          key={route.path}
        />
      ))}

      <Redirect to={"/posts"} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exaxt={route.exact}
          key={route.path}
        />
      ))}

      <Redirect to={"/login"} />
    </Switch>
  );
};

export default AppRouter;
