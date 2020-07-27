<template>
  <div>
    <div v-for="(user, name, index) in users" :key="index">
      {{ user.name }}
      <v-btn x-small @click="LoginUser"></v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import users from '~/static/users.json'

export default {
  data() {
    return {
      users,
    }
  },
  computed: {
    ...mapState(['users']),
  },
  mounted() {
    this.$store.dispatch('loadUsers')
  },
  methods: {
    LoginUser() {
      this.$store.dispatch('LoginUser')
    },
  },
}
</script>
