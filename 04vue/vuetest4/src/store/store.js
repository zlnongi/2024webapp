import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    // initial data 초기데이터 !!
    name: "홍길동",
    counter: 0,

    weatherData: {
      icon: "icon",
      temp: 0,
      text: "text",
      location: "location",
      city: "seoul",
    },
  },
  mutations: {
    // 편하게 전역함수라고 생각하기
    // state값을 변형 // commit 사용
    addCount(state, payload) {
      state.counter++;
    }, // 함수를 만들었음
    updateData(state, payload) {
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
    },
    onSearchCity(state, payload) {
      state.weatherData.city = payload;
    },
  },
  actions: {
    // 비동기에 대한 데이터 //
    async getWeather(context) {
      //context는 다른 이름 써도됨
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
      );
      console.log(res.data);

      // action 뒤에서 mutations을 한번 더 거쳐가야함 (????)
      context.commit("updateData", res.data); // commit 통해서 updateData 함수 실행
      // state로 한방에 가는게 아니라 commit을 거쳐서 함수를 만든다음에 그게 함수가 실행이되면 state로 가는거다
    },
  },
});
