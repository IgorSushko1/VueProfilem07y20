<template>
  <v-form v-model="valid">
    <v-text-field
      v-if="typeOfForm === 'registration'"
      v-model="userInfo.name"
      label="Name"
      :rules="[required('name'), minLength('name', 2)]"
    />

    <v-text-field
      v-model="userInfo.email"
      label="Email"
      :rules="[required('email'), emailFormat()]"
    />

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      :rules="[required('password'), minLength('password', 4)]"
      @click:append="showPassword = !showPassword"
    />

    <v-btn :disabled="!valid" @click="setButton">{{ buttonText }}</v-btn>

    <div v-if="typeOfForm === 'login'">
      <nuxt-link to="/userRegistration">
        <v-btn>Зарегистрироваться</v-btn>
      </nuxt-link>
    </div>
    <div v-if="typeOfForm === 'registration'">
      <nuxt-link to="/userLogin">
        <v-btn>Войти</v-btn>
      </nuxt-link>
    </div>
  </v-form>
</template>

<script>
import validations from '~/utils/validations'

export default {
  props: {
    typeOfForm: { type: String, default: 'registration' },
    submitForm: { type: Function, default() {} },
    buttonText: { type: String, default: '' },
    hasName: { type: Boolean, default: false },
  },
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        name: '',
        email: '',
        password: '',
      },
      ...validations,
    }
  },
  computed: {},
  methods: {
    setButton() {
      if (this.typeOfForm === 'login') {
        this.LoginUser(this.userInfo)
      } else if (this.typeOfForm === 'registration') {
        this.registerUser(this.userInfo)
      }
    },
    async LoginUser(log) {
      const user = await this.$store.dispatch('LoginUser', log)
      if (user.error) {
        alert(user.error)
      } else {
        alert('thanks for your signing in ' + user)
      }
    },
    async registerUser(reg) {
      const user = await this.$store.dispatch('registeredUser', reg)
      if (user.error) {
        alert(user.error)
      } else {
        alert('Thanks for your registration! ' + user.profile.name)
      }
    },
  },
}
</script>
