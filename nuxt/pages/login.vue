<template>
  <v-container>
    <h1>Login</h1>

    <UserAuthForm button-text="Login" :submit-form="loginUser" />
  </v-container>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm.vue'
export default {
  components: {
    UserAuthForm,
  },
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('loadUsers')
  },
  methods: {
    loginUser() {
      alert('Добавь вход в систему!')
    },
  },
}
</script>

<style lang="scss" scoped></style>
