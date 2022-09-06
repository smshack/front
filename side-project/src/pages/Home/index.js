import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Slider from "../../components/layout/Slider";
import Image from "../../components/layout/Image";
import ImageText from "../../components/layout/ImageText";
import Card from "../../components/layout/Card";
import Banner from "../../components/layout/Banner";
import Text from "../../components/layout/Text";
import Footer from "../../components/layout/Footer";
const Home = () => {
  return (
    <div className="wrapper">
      {/*  헤더 */}
      <Header />
      {/*  헤더 끝*/}
      {/* 슬라이드 유형 */}
      <Slider />
      {/* 슬라이드 유형 */}
      {/* 이미지 유형 */}
      <Image />
      {/* 이미지 유형 */}
      {/* 이미지 텍스트 유형 */}
      <ImageText />
      {/* 이미지 텍스트 유형 */}
      {/*  카드 유형 */}
      <Card />
      {/*  카드 유형 */}
      {/*  배너  유형 */}
      <Banner />
      {/*  배너  유형 */}
      {/*  텍스트  유형 */}
      <Text />
      {/*  텍스트  유형 */}
      {/* 푸터 유형 */}
      <Footer />
      {/* 푸터 유형 */}
    </div>
  );
};

export default Home;
