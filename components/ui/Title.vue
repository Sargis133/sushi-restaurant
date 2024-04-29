<template>
  <div class="title-box">
    <img
      :class="{ hidden: leftLine }"
      src="/images/icons/line-icon.png"
      alt="line"
    />
    <img
      :class="{ hidden: leftLine }"
      src="/images/icons/left-line.png"
      alt="line"
    />
    <h4 :style="{ 'font-size': fontSize, color: fontColor }">
      <span v-for="title in titleText">{{ title }}<br /></span>
    </h4>
    <img
      :class="{ 'hidden': rightLine }"
      src="/images/icons/right-line.png"
      alt="line"
    />
    <img
      :class="{ 'hidden': rightLine }"
      src="/images/icons/line-icon.png"
      alt="line"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string[];
  size?: string;
  color?: string;
  hideRightLine?: boolean;
  hideLeftLine?: boolean;
}>();
const titleText = computed<string[]>(() => props.title);
const fontSize = computed<string>(() => props.size || "16px");
const fontColor = computed<string>(() => props.color || "$text-color");
const rightLine = computed<boolean>(() => props.hideRightLine);
const leftLine = computed<boolean>(() => props.hideLeftLine);
</script>

<style scoped lang="scss">
@import "assets/css/global";

.hidden {
  display: none;
}

.title-box {
  display: flex;
  align-items: center;
  justify-content: center;

  & h4 {
    font-family: $font-forum;
    color: $text-color;
    padding: 0 15px;
    text-align: center;
  }
}
</style>
