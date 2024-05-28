<template>
  <div class="reserve-content">
    <div class="reserve-content__title">
      <ui-title :title="['RESERVATION']" size="2vw" />
    </div>
    <div class="reserve-content__subtitle">
      <p>
        Secure your spot at Qitchen, where exceptional sushi and a remarkable
        dining experience await.
      </p>
    </div>
    <div class="reserve-content__form">
      <div>
        <ui-ui-input
          v-model="reserveData.name"
          class="form-input"
          size="lg"
          variant="outline"
          placeholder="Name"
          @onInput="onValidateNameValueFunc"
        />
      </div>
      <div>
        <ui-ui-input
          v-model="reserveData.phone"
          class="form-input"
          size="lg"
          variant="outline"
          placeholder="Phone Number"
          @onInput="onValidatePhoneValueFunc"
        />
      </div>
      <div>
        <ui-ui-input
          v-model="reserveData.email"
          class="form-input"
          size="lg"
          variant="outline"
          placeholder="Email"
        />
      </div>
      <div class="form__date">
        <div>
          <ui-ui-input
            v-model="reserveData.guests"
            class="form-input"
            size="lg"
            type="number"
            variant="outline"
            placeholder="Guests"
          />
        </div>
        <div>
          <ui-ui-input
            v-model="reserveData.date"
            class="form-input date-input"
            size="lg"
            variant="outline"
            placeholder="Date"
            :min-value="new Date().toJSON().slice(0, 10)"
            @onFocus="onChangeDateInputTypeFunc('date')"
            @onBlur="onChangeDateInputTypeFunc('text')"
            :type="inputDateVariant"
          >
            <ui-ui-button type="empty">
              <ui-ui-icons name="date" />
            </ui-ui-button>
          </ui-ui-input>
        </div>
        <div>
          <ui-ui-input
            v-model="reserveData.time"
            class="form-input date-input"
            size="lg"
            variant="outline"
            placeholder="Time"
            @onFocus="onChangeTimeInputTypeFunc('time')"
            @onBlur="onChangeTimeInputTypeFunc('text')"
            :type="inputTimeVariant"
          >
            <ui-ui-button type="empty">
              <ui-ui-icons name="time" />
            </ui-ui-button>
          </ui-ui-input>
        </div>
      </div>
      <div class="form__btn">
        <ui-ui-button
          class="reserve-btn"
          type="empty"
          @click="onSendReserveDataFunc"
          >RESERVE</ui-ui-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reserveData = ref({
  name: "",
  phone: "",
  email: "",
  guests: null,
  date: "",
  time: "",
});
let inputDateVariant = ref<string>("text");
let inputTimeVariant = ref<string>("text");

const onChangeDateInputTypeFunc = (type: "text" | "date") =>
  (inputDateVariant.value = type);
const onChangeTimeInputTypeFunc = (type: "text" | "time") => {
  inputTimeVariant.value = type;
}
function onValidateNameValueFunc(value: string) {
  let validValue = value.match(/^[A-Za-z\s]+/g);
  reserveData.value.name = validValue ? validValue[0] : "";
}
function onValidatePhoneValueFunc(value: string) {
  let validValue = value.match(/^\+([0-9]+)?/);
  reserveData.value.phone = validValue ? validValue[0] : "";
}
function onSendReserveDataFunc() {
  console.log(reserveData.value);
}
</script>

<style scoped lang="scss">
@import "assets/css/global";

.form-input {
  width: 100%;
  min-width: 100px;
  box-sizing: border-box;
}
.date-input {
  cursor: pointer;
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
