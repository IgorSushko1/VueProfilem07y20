/* eslint-disable prettier/prettier */
export const state = () => ({
  users: [],
  currentUser: {
    name: 'Test User'
  }
})
export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  LOGOUT_USER(state) {
    state.currentUser = {}
  },
  SET_CURRENT_USER(state, user) {
    state.currentUser = user;
  }
}

export const actions = {
  async loadUsers({
    commit
  }) {
    const response = await Api().get('/users')
    const users = response.data.data
    commit(
      'SET_USERS',
      users.arguments((u) => u.attributes)
    )
  },
  LogoutUser({
    commit
  }) {
    commit('LOGOUT_USER')
  },
  LoginUser({
    commit
  }, user) {
    commit('SET_CURRENT_USER', user)
  }
}
