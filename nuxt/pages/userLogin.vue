

<script>
import userAuthForm from '~/components/UserAuthForm.vue'

export default {
  components: { userAuthForm },
  data() {
    return {}
  },
  computed: {},
  beforeMount() {
    this.$store.dispatch('getFromLocalStorage')
  },
  methods: {
    async loginUser(userInfo) {
      await this.$store.dispatch('loginUserv2', userInfo)

      this.$router.push('/')
    },
  },
}
</script>


<template>
  <v-container>
    <user-auth-form type-of-form="login" button-text="Войти" @login="loginUser" />
    <div>{{ this.$store.state.token }}</div>
  </v-container>
</template>
<style lang="scss" scoped></style>
