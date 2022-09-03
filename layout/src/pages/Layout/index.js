import React, { useEffect } from "react";
import {  Route } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import Layout3 from "./Layout3";
import Layout4 from "./Layout4";
import Layout5 from "./Layout5";
import Layout6 from "./Layout6";
const Layout = ({ match }) => {
  useEffect(() => {
  }, []);
  return (
    <div className="Layout">
      <Route path={`${match.path}/layout1`} component={Layout1} />
      <Route path={`${match.path}/layout2`} component={Layout2} />
      <Route path={`${match.path}/layout3`} component={Layout3} />
      <Route path={`${match.path}/layout4`} component={Layout4} />
      <Route path={`${match.path}/layout5`} component={Layout5} />
      <Route path={`${match.path}/layout6`} component={Layout6} />
    </div>
  );
};

export default Layout;
