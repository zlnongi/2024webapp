<template>
  <div>ViewComp</div>
  {{ props.text }}
  <!-- App.Vue에서 텍스트 = ref부분 값이 들어옴 -->
  <button @click="emit('update')">변경</button>
</template>

<script setup>
const props = defineProps({
  text: String,
});
// const props = defineProps(["text"]); 로 써도됨

const emit = defineEmits();
</script>

<style lang="scss" scoped></style>
