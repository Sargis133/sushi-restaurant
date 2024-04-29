<template>
  <div class="page-content">
    <div class="page-content__wrapper">
      <image-wrapper
        bg-image="images/pages/contact-main.png"
        :title="wrapperTitle"
      />
    </div>
    <div class="right-content">
      <div class="page-content__contact-content">
        <div class="top-section__job-times-section">
          <div class="job-times-section__title">
            <ui-title :title="['OPENING HOURS']" size="1.5vw"/>
          </div>
          <div class="job-times-section__list">
            <div v-for="time in jobDates" :key="time.day" class="list__items">
              <p>{{ time.day }}</p>
              <p class="line"></p>
              <p>{{ time.times }}</p>
            </div>
          </div>
        </div>
        <div class="top-section__images-section">
          <div class="image-section__image-box">
            <div class="image-box__hover">
              <NuxtLink to="/">
                <ui-ui-icons name="instagram" size="sm" />
              </NuxtLink>
            </div>
            <img src="images/pages/contact-1.png" alt="img" />
          </div>
          <div class="image-section__image-box">
            <div class="image-box__hover">
              <NuxtLink to="/">
                <ui-ui-icons name="instagram" size="sm" />
              </NuxtLink>
            </div>
            <img src="images/pages/contact-2.png" alt="img" />
          </div>
          <div class="image-section__image-box">
            <div class="image-box__hover">
              <NuxtLink to="/">
                <ui-ui-icons name="instagram" size="sm" />
              </NuxtLink>
            </div>
            <img src="images/pages/contact-3.png" alt="img" />
          </div>
          <div class="image-section__image-box">
            <div class="image-box__hover">
              <NuxtLink to="/">
                <ui-ui-icons name="instagram" size="sm" />
              </NuxtLink>
            </div>
            <img src="images/pages/contact-4.png" alt="img" />
          </div>
        </div>

        <div class="bottom-section__map-image">
          <img
            class="map-image__image"
            src="images/pages/contact-map.png"
            alt="img"
          />
          <div class="map-image__button">
            <img
              class="button__top-round"
              src="images/icons/RoundedEdgeTopLeft.png"
              alt="button__top-round"
            />
            <span>SHOW ROUTE</span>
            <ui-ui-button type="empty"
              ><ui-ui-icons name="arrow-right" size="sm"
            /></ui-ui-button>
            <img
              class="button__bottom-round"
              src="images/icons/RoundedEdgeTopLeft.png"
              alt="button__bottom-round"
            />
          </div>
        </div>
        <div class="bottom-section__contact-box">
          <div class="contact-box__title">
            <ui-title :title="['GET IN TOUCH']" size="1.5vw"/>
          </div>
          <div class="contact-box__address-list">
            <div class="address-list__item">
              <p>Address</p>
              <p>
                23 Greenfield Avenue,<br />
                <span>Prague 120 00</span>
              </p>
            </div>
            <div class="address-list__item">
              <p>Phone</p>
              <p>+49 1234 567890</p>
            </div>
            <div class="address-list__item">
              <p>Email</p>
              <p>email@example.com</p>
            </div>
            <div class="address-list__item">
              <p>Follow</p>
              <div>
                <NuxtLink to="/">
                  <ui-ui-icons name="instagram" size="sm" />
                </NuxtLink>
                <NuxtLink to="/">
                  <ui-ui-icons name="facebook" size="sm" />
                </NuxtLink>
                <NuxtLink to="/">
                  <ui-ui-icons name="twitter" size="sm" />
                </NuxtLink>
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
import { jobTimes } from "~/components/templates/contact/config/jobTimes";

definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
});

const wrapperTitle = ref(["CONTACT"]);
const jobDates = ref(jobTimes);
</script>

<style scoped lang="scss">
@import "assets/css/global";
@import "assets/css/slidePage";

.page-content {
  display: grid;
  grid-template-columns: 45% 54%;
  justify-content: space-between;
  height: 100vh;
  grid-column-gap: 10px;
  background-image: url("/images/pages/menu-bg.png");
  background-size: cover;
  .right-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 10px;
  }

  &__contact-content {
    display: grid;
    grid-template-columns: repeat(2, minmax(48%, 95%));
    grid-gap: 20px;
    padding: 10px;
    overflow: auto;
    max-height: 100vh;
    &::-webkit-scrollbar {
      width: 0;
    }

    .top-section__job-times-section {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      border: 1px solid #767672;
      border-radius: 10px;

      .job-times-section__title {
        color: #efe6d2;
        font-family: $font-playfair;
        font-size: 1.5vw;
        white-space: nowrap;
        padding: 5px;
      }
      .job-times-section__list {
        display: flex;
        flex-direction: column;
        grid-row-gap: 10px;
        padding: 15px;

        .list__items {
          display: grid;
          grid-template-columns: auto 2fr auto;
          align-items: baseline;
          grid-column-gap: 8px;

          .line {
            border-top: 1px dashed #767672;
          }
          p {
            color: #767672;
            font-family: $font-forum;
          }
        }
      }
    }
    .top-section__images-section {
      display: grid;
      grid-template-columns: auto auto;
      gap: 8px;

      .image-section__image-box {
        position: relative;

        &:hover {
          .image-box__hover {
            width: 100%;
          }
        }

        .image-box__hover {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          overflow: hidden;
          transition: width 1s;
          height: 100%;
          border-radius: 10px;
          background-color: rgba(0, 0, 0, 0.5);
        }

        & img {
          max-width: 100%;
          border-radius: 10px;
        }
      }
    }

    .bottom-section__map-image {
      position: relative;

      .map-image__image {
        max-width: 100%;
        border-radius: 10px;
      }
      .map-image__button {
        position: absolute;
        z-index: 5;
        right: 0;
        bottom: 3px;
        padding: 3px 15px;
        background-color: #0a0b0a;
        border-radius: 23px 0 8px 0;

        span {
          color: #767672;
        }

        button {
          margin-left: 5px;
          background-color: #0a0b0a;
          color: #767672;
          padding: 5px;
          border: 1px solid #767672;
          border-radius: 100px;
        }
        .button__top-round {
          position: absolute;
          top: 13px;
          left: -22px;
        }
        .button__bottom-round {
          position: absolute;
          bottom: 36px;
          right: 0;
        }
      }
    }
    .bottom-section__contact-box {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 10px;
      border: 1px solid #767672;
      border-radius: 10px;

      .contact-box__title {
        white-space: nowrap;
      }
      .contact-box__address-list {
        display: flex;
        flex-direction: column;
        grid-row-gap: 10px;
        padding: 15px;

        .address-list__item {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          color: #767672;
          font-family: $font-forum;

          div {
            display: flex;
            grid-column-gap: 5px;
          }
        }
      }
    }
  }
}
</style>
