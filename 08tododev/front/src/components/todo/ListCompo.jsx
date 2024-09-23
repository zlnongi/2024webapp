import React, { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import { useSearchParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";
import PagerComp from "../common/PagerCompo";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 20,
  prevPage: 0,
  nextPage: 0,
  totalPage: 2,
  current: 1,
};

function ListCompo() {
  const { page, size, moveToRead, refresh, moveToList, moveToWrite } =
    useCustomMove();
  const [data, setData] = useState(initState);

  //   const [queryParams] = useSearchParams();
  //   console.log(queryParams.get("size")); // 이거 왜 다 null로 뜨냐 ㅠㅠ

  //   const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  //   const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  //   console.log(page, null);

  useEffect(() => {
    getList({ page, size }).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [page, size, refresh]); // axios 불러옴
  return (
    <div>
      {data.dtoList.map((item, i) => {
        return (
          <div
            key={i}
            className="flex border-b-2 py-3"
            onClick={() => {
              moveToRead(item.tno);
            }}
          >
            <div className="text-2xl w-1/12">{item.tno}</div>
            <div className="text-2xl w-8/12 font-extrabold">{item.title}</div>
            <div className="text-2xl w-3/12">{item.dueData}</div>
          </div>
        );
      })}
      <div className="flex my-4 justify-end">
        <button
          className="bg-green-500 rounded py-2 px-4 text-white"
          onClick={() => {
            moveToWrite();
          }}
        >
          글쓰기
        </button>
      </div>

      <PagerComp serverData={data} movePage={moveToList} />
    </div>
  );
}

export default ListCompo;
