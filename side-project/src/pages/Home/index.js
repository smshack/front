import React from 'react'
import {  Route, Link } from "react-router-dom";

const Home = () => {
  const layoutlist = [
    {
      title: "레이아웃1",
      path: "layout1",
    },
    
  ];
  return (
    <div className="home">
      <div className="layout-nav">
        <h1>홈</h1>
        <ul>
{/*           
          {layoutlist.map((val,key) => {
            return (
              <li>
                <Link to={`/layout/${val.path}`}>{val.title}</Link>
              </li>
            );
          })} */}
        </ul>
      </div>
    </div>
  );
}

export default Home;