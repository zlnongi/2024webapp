<template>
  <div>userlist</div>
  <p>Username: {{ user.username }}</p>
  <p>Address: {{ user.addr }}</p>
  {{ $store.state.useData }}
  <div v-for="(item, i) in $store.state.useData" :key="i"></div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

// Vuex 스토어 사용
const store = useStore();

// ref로 반응형 상태 생성 및 스토어에서 첫 번째 사용자 가져오기
const user = ref(store.state.useData[0]);
// user 라는 반응형 변수를 선언히고, store.state.useData[0]로 첫 번째 사용자 데이터를 할당
</script>

<style lang="scss" scoped></style>
