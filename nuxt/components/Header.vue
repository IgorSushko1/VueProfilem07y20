<style scoped lang="scss">
.container__header {
  display: flex;
  width: 100%;
  align-items: center;
}
.container__button {
  padding: 0 29px !important;
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
    <div class="container__header justify-space-between">
      <nuxt-link to="/indexMovie">
        <logo-video-service />
      </nuxt-link>
      <text-form :need-button="true" />
      <div v-if="this.$store.state.user">
        <div>{{this.$store.state.user}}</div>
        <v-btn class="container__button" @click="LogoutUser">Выйти</v-btn>
      </div>
      <div v-else>
        <v-btn class="container__button" to="/userLogin">Войти</v-btn>

        <v-btn class="container__button" to="/userRegistration">Зарегистрироваться</v-btn>
      </div>

      <!-- <v-btn class="container__button" to="/userLogin" 
      @click="overlay = !overlay"
      >Войти</v-btn>-->
    </div>
    <v-overlay
      :value="overlay"
      :z-index="zIndex"
      :absolute="absolute"
      :opacity="opacity"
      :dark="false"
    >
      <v-card width="304" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1 font-weight-bold mx-auto">Вход</h1>
        </v-card-title>
        <v-card-text class="pb-0">
          <v-form>
            <v-text-field v-model="username" type="text" label="Username" class="mt-0 pt-0 mx-5" />
            <v-text-field
              v-model="password"
              type="password"
              label="Password"
              class="mt-0 pt-0 mx-5"
            />
          </v-form>
        </v-card-text>
        <!-- <v-checkbox :v-model="checkbox" label="Запомнить" class="mt-0 mx-8" /> -->
        <v-card-actions class="mt-16">
          <v-btn class="container__button mx-auto" @click="overlay = !overlay">Войти</v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import LogoVideoService from './LogoVideoService/LogoVideoService.vue'
import TextForm from './TextForm'
export default {
  components: {
    LogoVideoService,
    TextForm,
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
      username: '',
      password: '',
      name: '',
    }
  },
  computed: { ...mapState(['user']) },
  mounted() {
    this.$store.dispatch('getFromLocalStorage')
  },
  beforeMount() {
    // this.$store.dispatch('getFromLocalStorage')
  },
  methods: {
    login() {},
    LogoutUser() {
      this.$store.dispatch('LogoutUser')
      this.$router.push('/indexMovie')
    },
  },
}
</script>
