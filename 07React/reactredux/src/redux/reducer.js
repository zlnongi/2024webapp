const init = {
  // init과 state을 연결시켜야함 state=init로 만들어줌 (initial data)
  value: 100,
  title: "test",
};

const reducer = (state = init, action) => {
  // reducer라는 이름을 쓴거임 그냥

  // 함수 -> 조건문, switch문 등 action
  console.log(state);
  console.log(action.type);
  if (action.type == "up") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type == "down") {
    return { ...state, value: state.value - action.payload };
  }

  return state; // state값 변경
};
v;

export default reducer;
