import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from "react-router-dom";

const Slider = props => {
  return (
    <section id="sliderType" className="slider__wrap nexon">
      <h2 className="blind">슬라이드 유형</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
            <div className="desc">
              <span>developer</span>
              <h3>new frontend</h3>
              <p>
                너무 무리하지 말아요! 이미 당신은 잘하고 있고!
                <br />
                앞으로도 잘 할 수 있어요!
              </p>
              <div className="btn">
                <Link to="/">자세히 보기</Link>
                <Link to="/" className="black">
                  사이트 보기
                </Link>
              </div>
            </div>
          </div>
          <div className="slider__arrow">
            <Link to="/" className="left">
              <span className="ir">이전 이미지</span>
            </Link>
            <Link to="/" className="right">
              <span className="ir">다음 이미지</span>
            </Link>
          </div>
          <div className="slider__dot">
            <Link to="/" className="dot active">
              <span className="ir">1</span>
            </Link>
            <Link to="/" className="dot">
              <span className="ir">2</span>
            </Link>
            <Link to="/" className="dot">
              <span className="ir">3</span>
            </Link>
            <Link to="/" className="play">
              <span className="ir">플레이</span>
            </Link>
            <Link to="/" className="stop">
              <span className="ir">정지</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

Slider.propTypes = {}

export default Slider