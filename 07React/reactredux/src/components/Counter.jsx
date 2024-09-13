import React from "react";

function Counter() {
  //const counterValue = useSelector((state)=>{return state.value})
  const counterValue = useSelector((state) => state.value); // data 가져옴 (구독 느낌?)
  const titleValue = useSelector((state) => state.title);

  const dispatch = useDispatch();

  return (
    <>
      {counterValue} / {titleValue}
      <button
        onClick={() => {
          dispatch({ type: "up", payload: 1 }); // data 반영, 변경, 수정
        }}
      >
        클릭
      </button>
      <button
        onClick={() => {
          dispatch({ type: "down", payload: 1 });
        }}
      >
        다운
      </button>
    </>
  );
}

export default Counter;
