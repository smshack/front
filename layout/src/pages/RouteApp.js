import { useEffect, useState } from "react";

import {  Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import "../styles/style.scss";
import Layout from "./Layout";
import Home from "./Home";

const RouteApp = () => {
  const location = useLocation();
  return (
    <div className={`container`}>
      <Switch>
        <>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/layout" component={Layout} />
          </div>
        </>
      </Switch>
    </div>
  );
};

export default RouteApp;
