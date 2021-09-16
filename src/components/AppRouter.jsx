import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route path={"/about"}>
          <About />
        </Route>
        <Route exact path={"/posts"}>
          <Posts />
        </Route>
        <Route exact path="/posts/:id">
          <PostIdPage />
        </Route>
        <Route path={"/error"}>
          <Error />
        </Route>
        <Redirect to={"/posts"} />
      </Switch>
    </div>
  );
};

export default AppRouter;
