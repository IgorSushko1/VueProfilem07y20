<style lang="scss" scoped></style>

<template>
  <v-container>
    <v-form>
      <v-text-field v-model="loginInfo.email" type="Email" label="Email" />
      <v-text-field
        v-model="loginInfo.password"
        type="Password"
        label="Password"
      />
    </v-form>
    <v-btn @click="LoginUser">Login</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async LoginUser() {
      const user = await this.$store.dispatch('LoginUser', this.loginInfo)
      if (user.error) {
        alert(user.error)
      } else {
        alert('thanks for your signing in ' + user)
      }
    },
  },
}
</script>
