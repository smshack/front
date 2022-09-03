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
            <Link to={`/layout/layout2`}>레이아웃2</Link>
          </li>
          <li>
            <Link to={`/layout/layout3`}>레이아웃3</Link>
          </li>
          <li>
            <Link to={`/layout/layout4`}>레이아웃4</Link>
          </li>
          <li>
            <Link to={`/layout/layout5`}>레이아웃5</Link>
          </li>
          <li>
            <Link to={`/layout/layout6`}>레이아웃6</Link>
          </li>
          <li>
            <Link to={`/layout/layout7`}>레이아웃7</Link>
          </li>
          <li>
            <Link to={`/layout/layout8`}>레이아웃8</Link>
          </li>
          <li>
            <Link to={`/layout/layout9`}>레이아웃9</Link>
          </li>
          <li>
            <Link to={`/layout/layout10`}>레이아웃10</Link>
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