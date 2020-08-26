import axios from 'axios';

export const state = () => ({
  user: undefined,
  info: 'undefined',
  token: '',
  authenticated: false,
  registration: false,
  films: [],
  film: {},
  comments: [],
  searchResponse: [],
  searchResponseEroror: '',
});
export const mutations = {
  LOGOUT_USER(state) {
    state.user = undefined;
    state.token = undefined;
  },

  SET_USER_TOKEN(state, token) {
    state.token = token;
  },

  SET_USER(state, user) {
    state.user = user;
  },

  REGISTRATION(state, val) {
    state.registration = val;
  },

  SET_FILMS(state, films) {
    state.films = films;
  },

  SET_FILM(state, film) {
    state.film = film;
  },

  SET_COMMENTS(state, comments) {
    state.comments = comments.reverse();
  },

  SEARCH_RESPONSE(state, searchResponse) {
    state.searchResponse = searchResponse;
  },

};

export const actions = {
  getFromLocalStorage({ commit }) {
    const token = window.localStorage.getItem('auth-token');
    const name = window.localStorage.getItem('name');
    if (token && name != null) {
      commit('SET_USER_TOKEN', token);
      commit('SET_USER', name);
    }
  },

  LogoutUser({ commit }) {
    window.localStorage.clear();
    commit('LOGOUT_USER');
  },

  loginUserv2({ commit }, loginInfo) {
    try {
      console.log('loginInfo == ', loginInfo);
      axios
        .post('http://localhost:3000/api/login', loginInfo)
        .then(async (res) => {
          window.localStorage.setItem('name', res.data.username);
          window.localStorage.setItem('email', res.data.useremail);
          window.localStorage.setItem('auth-token', res.data.token);
          await commit('SET_USER', res.data.username);
          await commit('SET_USER_TOKEN', res.data.token);
        })
        .catch((error) => console.log(error));
    } catch {
      return {};
    }
  },

  registerUserv2({ commit }, registerInfo) {
    try {
      window.localStorage.clear();

      axios
        .post('http://localhost:3000/api/register', registerInfo)
        .then((res) => {
          window.localStorage.setItem('auth-token', res.data.token);
          window.localStorage.setItem('name', res.data.username);
          window.localStorage.setItem('email', res.data.useremail);
          commit('REGISTRATION', true);
        })
        .catch((error) => {
          console.log(error, 'Произошла ошибка регистрации');
        });
    } catch {
      return {};
    }
  },

  updateUserName({ commit }, name) {
    try {
      const user = {
        useremail: window.localStorage.getItem('email'),
        username: name,
      };
      axios
        .post('http://localhost:3000/api/updateName', user, {
          headers: {
            Authorization: window.localStorage.getItem('auth-token'),
          },
        })
        .then(async (res) => {
          console.log('Успешно работает обновление', res.data);
          window.localStorage.setItem('name', res.data.username);
          window.localStorage.setItem('email', res.data.useremail);
          window.localStorage.setItem('auth-token', res.data.token);
          await commit('SET_USER', res.data.username);
          await commit('SET_USER_TOKEN', res.data.token);
        })
        .catch((error) => {
          console.log(error, 'Произошла ошибка регистрации');
        });
    } catch {
      return {};
    }
  },

  async getFilm({ commit }, id) {
    try {
      console.log('выполняется при перезагрузке страницы', { id });
      await axios
        .post('http://localhost:3000/api/films', { id })
        .then((res) => {
          commit('SET_FILM', res.data);
        });
    } catch (error) {
      console.log(error);
    }
  },

  async getFilms({ commit }) {
    try {
      console.log(' getFilms выполняется при перезагрузке страницы');
      await axios.get('http://localhost:3000/api/films').then((res) => {
        commit('SET_FILMS', res.data);
      });
    } catch (error) {
      console.log(error);
    }
  },

  async getComments({ commit }, info) {
    try {
      console.log(' getComments выполняется при перезагрузке страницы');
      console.log(this.state.token, ' какой токен отправляется');

      await axios
        .post('http://localhost:3000/api/comments', { filmLink: info })
        .then((res) => {
          commit('SET_COMMENTS', res.data);
        })
        .then(() => {});
    } catch (error) {
      console.log(error);
    }
  },

  async createComment({ commit }, comment) {
    try {
      console.log('работает ли в сторе createComment');
      console.log(this.state.token, 'работает ли в сторе createComment');

      await axios
        .post('http://localhost:3000/api/comment/new', comment, {
          headers: { authorization: this.state.token },
        })
        .then((res) => {
          commit('SET_COMMENTS', res.data);
        })
        .catch((error) => {
          console.log(error, 'Произошла ошибка создания нового комментария');
        });
    } catch (error) {
      console.log(error);
    }
  },

  async deleteComment({ commit }, comment) {
    try {
      await axios
        .post('http://localhost:3000/api/comment/delete', comment, {
          headers: { Authorization: this.state.token },
        })
        .then((res) => {
          console.log(res.data, ' == response recive');
          commit('SET_COMMENTS', res.data);
        });
    } catch (error) {}
  },

    async findFilms({ commit }, val) {
           await commit('SEARCH_RESPONSE', []);
    try {
      console.log('Посылаю запрос', val);
      await axios
        .post('http://localhost:3000/api/films/find', { filmName: val })
        .then((res) => {
          if (!res.data.message) {
            commit('SEARCH_RESPONSE', res.data.films);
          } else {
            commit('SEARCH_RESPONSE', [{ description: res.data.message }]);
          }
        });
    } catch (error) {
    }
  },
};
