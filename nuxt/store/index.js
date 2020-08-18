/* eslint-disable prettier/prettier */
import axios from 'axios'

export const state = () => ({
  user: undefined,
  info: 'undefined',
  token: '',
  authenticated: false,
  registration: false,
  films: [],
  comments: [],
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

  SET_FILMS(state, films) {
    state.films = films
  },

  SET_COMMENTS(state, comments) {
    state.comments = comments
  },
}

export const actions = {
  LogoutUser({ commit }) {
    window.localStorage.clear()
    commit('LOGOUT_USER')
  },

  loginUserv2({ commit }, loginInfo) {
    try {
      axios
        .post('http://localhost:3000/api/login', loginInfo)
        .then((res) => {
          window.localStorage.setItem('name', res.data.username)
          window.localStorage.setItem('email', res.data.useremail)
          window.localStorage.setItem('auth-token', res.data.token)
        })
        .catch((error) => console.log(error))
    } catch {
      return {}
    }
  },

  registerUserv2({ commit }, registerInfo) {
    try {
      window.localStorage.clear()

      axios
        .post('http://localhost:3000/api/register', registerInfo)
        .then((res) => {
          window.localStorage.setItem('auth-token', res.data.token)
          window.localStorage.setItem('name', res.data.username)
          window.localStorage.setItem('email', res.data.useremail)
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
    const token = window.localStorage.getItem('auth-token')
    const name = window.localStorage.getItem('name')
    if (token && name != null) {
      commit('SET_USER_TOKEN', token)
      commit('SET_USER', name)
    }
  },

  updateUserName({ commit }, name) {
    try {
      const user = {
        useremail: window.localStorage.getItem('email'),
        username: name,
      }
      axios
        .post('http://localhost:3000/api/updateName', user, {
          headers: {
            Authorization: window.localStorage.getItem('auth-token'),
          },
        })
        .then((res) => {
          window.localStorage.setItem('auth-token', res.data.token)
          window.localStorage.setItem('name', res.data.user.username)
          window.localStorage.setItem('email', res.data.user.useremail)
        })
        .catch((error) => {
          console.log(error, 'Произошла ошибка регистрации')
        })
    } catch {
      return {}
    }
  },

  async getFilms({ commit }) {
    try {
      console.log('выполняется при перезагрузке страницы')
      await axios.get('http://localhost:3000/api/films').then((res) => {
        commit('SET_FILMS', res.data)
      })
    } catch (error) {
      console.log(error)
    }
  },

  async getComments({ commit }, info) {
    try {
      console.log('выполняется при перезагрузке страницы')
      await axios
        .post('http://localhost:3000/api/comments', { film: info })
        .then((res) => {
          commit('SET_COMMENTS', res.data)
        })
    } catch (error) {
      console.log(error)
    }
  },

  async createComment({ commit }, comment) {
    try {
      await axios
        .post('http://localhost3000/api/comments/new', comment)
        .then((res) => {
          commit('SET_COMMENTS', res.data)
        })
    } catch (error) {
      console.log(error)
    }
  },
}
