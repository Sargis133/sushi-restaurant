<template>
  <div class="header">
    <div class="header-items">
      <div class="header-items__burger-menu">
        <ui-ui-button
          type="outline"
          class="burger-menu__btn"
          @click="onOpenMenuFunc"
        >
          <ui-ui-icons name="menu-icon" size="lg" />
        </ui-ui-button>
      </div>
      <div class="header-items__logo">
        <NuxtLink to="/">
          <img src="/images/logo/Logo.png" alt="logo" />
        </NuxtLink>
      </div>
      <div class="header-items__nav-list">
        <ul class="nav-list">
          <li>
            <NuxtLink to="/menu">MENU</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">ABOUT</NuxtLink>
          </li>
          <li>
            <ui-ui-button type="outline" class="book-btn" @click="onBookTableFunc"
              >BOOK A TABLE</ui-ui-button
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
<!--  BURGER MENU-->
    <div class="burger-menu" :class="{'show': isShowMenu}">
      <div class="burger-menu__close-btn">
        <ui-ui-button type="empty" @click="onCloseMenuFunc"> X </ui-ui-button>
      </div>
      <div class="burger-menu__items-list">
        <ul>
          <li><NuxtLink to="/menu"> MENU </NuxtLink></li>
          <li><NuxtLink to="/book">RESERVATION</NuxtLink></li>
          <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
          <li><NuxtLink to="/contact">CONTACT</NuxtLink></li>
          <li><NuxtLink to="/blog">BLOG</NuxtLink></li>
        </ul>
      </div>
    </div>
</template>

<script setup lang="ts">
let isShowMenu = ref(false);

function onOpenMenuFunc() {
  isShowMenu.value = true;
}
function onCloseMenuFunc() {
  isShowMenu.value = false;
}
function onBookTableFunc() {
  navigateTo('/book')
}
</script>

<style lang="scss" scoped>
@import "assets/css/global";
.show {
  opacity: 1 !important;
  z-index: 100 !important;
}


.header {
  width: 510px;
  border-radius: 12px;
  background-color: #0a0b0a;
}
.header-items {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 20px;
}
.burger-menu__btn {
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 8px;
}

.header-items__nav-list {
  margin-left: 15px;

  .nav-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: $text-color;
    font-family: $font-jost;

    li:nth-child(-n + 2) {
      padding: 12px;
    }
    & li a {
      color: #efe6d2;
      &:hover {
        opacity: 0.7;
      }
    }
    .book-btn {
      border-radius: 8px;
      padding: 12px;
      font-size: 12px;
      font-family: $font-jost;
      font-weight: 700;
      letter-spacing: 1px;
      background-color: transparent;
    }
  }
}

.burger-menu {
  position: absolute;
  opacity: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 1s;

  .burger-menu__close-btn {
    display: flex;
    justify-content: end;
    padding: 20px;
    min-width: 200px;
    color: $text-color;

    & button {
      border: 1px solid #efe6d2;
      border-radius: 5px;
      padding: 8px;
      color: #efe6d2;
    }
  }
  .burger-menu__items-list {
    color: $text-color;
    font-family: $font-playfair;
    font-size: 30px;

    & ul li a{
      color: $text-color;
    }
  }
}
</style>
