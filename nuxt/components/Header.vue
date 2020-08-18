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
      <nuxt-link to="/">
        <logo-video-service />
      </nuxt-link>
      <text-form :need-button="true" />
      <div v-if="this.$store.state.user" class="d-flex">
        <v-card
          v-click-outside="onClickOutside"
          class="d-flex mx-auto ml-10"
          height="40"
          width="100"
          :flat="flat"
          outlained
          @click="active = true"
        >
          <v-text-field
            v-if="active"
            v-model="name"
            :flat="flat"
            :solo="solo"
            :single-line="singleLine"
            :dense="dense"
          ></v-text-field>
          <div v-else class="text-h6 d-flex align-center justify-center">{{ this.name }}</div>
        </v-card>
        <v-btn class="container__button" @click="LogoutUser">Выйти</v-btn>
      </div>

      <div v-else>
        <v-btn class="container__button ma-2" to="/userLogin">Войти</v-btn>
        <v-btn class="container__button" to="/userRegistration">Зарегистрироваться</v-btn>
      </div>
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
      name: 'yo',
      active: false,
      flat: true,
      solo: true,
      singleLine: true,
      dense: true,
    }
  },
  computed: { ...mapState(['user']) },
  async mounted() {
    await this.$store.dispatch('getFromLocalStorage')
    if (this.$store.state.user) {
      this.name = this.$store.state.user
    }
  },
  methods: {
    login() {},
    LogoutUser() {
      this.$store.dispatch('LogoutUser')
      this.$router.push('/')
    },
    async onClickOutside() {
      if (this.active) {
        await this.$store.dispatch('updateUserName', this.name)
        this.$store.dispatch('getFromLocalStorage')
      }
      this.active = false
    },
  },
}
</script>
