<template>
  <div class="main">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
</script>

<style>
@import "assets/css/reset.css";
.main {
  min-height: 100vh;
}
body::-webkit-scrollbar {
  width: 8px;
}
body::-webkit-scrollbar-track {
  background: #efe6d2;
}
body::-webkit-scrollbar-thumb {
  background: #767672;
  border-radius: 5px;
}
</style>
