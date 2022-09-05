import React from 'react'
import {  Route, Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="wrapper">
      {/*  헤더 */}
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

      {/*  헤더 끝*/}

      {/* 슬라이드 유형 */}
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
      {/* 슬라이드 유형 */}

      {/* 이미지 유형 */}
      <section id="imageType" className="image__wrap nexon section">
        <h2>포트폴리오가 실력이다.</h2>
        <p>이미지 유형입니다. 마우스 오버시 자세한 정보가 나와는 구조입니다.</p>
        <div className="image__inner container">
          <article className="image img1">
            <h3 className="image__title">강아지계의 연예인</h3>
            <p className="image__desc">
              최근 연예인들 사이에서 키우는 강아지로 유명해진 비숑프리제는
              생김새가 아주 작은 바빗과 매우 흡사하여 바비숑이라는
            </p>
            <Link className="image__btn" to="/">
              자세히 보기
            </Link>
          </article>
          <article className="image img2">
            <h3 className="image__title">강아지계의 마스코트</h3>
            <p className="image__desc">
              최근 연예인들 사이에서 키우는 강아지로 유명해진 비숑프리제는
              생김새가 아주 작은 바빗과 매우 흡사하여 바비숑이라는
            </p>
            <Link className="image__btn yellow" to="/">
              자세히 보기
            </Link>
          </article>
        </div>
      </section>
      {/* 이미지 유형 */}
      {/* 이미지 텍스트 유형 */}
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
      {/* 이미지 텍스트 유형 */}
      {/*  카드 유형 */}
      <section id="cardType" class="card__wrap section nexon">
        <h2>웹스토리보이 강의</h2>
        <p>
            웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다.<br /> 
            Gmarket Sans Light 22px 150% #67778A 
        </p>
        <div class="card__inner container">
            <article class="card">
                <figure class="card__header">
                    <img class="img" src="https://webstoryboy.github.io/web2022/webs_img/card_bg01.jpg" alt="이미지1" />
                </figure>
                <div class="card__body">
                    <h3 class="title">웹표준 사이트 만들기</h3>
                    <p class="desc">사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.</p>
                    <Link class="btn" href="#">
                        더 자세히 보기
                        <svg width="52" height="8" viewBox="0 0 52 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z" fill="#5B5B5B"/>
                        </svg>
                    </Link>
                </div>
            </article>
            <article class="card">
                <figure class="card__header">
                    <img class="img" src="https://webstoryboy.github.io/web2022/webs_img/card_bg02.jpg" alt="이미지2" />
                </figure>
                <div class="card__body">
                    <h3 class="title">웹표준 사이트 만들기</h3>
                    <p class="desc">사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.</p>
                    <Link class="btn" href="#">
                        더 자세히 보기
                        <svg width="52" height="8" viewBox="0 0 52 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z" fill="#5B5B5B"/>
                        </svg>
                    </Link>
                </div>
            </article>
            <article class="card">
                <figure class="card__header">
                    <img class="img" src="https://webstoryboy.github.io/web2022/webs_img/card_bg03.jpg" alt="이미지3" />
                </figure>
                <div class="card__body">
                    <h3 class="title">웹표준 사이트 만들기</h3>
                    <p class="desc">사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.</p>
                    <Link class="btn" href="#">
                        더 자세히 보기
                        <svg width="52" height="8" viewBox="0 0 52 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z" fill="#5B5B5B"/>
                        </svg>
                    </Link>
                </div>
            </article>
        </div>
    </section>
      {/*  카드 유형 */}
    </div>
  );
}

export default Home;