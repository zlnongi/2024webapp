<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/images/logo_innogrid.svg"
          alt=""
          style="width: 120px"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'portfolio' }"
              class="nav-link"
              :class="{ active: $route.name === 'portfolioView', view: true }"
              >PORTFOLIO</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
