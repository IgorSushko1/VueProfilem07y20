<style scoped lang="scss">
.container__header {
  display: flex;
  width: 100%;
  align-items: center;
}
.container__button {
  // width: 130px;
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
      <nuxt-link to="/indexMovie"><logo-video-service /></nuxt-link>
      <text-form :need-button="true" />
      <v-btn class="container__button" @click="overlay = !overlay">Войти</v-btn>
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
            <v-text-field
              v-model="username"
              type="text"
              label="Username"
              class="mt-0 pt-0 mx-5"
            />
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
          <v-btn class="container__button mx-auto" @click="overlay = !overlay"
            >Войти</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-overlay>
    <!-- <div v-if="$auth.loggedIn"> -->
    <!-- {{ $auth.user.email }} -->
    <div v-if="currentUser.name">
      {{ currentUser.name }}
      <!-- <nuxt-link to="/userLogin"> -->
      <v-btn text class="mr-2" @click="LogoutUser">
        Logout
      </v-btn>
      <!-- </nuxt-link> -->
    </div>
    <div v-else>
      <v-btn text to="/userLogin">Login</v-btn>

      <v-btn text to="/userRegistration">Register</v-btn>
    </div>
    <!-- </div> -->
    <!-- <div v-else>
      <nuxt-link to="/Login">
        <v-btn text to="/userLogin">Login</v-btn>
      </nuxt-link>
      <v-btn text to="/userRegistration">Register</v-btn>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import adminUserList from '~/components/AdminUserList.vue'

import LogoVideoService from './LogoVideoService/LogoVideoService.vue'
import TextForm from './TextForm'
// import ButtonV from './Button'
export default {
  components: {
    LogoVideoService,
    TextForm,
    // ButtonV,
    // adminUserList,
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
    }
  },
  computed: {
    ...mapState(['currentUser']),
  },
  mounted() {
    this.$store.dispatch('loadCurrentUser')
  },
  methods: {
    login() {},
    LogoutUser() {
      this.$store.dispatch('LogoutUser')
    },
  },
}
</script>
