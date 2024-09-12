import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const listCnt = 10;
  const pagerCnt = 5;
  const [data, setData] = useState([]);
  const [totalPage, setTotalpage] = useState(1);
  const [currentpage, setCurrentpage] = useState(1);

  const api = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setData(res.data);
      console.log("total data: " + res.data.length);
      console.log("total page: " + res.data.length / listCnt);

      setTotalpage(res.data.length / listCnt);
    });
  };

  useEffect(() => {
    api();
  }, []);

  const pageViewNumber = () => {
    const pageNumbers = [];
    const startPage = Math.floor(((currentpage - 1) / listCnt) * listCnt + 1);
    //const endPage = startPage + listCnt - 1;
    const endPage = Math.min(startPage + pagerCnt - 1, totalPage);

    for (let i = startPage; i <= endPage; i++) {
      // 여기서 i는 내가 있는 현재위치
      pageNumbers.push(
        <span
          onClick={() => {
            setCurrentpage(i);
          }}
          style={{
            cursor: "pointer",
            margin: "0 5px",
            color: currentpage === i ? "red" : "black", // 삼항연산자는 많이 쓰므로 잘 알아두기
          }}
        >
          {i}
        </span>
      ); // 페이지 넘버를 for문 돌려서 pageNumbers 배열에 넣어줌
    }

    return pageNumbers;
  };

  const currentPageData = () => {
    const startIndex = (currentpage - 1) * listCnt;
    const endIndex = startIndex + listCnt;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <div>totalPage: {totalPage}</div>
      {currentPageData().map((item, i) => {
        return (
          <div key={i}>
            {item.id}.{item.title}
          </div>
        );
      })}

      <div style={{ fontSize: "2em" }}>{pageViewNumber()}</div>
      <div>
        {currentpage > 1 && ( // 이런 조건문도 잘 봐둬라
          <button
            onClick={() => {
              setCurrentpage(currentpage - 1);
            }}
          >
            이전
          </button>
        )}

        {currentpage < totalPage && ( // 토탈페이지보다 currentpage가 낮을때만 작동
          <button
            onClick={() => {
              setCurrentpage(currentpage + 1);
            }}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
