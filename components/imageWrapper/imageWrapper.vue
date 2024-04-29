<template>
  <div ref="imgWrapper" class="image-wrapper">
    <div class="image-wrapper__header">
      <Header />
    </div>
    <div class="image-wrapper__bottom">
      <div class="image-wrapper__title">
        <h2 v-html="wrapperTitle.join('<br>')"></h2>
      </div>
      <div class="image-wrapper__society">
        <ul class="society-list">
          <li>
            <ui-ui-button type="outline" class="society-btn">
              <ui-ui-icons name="instagram" size="sm" />
            </ui-ui-button>
          </li>
          <li>
            <ui-ui-button type="outline" class="society-btn">
              <ui-ui-icons name="facebook" size="sm" />
            </ui-ui-button>
          </li>
          <li>
            <ui-ui-button type="outline" class="society-btn">
              <ui-ui-icons name="twitter" size="sm" />
            </ui-ui-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  bgImage: string;
  title: string[];
}>();

const wrapperImage = computed<string>(() => props.bgImage);
const wrapperTitle = computed<string[]>(() => props.title);

let imgWrapper = ref<null | HTMLElement>(null);

onMounted(() => {
  if (imgWrapper.value)
    imgWrapper.value.style.backgroundImage = "url(" + wrapperImage.value + ")";
});
</script>

<style lang="scss" scoped>
.image-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;

  .image-wrapper__header {
    padding: 40px;
  }
  .image-wrapper__bottom {

    .image-wrapper__title {

      h2 {
        font-family: "Forum", sans-serif;
        color: #efe6d2;
        font-size: 5vw;
        letter-spacing: 3px;
        line-height: 80px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        padding: 0 8vw;
        text-shadow: 4px 2px 5px black;
      }
    }

    .image-wrapper__society {
      .society-list {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 10px;
        padding: 15px;

        .society-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100px;
          padding: 5px;
        }
      }
    }
  }
}
</style>
