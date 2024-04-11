<template>
  <button :class="btnType">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string,
  size?: string,
}>()
const btnType = computed(() => props.type)
</script>

<style lang="scss" scoped>
.empty {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
}
.default {
  border: 1px solid;
  cursor: pointer;
}
.outline {
  cursor: pointer;
  background-color: #181818;
  border: 2px solid #32312e;
  color: #efe6d2;

  &:hover {
    opacity: 0.8;
  }
}
</style>
