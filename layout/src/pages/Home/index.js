import React from 'react'
import {  Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="layout-nav">
        <h1>레이아웃</h1>
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