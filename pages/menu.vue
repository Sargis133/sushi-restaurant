<template>
  <div class="page-content">
    <div class="page-content__wrapper">
      <image-wrapper
        bg-image="images/pages/menu-wrapper.png"
        :title="wrapperTitle"
      />
    </div>
    <div class="page-content__menu-section">
      <div class="page-content__menu-content">
        <div class="menu-content__categories-list">
          <ul class="categories-list">
            <li>MAKI</li>
            <li>URAMAKI</li>
            <li>SPECIAL ROLLS</li>
          </ul>
        </div>
        <div class="menu-content__products-list">
          <div
            v-for="product in products"
            :key="product.category"
            class="products-list__product"
          >
            <div class="product-category">
              <ui-title :title="[product.category.toUpperCase()]" size="2vw"/>
            </div>
            <div class="product-items__product-list">
              <div v-for="item in product.products" class="product-list__item">
                <div class="item-image">
                  <img :src="'~/assets/images/' + item.image" alt="product" />
                </div>
                <div class="item-text">
                  <div class="item-text__title">
                    <h4 class="title">
                      {{ item.name }}
                      <span v-if="item.list">
                        <img src="/images/icons/list.png" alt="list" />
                      </span>
                    </h4>
                    <p class="line"></p>
                    <p class="price">{{ item.price }}</p>
                  </div>
                  <p class="description">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-content__footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { allCategories } from "~/components/templates/menu/config/products";
import type { I_Categories } from "~/models/pages/menu/interfaces";
import Footer from "~/components/footer/Footer.vue";

definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
});

const wrapperTitle = ref<string[]>(["MENU"]);
const products = ref<I_Categories[]>(allCategories);
</script>

<style scoped lang="scss">
@import "assets/css/global";
@import "assets/css/slidePage";

.page-content {
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
  height: 100vh;
  grid-column-gap: 10px;
  background-image: url("/images/pages/menu-bg.png");
  background-size: cover;

  .page-content__menu-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  &__menu-content {

    border: 1px solid #272724;
    margin: 10px;
    border-radius: 10px;
    height: 100vh;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }

    .menu-content__categories-list {
      .categories-list {
        display: flex;
        grid-column-gap: 5px;
        justify-content: center;
        padding-top: 20px;
        color: $text-color;
        font-family: $font-jost;
      }
      & li {
        padding: 8px;
        border: 2px solid #272724;
        border-radius: 8px;
      }
    }
    .menu-content__products-list {
      margin-top: 10vh;
      display: flex;
      flex-direction: column;
      grid-row-gap: 30px;

      .products-list__product {
        .product-category {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: $text-color;
          font-family: $font-playfair;
        }
        .product-items__product-list {
          padding: 20px;
          display: flex;
          flex-direction: column;
          grid-row-gap: 15px;

          .product-list__item {
            display: flex;
            align-items: center;
            grid-column-gap: 15px;
            color: $text-color;

            .item-image img {
              border-radius: 10px;
            }

            .item-text {
              display: flex;
              flex-direction: column;
              grid-row-gap: 10px;

              .description {
                font-family: $font-jost;
                letter-spacing: 0.5px;
                color: #767672;
                font-size: 14px;
              }

              &__title {
                font-family: $font-playfair;
                font-size: 18px;
                display: grid;
                grid-template-columns: auto 2fr auto;
                justify-content: space-between;
                align-items: end;

                .title {
                  color: $text-color;
                  font-family: $font-playfair;
                  font-size: 20px;
                  letter-spacing: 1px;
                }
                .line {
                  display: flex;
                  justify-self: center;
                  width: 90%;
                  height: 1px;
                  border-top: 1px dashed #767672;
                }
                .price {
                  font-family: $font-forum;
                  color: $text-color;
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
