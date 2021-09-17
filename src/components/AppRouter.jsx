import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router/Routes";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exaxt={route.exact}
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
        />
      ))}

      <Redirect to={"/login"} />
    </Switch>
  );
};

export default AppRouter;
