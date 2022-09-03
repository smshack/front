import React from 'react'
import {  Route, Link } from "react-router-dom";

const Home = () => {
  const layoutlist = [
    {
      title: "레이아웃1",
      path: "layout1",
    },
    {
      title: "레이아웃2",
      path: "layout2",
    },
    {
      title: "레이아웃3",
      path: "layout3",
    },
    {
      title: "레이아웃4",
      path: "layout4",
    },
    {
      title: "레이아웃5",
      path: "layout5",
    },
    {
      title: "레이아웃6",
      path: "layout6",
    },
    {
      title: "레이아웃7",
      path: "layout7",
    },
    {
      title: "레이아웃8",
      path: "layout8",
    },
    {
      title: "레이아웃9",
      path: "layout9",
    },
    {
      title: "레이아웃10",
      path: "layout10",
    },
    {
      title: "레이아웃11",
      path: "layout11",
    },
    {
      title: "레이아웃12",
      path: "layout12",
    },
    {
      title: "레이아웃13",
      path: "layout13",
    },
    {
      title: "레이아웃14",
      path: "layout14",
    },
    {
      title: "레이아웃15",
      path: "layout15",
    },
  ];
  return (
    <div className="home">
      <div className="layout-nav">
        <h1>레이아웃</h1>
        <ul>
          
          {layoutlist.map((val,key) => {
            return (
              <li>
                <Link to={`/layout/${val.path}`}>{val.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="layout-nav">
        <h1>컨테이너1</h1>
        <ul>
          <li>
            <Link to={`/layout/layout1`}>레이아웃1</Link>
          </li>
          <li>
            <Link to={`/layout/layout1`}>레이아웃1</Link>
          </li>
          <li>
            <Link to={`/layout/layout1`}>레이아웃1</Link>
          </li>
        </ul>
      </div>
      <div className="layout-nav">
        <h1>컨테이너2</h1>
        <ul>
          <li>
            <Link to={`/layout/layout1`}>레이아웃1</Link>
          </li>
          <li>
            <Link to={`/layout/layout1`}>레이아웃1</Link>
          </li>
          <li>
            <Link to={`/layout/layout1`}>레이아웃1</Link>
          </li>
        </ul>
      </div>
      <div className="layout-nav">
        <h1>컨테이너3</h1>
        <ul>
          <li>
            <Link to={`/layout/layout1`}>레이아웃1</Link>
          </li>
          <li>
            <Link to={`/layout/layout1`}>레이아웃1</Link>
          </li>
          <li>
            <Link to={`/layout/layout1`}>레이아웃1</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;