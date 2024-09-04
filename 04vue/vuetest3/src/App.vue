<template>
  <div>
    <NavbarView />
    <SearchbarView @msearchCity="searchCity" />
    <WeatherView :data="weatherData" />
    <!-- {{ weatherData }} -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import SearchbarView from "./components/SearchbarView.vue";
import WeatherView from "./components/WeatherView.vue";
import axios from "axios";

const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "location",
  city: "seoul",
});

// async function getWeather() {
//   // 화면에 실행되기 전에 데이터를 가져와야함
//   try {
//     const res = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
//     );
//     console.log(res.data);
//   } catch (error) {
//     console.log("데이터가 없습니다."); // 데이터 들어오는지 아닌지 콘솔로그로 확인
//   }

// };

const getWeather = async () => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
  );
  console.log(res.data);

  weatherData.value.icon = res.data.weather[0].icon;
  weatherData.value.temp = res.data.main.temp;
  weatherData.value.text = res.data.weather[0].description;
  weatherData.value.location = res.data.sys.country;
  weatherData.value.city = res.data.name;
};

onMounted(() => {
  // 화면에서 실행
  getWeather();
});

const searchCity = (city) => {
  console.log(city); // city 값이 자식으로부터 넘어왔는지 확인
  weatherData.value.city = city; // city값 변경
  getWeather(); // 다시 실행
};
</script>

<style lang="scss" scoped></style>
