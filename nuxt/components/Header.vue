<style scoped lang="scss">
.container__header {
  display: flex;
  // width: 1000px;
  align-items: center;
}
.container__button {
  width: 130px;
  height: 38px;
  transition: background-color 0.5s ease;
  background: #e5261e !important;
  border-radius: 4px;
  border: none;
  color: white;
}

.container__button:hover {
  background: #cc221b;
  cursor: pointer;
}
</style>

<template>
  <div>
    <div class="container__header">
      <logo-video-service />
      <text-form :need-button="needButton" />
      <button-v class="container__button" />
      <v-btn @click="overlay = !overlay"></v-btn>
    </div>
    <v-overlay
      :value="overlay"
      :z-index="zIndex"
      :absolute="absolute"
      :opacity="opacity"
      dark="false"
    >
      <v-card width="304" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1 font-weight-bold mx-auto">Вход</h1>
        </v-card-title>
        <v-card-text class="pb-0">
          <v-form>
            <v-text-field label="Username" class="mt-0 pt-0 mx-5" />
            <v-text-field
              type="password"
              label="Password"
              class="mt-0 pt-0 mx-5"
            />
          </v-form>
        </v-card-text>
        <v-checkbox v-model="checkbox" label="Запомнить" class="mt-0 mx-8" />
        <v-card-actions class="mt-16">
          <v-btn
            large
            class="mx-auto pl-10 pr-10 mb-6 container__button"
            @click="overlay = !overlay"
            >Войти</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import LogoVideoService from './LogoVideoService/LogoVideoService.vue'
import TextForm from './TextForm'
import ButtonV from './Button'
export default {
  components: {
    LogoVideoService,
    TextForm,
    ButtonV,
  },
  props: {
    needButton: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      absolute: false,
      opacity: 0.1,
      overlay: false,
      zIndex: 5,
    }
  },
}
</script>
