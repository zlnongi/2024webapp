import { useSearchParams } from "react-router-dom";

const getNum = (param, dValue) => {
  if (!param) {
    return dValue; // page: 1, size: 10으로 적은거
  }
  return parseInt(param);
};

const useCustomMove = () => {
  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  return { page, size };
};

export default useCustomMove;
