import { createStore } from "vuex";

export default createStore({
  state: {
    // 사용되는 데이터
    useData: [
      {
        useid: "zlnongi",
        password: "123",
        username: "여진홍",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
      {
        useid: "ganggang",
        password: "123",
        username: "장윤경",
        addr: "의왕",
        image: "https://picsum.photos/100",
      },
      {
        useid: "minalee",
        password: "123",
        username: "이민아",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {},
});
