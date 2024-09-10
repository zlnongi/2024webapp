import React, { useState } from "react";
import "./index.css";
import logo from "./logo.svg";

function App() {
  let text = "hello";

  const [box, setBox] = useState("yeo"); // import 되어야함 a:변화되는 값(원래 값) b: 변경시키는 함수
  // setBox 통해서 변화를 준다 !!

  const [num, setNum] = useState(0);

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
    </>
  );
}

export default App;
