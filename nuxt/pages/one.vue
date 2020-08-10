<template>
  <div>
    <a name class="btn btn-primary" href="two" role="button">Ссылка на вторую страницу страницу</a>
    <!-- <div>{{ token }}</div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  // computed: { ...mapState(['token']) },

  mounted() {
    const userInfo = {
      email: 'email@email.com',
      password: 'password',
    }
    this.$store.dispatch('loginUserv2', userInfo)
    this.$store.dispatch('getFromLocalStorage')
  },
}
</script>