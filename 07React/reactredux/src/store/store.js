import { createStore } from "redux";
import reducer from "../redux/reducer";

const store = createStore(reducer); // reducer가 state값인거임 (provider값?? 값을 변화시키는 중간 매체 = reducer)

export default store;
