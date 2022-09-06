import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from "react-router-dom";

const ImageText = props => {
  return (
    <section id="imTextType" className="imgText__wrap section nexon">
      <h2 className="blind">이미지 텍스트 유형</h2>
      <div className="imgText__inner container">
        <div className="imgText__txt">
          <span className="small">이미지 텍스트 유형01</span>
          <h3 className="title">유용한 사이트 살펴보기</h3>
          <p className="desc">
            웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 유용한
            사이트입니다.
          </p>
          <ul className="list">
            <li>
              <Link to="/">튜토리얼 사이트</Link>
            </li>
            <li>
              <Link to="/">레퍼런스 사이트</Link>
            </li>
            <li>
              <Link to="/">웹폰트 사이트</Link>
            </li>
            <li>
              <Link to="/">CSS 사이트</Link>
            </li>
            <li>
              <Link to="/">WebGL 사이트</Link>
            </li>
            <li>
              <Link to="/">Youtube 사이트</Link>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <Link to="/">레퍼런스 사이트</Link>
        </div>
        <div className="imgText__img img2">
          <Link to="/" className="blue">
            튜토리얼 사이트
          </Link>
        </div>
      </div>
    </section>
  );
}

ImageText.propTypes = {}

export default ImageText