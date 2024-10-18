import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams, // url의 쿼리 파라미터를 읽고 처리하는 기능을 제공하는 훅
} from "react-router-dom";

const getNum = (param, dValue) => {
  if (!param) {
    return dValue; // page: 1, size: 10으로 적은거
  }
  return parseInt(param); // 정수로 변환
};

const useCustomMove = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅
  const [refresh, setRefresh] = useState(false); // 페이지 상태를 강제로 다시 그리기 위해 사용하는 상태값
  const [queryParams] = useSearchParams(); // url 쿼리 파라미터를 가져옴 -> 여기서 page와 size 값 읽어옴
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);

  // 기본 쿼리 문자열을 이런 형식으로 -> page=2&size=10 저장함
  const queryDefault = createSearchParams({ page, size }).toString();

  const moveToList = (pageParam) => {
    // 리스트 페이지로 이동하는 기능
    let queryStr = ""; // queryStr 초기화. 쿼리 스트링을 저장할 변수를 빈 문자열로 초기화
    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 1);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    navigate({
      pathname: "../list",
      search: queryStr,
    });

    setRefresh(!refresh);
  };

  const moveToRead = (num) => {
    // num은 tno 값
    navigate({ pathname: `../list/${num}`, search: queryDefault });
  };

  const moveToWrite = () => {
    navigate({ pathname: `../add` });
  };

  const moveToModi = (num) => {
    // num은 tno 값
    navigate({ pathname: `../modi/${num}`, search: queryDefault });
  };

  //setRefresh(!refresh);
  return {
    page,
    size,
    moveToList,
    moveToRead,
    refresh,
    moveToWrite,
    moveToModi,
  };
};

export default useCustomMove;
