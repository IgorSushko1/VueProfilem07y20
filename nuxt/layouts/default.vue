<style lang="scss" scoped>
html,
body {
  height: 100%;
}
.basis {
  margin: 0 auto 0;
  max-width: 1440px;
  // height: 100vh;
  display: table;
  height: 100%;

  &__header {
    width: 1180px;
    margin: 35px auto;
  }

  &__main {
    display: table-row;
    height: 100%;
  }
}
</style>

<template>
  <v-app>
    <div class="basis">
      <header-v class="mx-auto basis__header" />
      <nuxt class="basis__main" />
    </div>
    <footer-v class="mx-auto basis__footer" />
  </v-app>
</template>

<script>
import HeaderV from '~/components/Header.vue'
import FooterV from '~/components/Footer.vue'

export default {
  components: {
    HeaderV,
    FooterV,
  },
  data() {
    return {}
  },
}
</script>
