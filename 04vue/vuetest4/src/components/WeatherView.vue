<template>
  <div class="weather-info">
    <div class="icon">
      <img
        :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@2x.png`"
        alt=""
      />
    </div>
    <div class="temp">
      {{ ($store.state.weatherData.temp - 273.15).toFixed(2) }}&deg
    </div>
    <div class="text">{{ $store.state.weatherData.text }}</div>
    <div class="location">
      {{ $store.state.weatherData.location }} /
      {{ $store.state.weatherData.city }}
    </div>
  </div>
  <!-- {{ $store.state.name }} -->
  <!-- name 데이터를 가져옴 -->
  <!-- {{ $store.state.counter }} -->
  <!-- counter 데이터를 가져옴  -->
  <!-- <button @click="$store.commit('addCount')">넘버</button> -->
  <!-- 변경된 값들을 보여줌 -->
</template>

<script setup></script>

<style lang="scss" scoped>
.weather-info {
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  //justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  height: 100vh; /* 화면 전체 높이 사용 */
  text-align: center; /* 텍스트 중앙 정렬 */
}

.icon {
  margin-bottom: 10px;
}

.temp {
  font-size: 2rem;
  margin-bottom: 5px;
}

.text {
  margin-bottom: 10px;
}

.location {
  font-size: 1.2rem;
  color: gray;
}
</style>
