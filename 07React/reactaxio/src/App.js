import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("안드로이드"); // input 상자의 검색어 변수
  const [page, setPage] = useState(1); // 페이징 변수
  const [last, setLast] = useState(1); // 마지막 페이지 변수
  const [document, setDocuments] = useState(null); // 결과를 담을 상태변수 document

  const api = async () => {
    const url = `https://dapi.kakao.com/v3/search/book?target=title&query=${query}&page=${page}`;
    const config = {
      headers: "Authorization: KakaoAK ",
    };
    const result = await axios(url, config);
    console.log(result);
    setDocuments(result.data.documents); // document 변수에 result.data.documents 값 저장
    const total = result.data.meta.pageable_count; // total 변수 : 전체 문서의 개수 출력
    setLast(Math.ceil(total / 10));
  };

  useEffect(() => {
    // api 호출
    api();
  }, []); // 처음 렌더링 될 때만 호출
  return <div>App</div>;
}

export default App;
