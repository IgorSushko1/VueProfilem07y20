export default {
  LATENCY: 16,
  _users: [{
      id: 1,
      type: 'user',
      attributes: {
        id: 1,
        name: 'Ivan',
        email: 't@t.t',
        password: '1234',
      },
    },
    {
      id: 2,
      type: 'user',
      attributes: {
        id: 2,
        name: 'Stanislav',
        email: 's@s.s',
        password: '2345',
      },
    },
  ],

  getUsers() {
    return this._users
  },

  createUser(userInfo) {
    try {
      this._users.push({
        id: this._users.length + 1,
        type: 'user',
        attributes: {
          id: this._users.length + 1,
          name: userInfo.name,
          email: userInfo.email,
          password: userInfo.password,
        },
      })
      window.localStorage.user = this._users[this._users.length - 1]
      const answer = {}
      answer.bool = true
      answer.profile = this._users[this._users.length - 1].attributes
      return answer
    } catch {
      return false
    }
  },

  loginInfo(info) {
    try {
      const answer = {}
      this._users.forEach((element) => {
        if (
          element.attributes.email === info.email &&
          element.attributes.password === info.password
        ) {
          answer.bool = true
          answer.profile = element.attributes
        }
      })
      if (answer.bool === true) {
        return answer
      }
    } catch {
      return false
    }
  },


}

// buyProducts(products, cb, errorCb) {
//   setTimeout(() => {
//     // simulate random checkout failure.
//     Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb()
//   }, 100)
// },
// export default async (req, res, next) => {
//   let url = req._parsedUrl.pathname.replace(/^\/+|\/+$|\.+/g, '')
//   url = url.split('/')
//   const method = url.pop()
//   const controller = url.slice(1).join('/')
//   const api = require('../api/' + controller)
//   const result = await api[method](req.params)
//   res.end(JSON.stringify(result))
// }
/**
 * Mocking client-server processing
 */
