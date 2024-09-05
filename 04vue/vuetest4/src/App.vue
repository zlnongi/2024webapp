<template>
  <div>
    <NavbarView />
    <MainView />

    <div>
      <!-- <button @click="$store.dispatch('getWeather')">자료 가져오기</button> -->
      <!-- 버튼 누르면 weather data를 콘솔에 보여줌 -->
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import MainView from "./components/MainView.vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  // 초기 화면에서 어떤 데이터를 보여줄건지 정해줌 << 이거 맞는지 물어보기
  // 화면에서 실행
  // getWeather();
  store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped></style>
