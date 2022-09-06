import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer id="footerType" className="footer__wrap section gmarket gray">
      <h2 className="ir_so">푸터 영역</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
          <div>
            <h3>레이아웃 영역</h3>
            <ul>
              <li>
                <Link to="#">레이아웃 유형01</Link>
              </li>
              <li>
                <Link to="#">레이아웃 유형02</Link>
              </li>
              <li>
                <Link to="#">레이아웃 유형03</Link>
              </li>
              <li>
                <Link to="#">레이아웃 유형04</Link>
              </li>
              <li>
                <Link to="#">레이아웃 유형05</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>헤더 영역</h3>
            <ul>
              <li>
                <Link to="#">메뉴 유형01</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>메인 영역</h3>
            <ul>
              <li>
                <Link to="#">이미지 유형01</Link>
              </li>
              <li>
                <Link to="#">동영상 유형02</Link>
              </li>
              <li>
                <Link to="#">슬라이드 유형03</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>컨텐츠 영역</h3>
            <ul>
              <li>
                <Link to="#">텍스트 유형01</Link>
              </li>
              <li>
                <Link to="#">이미지 유형02</Link>
              </li>
              <li>
                <Link to="#">이미지/텍스트03</Link>
              </li>
              <li>
                <Link to="#">카드 유형04</Link>
              </li>
              <li>
                <Link to="#">배너 유형05</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>푸터 영역</h3>
            <ul>
              <li>
                <Link to="#">컨택트 유형01</Link>
              </li>
              <li>
                <Link to="#">푸터 유형02</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>사이트 영역</h3>
            <ul>
              <li>
                <Link to="#">웹표준 사이트</Link>
              </li>
              <li>
                <Link to="#">반응형 사이트</Link>
              </li>
              <li>
                <Link to="#">패럴랙스 사이트</Link>
              </li>
              <li>
                <Link to="#">포트폴리오 사이트</Link>
              </li>
            </ul>
          </div>
        </div>
        <address className="footer__right">
          ©2022 webstroyboy. All rights reserved.
        </address>
      </div>
    </footer>
  );
}

Footer.propTypes = {}

export default Footer