<style lang="scss" scoped></style>

<template>
  <v-container>
    <user-auth-form type-of-form="login" button-text="Войти" />
  </v-container>
</template>

<script>
import userAuthForm from '~/components/UserAuthForm.vue'
export default {
  components: {
    userAuthForm,
  },
  data() {
    return {
      loginInfo: {
        email: '',
        password: '',
      },
    }
  },
  methods: {},
}
</script>
