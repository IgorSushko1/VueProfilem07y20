/* eslint-disable prettier/prettier */

import Api from '~/api/api-server'


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
    window.localStorage.currentUser = JSON.stringify({});

  },
  SET_CURRENT_USER(state, user) {
    state.currentUser = user;
    window.localStorage.currentUser = JSON.stringify(user);
  }
}

export const actions = {
  async loadUsers({
    commit
  }) {
    const response = await Api.getUsers();
    commit(
      'SET_USERS',
      response);
    const user = JSON.parse(window.localStorage.currentUser);
    commit('SET_CURRENT_USER', user)
  },

  loadCurrentUser({
    commit
  }) {
    const user = JSON.parse(window.localStorage.currentUser);
    commit('SET_CURRENT_USER', user)
  },

  LogoutUser({
    commit
  }) {
    commit('LOGOUT_USER')
  },
  async LoginUser({
    commit
  }, loginInfo) {

    try {
      const response = await Api.loginInfo(loginInfo);
      if (response.bool) {
        commit('SET_CURRENT_USER', response.profile)
      }
      return response.profile.name
    } catch {
      return {
        error: "Email/password комбинация не корректна. Пожалуйста, введите корректные данные от своего профиля"
      }
    }
  },

  async registeredUser({
    commit
  }, registrationInfo) {
    try {
      const response = await Api.createUser(registrationInfo);
      if (response.bool) {
        commit('SET_CURRENT_USER', response.profile)
      }
      debugger
      return response.profile.name
    } catch {
      return {
        error: "Произошла ошибка. Попробуйте зарегистрироваться заново"
      }
    }
  }
}
