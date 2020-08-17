<template>
  <div>
    <div>
      {{
      this.$route.params.id}}
    </div>
    <div>{{this.$store.state.comments}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'default',
  computed: { ...mapState(['comments']) },
  beforeMount() {
    console.log('start mount')
    // this.$store.dispatch('getComments', { film: '5f3a4fd4ce9aa41e10a58ee6' })
    // this.$store.dispatch('setComments')
  },
  methods: {},
}
</script>