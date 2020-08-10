<template>
  <div></div>
</template>

<script>
export default {
  layout: 'default',
  methods: {
    switchPage() {
      this.$router.push({
        path: this.localePath('search'),
        query: { q: this.q },
      })
    },
  },
}
</script>