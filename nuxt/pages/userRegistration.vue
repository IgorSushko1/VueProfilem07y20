<template>
  <user-auth-form
    type-of-form="registration"
    :submit-form="registerUser"
    button-text="Зарегистрироваться"
  />
</template>

<script>
import userAuthForm from '~/components/UserAuthForm.vue'

export default {
  components: {
    userAuthForm,
  },
  methods: {
    registerUser(userInfo) {
      alert('Работает registerUser!')
    },
  },
}
</script>
