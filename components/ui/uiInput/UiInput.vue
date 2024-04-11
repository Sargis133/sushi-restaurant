<template>
<input :type="inputType" :class="inputVariant" :placeholder="inputPlaceholder"/>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: string,
  placeholder?: string,
  type?: string,
}>()

const inputVariant = computed(() => props.variant || 'default')
const inputPlaceholder = computed(() => props.placeholder || '')
const inputType = computed(() => props.type || 'text')
</script>

<style scoped lang="scss">
.default {

}
.outline {
  background: transparent;
  outline: none;
  border: 1px solid #767672;
  border-radius: 5px;
  color: #767672;
}
</style>