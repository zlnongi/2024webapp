<template>
  <NavbarView />
  <router-view :data="init" />
  <!-- <HomeView />
  <AboutView />
  <PortfolioView /> -->
</template>

<script setup>
import { ref } from "vue";
import AboutView from "./components/AboutView.vue";
import HomeView from "./components/HomeView.vue";
import NavbarView from "./components/NavbarView.vue";
import PortfolioView from "./components/PortfolioView.vue";

const init = ref([
  { id: 1, title: "title1" },
  { id: 2, title: "title1" },
  { id: 3, title: "title1" },
  { id: 4, title: "title1" },
  { id: 5, title: "title1" },
  { id: 6, title: "title1" },
  { id: 7, title: "title1" },
  { id: 8, title: "title1" },
]);
</script>

<style lang="scss" scoped></style>
