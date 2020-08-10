/* eslint-disable prettier/prettier */
import axios from 'axios'

export const state = () => ({
  user: undefined,
  info: 'undefined',
  token: '',
  authenticated: false,
  registration: false,
})
export const mutations = {
  LOGOUT_USER(state) {
    state.user = undefined
    state.token = undefined
  },

  SET_USER_TOKEN(state, token) {
    state.token = token
  },

  SET_USER(state, user) {
    state.user = user
  },

  REGISTRATION(state, val) {
    state.registration = val
  },
}

export const actions = {
  LogoutUser({ commit }) {
    const token = window.sessionStorage.getItem('auth-token')
    const user = window.sessionStorage.getItem('name')
    // const email = window.sessionStorage.getItem('email')
    console.log('логаут работает', user, token)
    if (token && user) {
      commit('LOGOUT_USER')
      window.sessionStorage.setItem('name', '')
      window.sessionStorage.setItem('auth-token', '')
    }
  },

  loginUserv2({ commit }, loginInfo) {
    try {
      axios
        .post('http://localhost:3000/api/login', loginInfo)
        .then((res) => {
          window.sessionStorage.setItem('name', res.data.username)
          window.sessionStorage.setItem('email', res.data.useremail)
          window.sessionStorage.setItem('auth-token', res.data.token)
          console.log(
            'проверка записано ли в сессию',
            window.sessionStorage.getItem('auth-token')
          )
          console.log(
            'проверка записано ли в сессию',
            window.sessionStorage.getItem('name'),
            res.data.username
          )
        })
        .catch((error) => console.log(error))
    } catch {
      return {}
    }
  },

  async registerUserv2({ commit }, registerInfo) {
    try {
      window.sessionStorage.setItem('auth-token', null)
      window.sessionStorage.setItem('currentUser', null)

      await axios
        .post('http://localhost:3000/api/register', registerInfo)
        .then((res) => {
          window.sessionStorage.setItem('auth-token', res.data.token)
          window.sessionStorage.setItem('currentUser', res.data.user)
          commit('REGISTRATION', true)
        })
        .catch((error) => {
          console.log(error, 'Произошла ошибка регистрации')
        })
    } catch {
      return {}
    }
  },

  getFromLocalStorage({ commit }) {
    const token = window.sessionStorage.getItem('auth-token')
    const user = window.sessionStorage.getItem('name')
    const email = window.sessionStorage.getItem('email')

    if (token && user) {
      commit('SET_USER_TOKEN', token)
      commit('SET_USER', user)
    }
  },
}
