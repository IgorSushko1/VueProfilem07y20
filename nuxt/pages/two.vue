<template>
  <div>
    <div v-if="currentUser">
      <div>Привет {{currentUser}}! Задание у тебя сложное..</div>
      <div>Твой токен для доступа -- {{token}}</div>
    </div>
    <div v-else>Простите, у вас нет доступа к этой информации</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: { ...mapState(['currentUser', 'token']) },

  mounted() {
    this.$store.dispatch('getFromLocalStorage')
  },
}
</script>