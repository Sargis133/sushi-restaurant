<template>
  <div class="main-layout">
      <slot />
  </div>
</template>

<script setup lang="ts">
fetch('https://ipapi.co/json/').then(res => res.json()).then(r => console.log(r.ip))
</script>

<style scoped>

.main-layout {
  overflow: hidden;
  min-height: 100vh;
  background: #0A0B0A;
}
</style>
