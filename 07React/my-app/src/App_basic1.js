import React, { useState } from "react";
import "./index.css";
import logo from "./logo.svg";

function App() {
  let text = "hello";

  const [box, setBox] = useState("yeo"); // import 되어야함 a:변화되는 값(원래 값) b: 변경시키는 함수
  // setBox 통해서 변화를 준다 !!

  //변수는 무조건 useState 쓴다 !!
  const [num, setNum] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState("안녕하세요");
  //배열데이터
  let [shop, setShop] = useState(["사과", "복숭아", "바나나"]);

  let [anime, setAnime] = useState(["주술회전", "흑집사", "디지몬", "하이큐"]);

  return (
    <>
      <div
        className="container"
        style={{ background: "pink", fontSize: "10px" }} // style값에는 중괄호가 하나 더 있다 !!
      >
        test
        <h2>{text}</h2>
        <p>{box}</p>
        {num}
      </div>
      <header>ddd</header>
      {/* <img src={logo} /> */}
      <button
        onClick={() => {
          // alert("test");
          setBox("zlnongi"); // 값이 변화됨
        }}
      >
        값 변화
      </button>

      <button
        onClick={() => {
          setNum(10);
        }}
      >
        num
      </button>

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달
      </button>

      {
        // 배열 반복문 map 사용
        shop.map((item, i) => {
          return (
            <>
              <div key={i}>{item}</div>
            </>
          );
        })
      }

      {
        // 배열 반복문 map 사용
        anime.map((item, i) => {
          return (
            <>
              <div></div>
            </>
          );
        })
      }

      {modal == true ? <Modal title={title} image="test1" /> : null}
      {/* component 등록 */}
    </>
  );
}

function Modal(props) {
  // props -> 자료를 전달해주는구나! 알 수 있음 모든 속성 다 끌고감
  //component 만들땐 대문자 !
  return (
    <>
      <div className="modal">
        <h3>공지사항{props.title}</h3>
        <p>상세내용{props.image}</p>
      </div>
    </>
  );
}

export default App;
