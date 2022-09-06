import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from "react-router-dom";

const Banner = props => {
  return (
    <section id="bannerType" className="banner__wrap section gmarket">
      <h2 className="ir_so">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="banner__title">유튜버 웹보이</h3>
        <p className="banner__desc">
          더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
          <Link to="#">youtube.com/c/Webstoryboy</Link>
        </p>
        <span className="banner__sub">배너 영역01</span>
      </div>
    </section>
  );
}

Banner.propTypes = {}

export default Banner