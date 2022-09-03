import React, { useEffect } from "react";
import {  Route } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import Layout3 from "./Layout3";
import Layout4 from "./Layout4";
import Layout5 from "./Layout5";
import Layout6 from "./Layout6";
import Layout7 from "./Layout7";
import Layout8 from "./Layout8";
import Layout9 from "./Layout9";
import Layout10 from "./Layout10";
import Layout11 from "./Layout11";
import Layout12 from "./Layout12";
import Layout13 from "./Layout13";
import Layout14 from "./Layout14";
import Layout15 from "./Layout15";

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
      <Route path={`${match.path}/layout7`} component={Layout7} />
      <Route path={`${match.path}/layout8`} component={Layout8} />
      <Route path={`${match.path}/layout9`} component={Layout9} />
      <Route path={`${match.path}/layout10`} component={Layout10} />
      <Route path={`${match.path}/layout11`} component={Layout11} />
      <Route path={`${match.path}/layout12`} component={Layout12} />
      <Route path={`${match.path}/layout13`} component={Layout13} />
      <Route path={`${match.path}/layout14`} component={Layout14} />
      <Route path={`${match.path}/layout15`} component={Layout15} />
    </div>
  );
};

export default Layout;
