import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

// -- store file
const init = {
  // init과 state을 연결시켜야함 state=init로 만들어줌 (initial data)
  value: 100,
  title: "test",
};

const reducer = (state = init, action) => {
  // reducer라는 이름을 쓴거임 그냥

  // 함수 -> 조건문, switch문 등 action
  console.log(state);
  console.log(action.type); // action type에 따라서..
  if (action.type == "up") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type == "down") {
    return { ...state, value: state.value - action.payload };
  }

  return state; // state값 변경
};
const store = createStore(reducer); // reducer가 state값인거임 (provider값?? 값을 변화시키는 중간 매체 = reducer)
// -- store file

function App() {
  return (
    <Provider store={store}>
      <div>test</div>
      <Counter />
    </Provider>
  );
}

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

export default App;
