<template>
  <div class="reserve-content">
    <div class="reserve-content__title">
      <ui-title :title="['RESERVATION']" size="2vw"/>
    </div>
    <div class="reserve-content__subtitle">
      <p>
        Secure your spot at Qitchen, where exceptional sushi and a remarkable
        dining experience await.
      </p>
    </div>
    <div class="reserve-content__form">
      <div>
        <ui-ui-input class="form-input" variant="outline" placeholder="Name" />
      </div>
      <div>
        <ui-ui-input
          class="form-input"
          variant="outline"
          placeholder="Phone Number"
        />
      </div>
      <div>
        <ui-ui-input class="form-input" variant="outline" placeholder="Email" />
      </div>
      <div class="form__date">
        <div>
          <ui-ui-input
            class="date-input"
            type="number"
            variant="outline"
            placeholder="Guests"
          />
        </div>
        <div>
          <ui-ui-input
            class="date-input"
            variant="outline"
            placeholder="Date"
            @focus="inputDateVariant = 'date'"
            @blur="inputDateVariant = 'text'"
            :type="inputDateVariant"
          />
        </div>
        <div>
          <ui-ui-input
            class="date-input"
            variant="outline"
            placeholder="Time"
            @focus="inputTimeVariant = 'time'"
            @blur="inputTimeVariant = 'text'"
            :type="inputTimeVariant"
          />
        </div>
      </div>
      <div class="form__btn">
        <ui-ui-button class="reserve-btn" type="empty">RESERVE</ui-ui-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let inputDateVariant = ref<string>("text");
let inputTimeVariant = ref<string>("text");
</script>

<style scoped lang="scss">
@import "assets/css/global";

.form-input {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 18px;
}
.date-input {
  padding: 15px 18px;
  width: 100%;
  box-sizing: border-box;
}

.reserve-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .reserve-content__subtitle {
    font-family: $font-forum;
    color: #767672;
    text-align: center;
    padding: 25px;
  }
  .reserve-content__form {
    display: flex;
    flex-direction: column;
    grid-row-gap: 10px;
    width: 85%;

    .form__date {
      display: flex;
      grid-column-gap: 10px;

    }
    .form__btn {
      display: flex;
      justify-content: center;
      align-items: center;

      .reserve-btn {
        border: 1px solid #efe6d2;
        width: 100%;
        padding: 12px 15px;
        border-radius: 5px;
        color: #efe6d2;

        &:hover {
          background: #767672;
          color: #272724;
        }
      }
    }
  }
}
</style>
