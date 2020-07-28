<template>
  <div>
    <v-card
      v-for="(user, name, index) in users"
      :key="index"
      class="ma-12 pa-12"
    >
      {{ user.attributes.name }}
      <v-btn x-small @click="LoginUser(user.attributes)">Login</v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['users']),
  },
  mounted() {
    this.$store.dispatch('loadUsers')
  },
  methods: {
    LoginUser(user) {
      this.$store.dispatch('LoginUser', user)
    },
  },
}
</script>
