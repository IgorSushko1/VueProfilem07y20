<style lang="scss" scoped>
.basis {
  margin: 35px auto 0;
  max-width: 1440px;

  &__header {
    width: 1180px;
    margin: 0 auto;
  }
}
</style>

<template>
  <v-app class="basis">
    <div>
      <header-v class="mx-auto basis__header" />
      <nuxt />
      <footer-v class="mx-auto" />
    </div>
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
