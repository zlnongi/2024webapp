<template>
  <div class="container">
    <h1>test</h1>
    {{ count }}
    <button @click="addNum">클릭</button>
    <div class="box" v-if="showBox">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, ratione
      aliquid alias voluptatibus quidem accusamus itaque quisquam minima vero
      cupiditate corrupti mollitia beatae quam similique culpa temporibus
      aspernatur quia. Quis.
      <button @click="closeBox">close</button>
    </div>
    <ViewComp v-bind:text="text" @update="textChange" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ViewComp from "./components/ViewComp.vue";

const count = ref(0);
const text = ref("먀먀먕");
const showBox = ref(false);

//함수 만들어주기
const addNum = () => {
  console.log("test");
  count.value++; // 0이었는데 클릭할 때마다 + 1 됨
  showBox.value = true;
};

const closeBox = () => {
  showBox.value = false;
};

const textChange = () => {
  console.log("textChange"); // update 버튼 누르면 잘 넘어왔으면 콘솔에 textChange 찍힘
  text.value = "vuecamp"; // text.value가 먀먕 -> vuecamp로 바뀐다
};
</script>

<style lang="scss" scoped></style>
