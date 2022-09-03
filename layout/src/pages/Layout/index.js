import React, { useEffect } from "react";
import {  Route } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import Layout1 from "./Layout1";
const Layout = ({ match }) => {
  useEffect(() => {
  }, []);
  return (
    <div className="Layout">
      <Route path={`${match.path}/layout1`} component={Layout1} />
    </div>
  );
};

export default Layout;
