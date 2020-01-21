import React from "react";
import { Helmet } from "react-helmet";
import Signup from "./Signup";

function App(props) {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="카카오페이 - 리액트 회원가입 페이지"
        />
        <meta
          property="og:title"
          content="카카오페이 - 리액트 회원가입 페이지"
        />
        <meta
          property="og:image"
          content="https://t1.daumcdn.net/kakaopay/homepage/og/kakaopay_og_20190524.png"
        />
        <meta
          property="og:description"
          content="Ant design UI 컴포넌트 프레임워크를 이용한 회원가입 페이지"
        />
        <title>카카오페이 - 리액트 회원가입 페이지</title>
      </Helmet>
      <Signup></Signup>
    </div>
  );
}

export default App;
