<template>
  <div>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="userid" />
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="password" />
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="username" />
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="addr" />
    </div>
    <div class="input-group">
      <input
        type="file"
        class="form-control"
        id="fileform"
        @change="handleImage"
        accept="image/"
      />
      <label class="input-group-text" for="fileform">Upload</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
</script>

<style lang="scss" scoped></style>
