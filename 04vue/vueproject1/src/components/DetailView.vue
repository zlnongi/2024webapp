<template>
  <div class="container mt-5">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis
    quasi quas repellendus ipsum? Voluptates obcaecati at et sequi modi, non sit
    quos impedit, eligendi suscipit quas. Adipisci, voluptatem officiis?

    <h2>{{ $route.name }}</h2>
    <hr />
    <h3>{{ $route }}</h3>
    {{ $route.params }} / {{ $route.name }}
    <p>{{ props.data[0] }}</p>
    <div class="btn btn-primary" @click="$router.push({ name: 'home' })">
      home
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped></style>
