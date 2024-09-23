import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, dValue) => {
  if (!param) {
    return dValue; // page: 1, size: 10으로 적은거
  }
  return parseInt(param);
};

const useCustomMove = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);

  // page=2&size=10
  const queryDefault = createSearchParams({ page, size }).toString();

  const moveToList = (pageParam) => {
    let queryStr = "";
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
