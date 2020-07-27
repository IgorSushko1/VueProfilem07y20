<template>
  <v-app>
    <v-app-bar app color="green">
      <v-toolbar-title class="headline text-uppercase">
        <v-btn text to="/">Vue ScreenCasts</v-btn>
      </v-toolbar-title>
      <v-btn text to="/">Admin</v-btn>
      <v-spacer></v-spacer>
      <div v-if="currentUser.name">
        {{ currentUser.name }}
        <v-btn text>
          <span class="mr-2" @click="LogoutUser">Logout</span>
        </v-btn>
      </div>
      <div v-else>
        <v-btn text>
          <span class="mr-2">Login</span>
        </v-btn>
      </div>
    </v-app-bar>

    <admin-user-list />

    <v-content>
      <router-view />
    </v-content>

    <v-footer app color="green"></v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import adminUserList from '~/components/AdminUserList.vue'
export default {
  components: { adminUserList },
  data() {
    return {}
  },
  computed: {
    ...mapState(['currentUser']),
  },
  mounted() {
    this.$store.dispatch('')
  },
  methods: {
    LogoutUser() {
      this.$store.dispatch('LogoutUser')
    },
  },
}
</script>
