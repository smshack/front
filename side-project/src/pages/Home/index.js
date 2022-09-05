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
      <section id="cardType" className="card__wrap section nexon">
        <h2>웹스토리보이 강의</h2>
        <p>
          웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다.
          <br />
          Gmarket Sans Light 22px 150% #67778A
        </p>
        <div className="card__inner container">
          <article className="card">
            <figure className="card__header">
              <img
                className="img"
                src="https://webstoryboy.github.io/web2022/webs_img/card_bg01.jpg"
                alt="이미지1"
              />
            </figure>
            <div className="card__body">
              <h3 className="title">웹표준 사이트 만들기</h3>
              <p className="desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한
                예제를 통해 사이트를 만드는 기본 강의입니다.
              </p>
              <Link className="btn" to="#">
                더 자세히 보기
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </Link>
            </div>
          </article>
          <article className="card">
            <figure className="card__header">
              <img
                className="img"
                src="https://webstoryboy.github.io/web2022/webs_img/card_bg02.jpg"
                alt="이미지2"
              />
            </figure>
            <div className="card__body">
              <h3 className="title">웹표준 사이트 만들기</h3>
              <p className="desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한
                예제를 통해 사이트를 만드는 기본 강의입니다.
              </p>
              <Link className="btn" to="#">
                더 자세히 보기
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </Link>
            </div>
          </article>
          <article className="card">
            <figure className="card__header">
              <img
                className="img"
                src="https://webstoryboy.github.io/web2022/webs_img/card_bg03.jpg"
                alt="이미지3"
              />
            </figure>
            <div className="card__body">
              <h3 className="title">웹표준 사이트 만들기</h3>
              <p className="desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한
                예제를 통해 사이트를 만드는 기본 강의입니다.
              </p>
              <Link className="btn" to="#">
                더 자세히 보기
                <svg
                  width="52"
                  height="8"
                  viewBox="0 0 52 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                    fill="#5B5B5B"
                  />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </section>
      {/*  카드 유형 */}
      {/*  배너  유형 */}
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
      {/*  배너  유형 */}
      {/*  텍스트  유형 */}
      <section id="textType" className="text__wrap section gmarket">
        <h2>코딩과 관련된 직업</h2>
        <p>
          너무 무리하지 말아요! 이미 당신은 해내고 있고 앞으로도 잘 할 수
          있을거예요!{" "}
        </p>
        <div className="text__inner container">
          <div className="text">
            <h3>웹 디자인</h3>
            <p>
              웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과
              비교하여 임금과 복리후생이 낮은 편이다.
            </p>
          </div>
          <div className="text">
            <h3>웹 퍼블리셔</h3>
            <p>
              퍼블리싱은 웹 사이트를 제작할 때, 웹 디자이너가 디자인한 것을 웹
              표준성과 접근성에 부합하도록 재정
            </p>
          </div>
          <div className="text">
            <h3>프론트앤드 개발자</h3>
            <p>
              사이트와 상호작용하는 모든 부분에 대한 개발, 관리, 유지 보수를
              하는 것 솔루션의 프로세스
            </p>
          </div>
          <div className="text">
            <h3>백앤드 개발자</h3>
            <p>
              용어 자체에서 알 수 있듯이, 백엔드는 웹사이트나 웹 애플리케이션
              또는 모바일 솔루션의 프로세스와 관련된입니다.
            </p>
          </div>
          <div className="text">
            <h3>웹 디자인</h3>
            <p>
              웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과
              비교하여 임금과 복리후생이 낮은 편이다.
            </p>
          </div>
          <div className="text">
            <h3>웹 퍼블리셔</h3>
            <p>
              퍼블리싱은 웹 사이트를 제작할 때, 웹 디자이너가 디자인한 것을 웹
              표준성과 접근성에 부합하도록 재정
            </p>
          </div>
        </div>
      </section>
      {/*  텍스트  유형 */}
      {/* 푸터 유형 */}
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
      {/* 푸터 유형 */}
    </div>
  );
}

export default Home;