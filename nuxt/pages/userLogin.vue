<style lang="scss" scoped></style>

<template>
  <v-container>
    <user-auth-form type-of-form="login" button-text="Войти" :submit-form="loginUser" />
  </v-container>
</template>

<script>
import userAuthForm from '~/components/UserAuthForm.vue'
export default {
  components: { userAuthForm },
  data() {
    return {}
  },
  methods: {
    loginUser(userInfo) {
      this.$auth.loginWith('local')
      // alert('Работает loginUser!')
    },
  },
}
</script>
