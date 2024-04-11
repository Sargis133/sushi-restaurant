<script setup lang="ts">

</script>

<template>
<div class="footer">
  <ul>
    <li>By SB</li>
    <li><img src="/images/icons/list.png" alt="list"></li>
    <li>Licensing</li>
    <li><img src="/images/icons/list.png" alt="list"></li>
    <li>Styleguide</li>
  </ul>
</div>
</template>

<style scoped lang="scss">
@import "assets/css/global";

.footer {
  border: 1px solid #272724;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 15px;
  margin: 8px;

  & ul {
    display: flex;
    justify-content: center;
    grid-column-gap: 20px;
    align-items: center;
    color: #767672;
    font-family: $font-jost;
  }
}
</style>