<template>
<input :type="inputType" :class="inputVariant" :placeholder="inputPlaceholder"/>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: string,
  placeholder?: string,
  type?: string,
}>()

const inputVariant = computed<string>(() => props.variant || 'default')
const inputPlaceholder = computed<string>(() => props.placeholder || '')
const inputType = computed<string>(() => props.type || 'text')
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