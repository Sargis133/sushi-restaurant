<template>
  <div class="input-box">
    <div class="input-box__input">
      <input
          v-model="inputValue"
          :type="inputType"
          :class="inputVariant + ' ' + inputSize"
          :placeholder="inputPlaceholder"
          :min="minValue"
          @focus="onFocusInputFunc"
          @blur="onBlurInputFunc"
          @input="onInputValueFunc"
      />
      <div class="input-box__icon">
        <slot />
      </div>
    </div>
    <span v-if="errorText" class="input-box__error-text">{{ errorText }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: any;
  variant?: string;
  size?: string;
  placeholder?: string;
  type?: string;
  minValue?: string;
  error?: string;
}>();

const emits = defineEmits<{
  (event: "update:model-value", value: any): void;
  (event: 'on-focus'): void;
  (event: 'on-blur'): void;
  (event: 'on-input', value: any): void;
}>();

const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits("update:model-value", newValue);
  },
});

const inputVariant = computed<string>(() => props.variant || "default");
const inputSize = computed(() => props.size || 'md');
const inputPlaceholder = computed<string>(() => props.placeholder || "");
const inputType = computed<string>(() => props.type || "text");
const minValue = computed(() => props.minValue || "");
const errorText = computed(() => props.error || '');

function onFocusInputFunc() {
  emits('on-focus')
}
function onBlurInputFunc() {
  emits('on-blur')
}
function onInputValueFunc(value: any) {
  emits('on-input', value.target.value)
}
</script>

<style scoped lang="scss">

.input-box {
  width: 100%;
}
.input-box__input {
  position: relative;
  width: 100%;
}
.input-box__icon {
  width: max-content;
  position: absolute;
  display: flex;
  align-self: center;
  right: 10px;
  top: 0;
  bottom: 0;
  z-index: 10;
}
.input-box__error-text {
  color: #E80000;
  font-family: "Jost",sans-serif;
}

.sm {
  padding: 5px 10px;
}
.md {
  padding: 10px 15px;
}
.lg {
  padding: 15px 20px;
}

.default {}
.outline {
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  outline: none;
  border: 1px solid #767672;
  border-radius: 5px;
  color: #767672;
  cursor: inherit;
  position: relative;
}

input[type='date']::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  color: transparent;
  opacity: 0;
  cursor: pointer;
}
input[type='time']::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  color: transparent;
  opacity: 0;
  cursor: pointer;
}
</style>
