import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "zlnongi",
        password: "123",
        username: "여진홍",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
      {
        userid: "ganggang",
        password: "123",
        username: "장윤경",
        addr: "의왕",
        image: "https://picsum.photos/100",
      },
      {
        userid: "minalee",
        password: "123",
        username: "이민아",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
  },
});
