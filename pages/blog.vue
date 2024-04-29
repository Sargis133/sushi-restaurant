<template>
  <div class="page-content">
    <div class="page-content__wrapper">
      <image-wrapper
        bg-image="images/pages/blog-main.png"
        :title="wrapperTitle"
      />
    </div>
    <div class="page-content__blog-content">
      <div class="blog-content__blog-column">
        <div class="blog-column__title">
          <ui-title :title="['BEHIND THE SCENES', '& LATEST NEWS']" size="2vw"/>
        </div>
        <div class="blog-column__items-list">
          <div v-for="item in items" class="blog-column__item">
            <div class="item__image">
              <img :src="'images/pages/' + item.image" alt="image" />
            </div>
            <div class="item-description">
              <div class="item__date">
                <ui-title :title="[item.date]" size="14px" color="#efe6d2" :hide-right-line="true"/>
              </div>
              <div class="item__title">
                <h4>{{ item.title }}</h4>
              </div>
              <div class="item__text">
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blog-content__footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blogItems } from "~/components/templates/blog/config/blogItems";
import type {I_BlogItems} from "~/models/pages/blog/interfaces";
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
});

const wrapperTitle = ref<string[]>(["BLOG"]);

const items = ref<I_BlogItems[]>(blogItems);
</script>

<style scoped lang="scss">
@import "assets/css/global";
@import "assets/css/slidePage";

.page-content {
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
  min-height: 100vh;
  grid-column-gap: 10px;
  background-image: url("/images/pages/menu-bg.png");
  background-size: cover;

  &__blog-content {
    display: flex;
    flex-direction: column;
    grid-row-gap: 10px;
    padding: 10px;
    height: 100vh;


    .blog-content__blog-column {
      margin: 5px;
      border: 1px solid #272724;
      border-radius: 10px;
      padding: 10px;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0  ;
      }

      .blog-column__title {
        padding: 25px;
      }

      .blog-column__items-list {
        display: flex;
        flex-direction: column;
        grid-row-gap: 15px;

        .blog-column__item {
          display: flex;
          justify-content: space-between;
          grid-column-gap: 20px;

          .item__image img{
            border-radius: 10px;
          }

          .item-description {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            .item__date {
              display: flex;
              justify-content: start;
            }
            .item__title {
              color: $text-color;
              font-family: $font-playfair;
              font-size: 1.5vw;
            }
            .item__text {
              color: #767672;
            }
          }
        }
      }
    }
  }
}
</style>
