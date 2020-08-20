<template>
  <v-form v-model="valid" @submit.prevent="sendInfo">
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

    <v-btn type="submit" :disabled="!valid" @click="setButton">{{ buttonText }}</v-btn>

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
    typeOfForm: {
      type: String,
      default: 'registration',
    },
    buttonText: {
      type: String,
      default: '',
    },
    hasName: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        name: 'igor',
        email: 'igor@igor.ru',
        password: '12345',
      },
      ...validations,
    }
  },
  computed: {},
  methods: {
    sendInfo() {
      if (this.valid && this.typeOfForm === 'registration') {
        this.$emit('register', this.userInfo)
      }
      if (this.valid && this.typeOfForm === 'login') {
        this.$emit('login', this.userInfo)
      }
    },
    setButton() {
      if (this.typeOfForm === 'login') {
      } else if (this.typeOfForm === 'registration') {
      }
    },
  },
}
</script>
