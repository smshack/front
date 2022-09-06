import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from "react-router-dom";

const Header = props => {
  return (
    <header id="headerType" className="header__wrap nexon">
      <div className="header__inner">
        <div className="header__logo">
          <Link to="#">
            web <em>site</em>
          </Link>
        </div>
        <nav className="header__menu">
          <ul>
            <li>
              <Link to="#">헤더 영역</Link>
            </li>
            <li>
              <Link to="#">슬라이드 영역</Link>
            </li>
            <li>
              <Link to="#">배너 영역</Link>
            </li>
            <li>
              <Link to="#">컨텐츠 영역</Link>
            </li>
            <li>
              <Link to="#">푸터 영역</Link>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <Link to="#">로그인</Link>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {}

export default Header