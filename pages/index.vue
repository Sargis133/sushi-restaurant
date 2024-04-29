<template>
  <div class="page-content">
    <div class="page-content__wrapper">
      <image-wrapper
        bg-image="/images/pages/frontpage.png"
        :title="wrapperTitle"
      />
    </div>
    <div class="page-content__nav-content">
      <div v-for="item in navItems" class="nav-content__item">
        <div class="item-image">
          <img :src="item.image" alt="nav-image" />
        </div>
        <div class="item-link">
          <img src="/images/icons/RoundedEdgeTopRight.png" alt="rd" class="rounded-edge-right"/>
          <p>{{ item.text }}</p>
          <ui-ui-button type="outline" class="item-link__btn" @click="onNavigateToPage(item.url)">
            <ui-ui-icons name="arrow-right" size="sm"/>
          </ui-ui-button>
          <img src="/images/icons/RoundedEdgeTopLeft.png" alt="rd" class="rounded-edge-left"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {I_NavigationItems} from "~/models/pages/index/interfaces";

definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
})

const wrapperTitle = ref<string[]>(["SUSHI", "SENSATION"]);

const navItems = ref<I_NavigationItems[]>([
  { image: "images/pages/menu.png", text: "MENU", url: '/menu' },
  { image: "images/pages/reservation.png", text: "RESERVATION", url: '/book' },
  { image: "images/pages/ourrestaurant.png", text: "OUR RESTAURANT",url: '/ourrestaurant' },
]);

function onNavigateToPage(url: string): void {
  navigateTo(url)
}
</script>

<style lang="scss" scoped>
@import "assets/css/global";
@import "assets/css/slidePage";

.page-content {
  display: grid;
  grid-template-columns: 64% 34%;
  justify-content: space-between;
  min-height: 100vh;
  grid-column-gap: 10px;
  overflow: hidden;

  .page-content__nav-content {
    padding: 10px 5px 0 5px;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    grid-row-gap: 10px;
    overflow: hidden;
    &:hover {
      overflow-y: auto;
    }
    &::-webkit-scrollbar {
      width: 0;
    }

    .nav-content__item {
      position: relative;

      .item-image {
        display: flex;
        justify-content: end;

        img {
          border-radius: 20px;
        }
      }

      .item-link {
        position: absolute;
        z-index: 10;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 2px 28px;
        border-radius: 28px 0 0 0;
        background-color: #0A0B0A;

        .rounded-edge-right {
          position: absolute;
          bottom: 38px;
          right: 0;
        }
        p {
          color: $text-color;
          font-family: $font-jost;
        }
        .item-link__btn {
          display: flex;
          align-items: center;
          padding: 8px;
          border-radius: 100px;
        }
        .rounded-edge-left {
          position: absolute;
          bottom: 0;
          left: -22px;
        }
      }
    }
  }
}

</style>
