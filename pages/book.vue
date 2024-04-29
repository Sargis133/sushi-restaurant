<template>
<div class="page-content">
  <div class="page-content__wrapper">
    <image-wrapper
        bg-image="images/pages/book-table.png"
        :title="wrapperTitle"

    />
  </div>
  <div class="page-content__book-content">
    <Reserve/>
  </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
});

const wrapperTitle = ref<string[]>(['BOOK','A Table'])
</script>

<style scoped lang="scss">
@import "assets/css/slidePage";

.page-content {
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
  min-height: 100vh;
  grid-column-gap: 10px;
  background-image: url("/images/pages/menu-bg.png");
  background-size: cover;

  &__book-content {
    margin: 15px;
    border: 1px solid #767672;
    padding: 20px;
    border-radius: 10px;
  }
}
</style>