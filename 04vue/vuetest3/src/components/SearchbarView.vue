<template>
  <div class="search-bar">
    <input
      type="text"
      class="inp"
      @input="inputText = $event.target.value"
      placeholder="지역명을 입력하세요"
    />
    <div class="sIcon" @click="emits('msearchCity', inputText)">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
  {{ inputText }}
</template>

<script setup>
import { ref } from "vue";
const inputText = ref("");
const emits = defineEmits();
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 10px 16px;
  position: relative;
  .inp {
    border: 0 none;
    outline: 0 none;
    border-bottom: 1px solid #000;
    padding: 10px 10px;
    width: 100%;
    font-size: 18px;
  }
  .sIcon {
    width: 30px;
    height: 30px;
    // background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #888;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: 12;
    cursor: pointer;
  }
}
</style>
