<template>
  <div class="page-content">
    <div class="page-content__wrapper">
      <image-wrapper bg-image="images/pages/about.png" :title="wrapperTitle" />
    </div>
    <div class="page-content__about-content">
      <div class="about-content__top-section">
        <div class="top-section__description">
          <h4>
            SUSHI ARTISTRY <br />
            REDEFINED
          </h4>
          <p>
            Where culinary craftsmanship meets modern elegance. Indulge in the
            finest sushi, expertly curated to elevate your dining experience.
          </p>
        </div>
        <div class="top-section__image">
          <img src="/images/pages/about-1.png" alt="about-1" />
        </div>
      </div>

      <div class="about-content__center-section">
        <div
          v-for="item in reviews"
          :key="item.name"
          class="center-section__items"
        >
          <div class="items__stars">
            <span v-for="index in 5" :key="index"
              ><ui-ui-icons name="star" size="sm"
            /></span>
          </div>
          <div class="items__name">
            <p>{{ item.name }}</p>
          </div>
          <div class="items__text">
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>

      <div class="about-content__last-section">
        <div class="last-section__image">
          <img src="/images/pages/about-2.png" alt="about-2" />
        </div>
        <div class="last-section__description">
          <div class="description__title">
            <ui-title :title="['OUR STORY']" size="1.5vw"/>
          </div>
          <div class="last-section__text">
            <p>
              Founded with a passion for culinary excellence, Qitchen's journey
              began in the heart of Prague. Over years, it evolved into a haven
              for sushi enthusiasts, celebrated for its artful mastery and
              devotion to redefining gastronomy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {I_AboutReviews} from "~/models/pages/about/interfaces";

definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
});

const wrapperTitle = ref<string[]>(["ABOUT"]);

const reviews = ref<I_AboutReviews[]>([
  { name: "Trip Advisor", text: "BEST STEAK HOUSE PRAGUE" },
  { name: "MICHELIN GUIDE", text: "BEST STEAK HOUSE PRAGUE" },
  { name: "STAR DINING", text: "BEST STEAK HOUSE PRAGUE" },
]);
</script>

<style scoped lang="scss">
@import "assets/css/global";
@import "assets/css/slidePage";

.page-content {
  display: grid;
  grid-template-columns: minmax(50%,55%) minmax(45%, 50%);
  justify-content: space-between;
  min-height: 100vh;
  grid-column-gap: 20px;
  background-image: url("/images/pages/menu-bg.png");
  background-size: cover;

  &__about-content {
    display: flex;
    flex-direction: column;
    grid-row-gap: 10px;
    padding: 10px;


    .about-content__top-section {
      display: grid;
      grid-template-columns: repeat(2,minmax(200px,max-content));
      justify-content: space-between;
      grid-column-gap: 10px;

      .top-section__description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        border: 1px solid #767672;
        border-radius: 10px;

        h4 {
          color: #efe6d2;
          font-family: $font-playfair;
          font-size: 2.5vw;
        }
        p {
          color: #767672;
          font-family: $font-jost;
        }
      }
      .top-section__image {
        display: flex;
        justify-content: end;

        img {
          border-radius: 10px;
          width: 90%;
        }
      }
    }
    .about-content__center-section {
      display: flex;
      grid-column-gap: 10px;

      .center-section__items {
        border: 1px solid #767672;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: center;
        align-items: center;
        grid-row-gap: 12px;

        .items__name {
          color: #efe6d2;
          font-family: $font-forum;
          font-size: 1.5vw;
        }
        .items__text {
          color: #767672;
          font-family: $font-jost;
        }
      }
    }
    .about-content__last-section {
      display: grid;
      grid-template-columns: repeat(2,minmax(200px,max-content));
      grid-column-gap: 10px;
      justify-content: space-between;

      .last-section__image {
        img {
          width: 90%;
          border-radius: 10px;
        }
      }
      .last-section__description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #767672;
        border-radius: 10px;
        padding: 10px;

        .last-section__text {
          color: #767672;
          font-family: $font-forum;
          text-align: center;
          padding: 10px;
        }
      }
    }
  }
}
</style>
