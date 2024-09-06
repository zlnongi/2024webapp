import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "zlnongi",
        password: "123",
        username: "여진홍",
        addr: "서울",
        iamge: "test.jpg",
      },
      {
        userid: "ganggang",
        password: "123",
        username: "장윤경",
        addr: "의왕",
        iamge: "test.jpg",
      },
      {
        userid: "minalee",
        password: "123",
        username: "이민아",
        addr: "서울",
        iamge: "test.jpg",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
  },
});
