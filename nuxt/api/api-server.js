export default {
  LATENCY: 16,
  _users: [{
      id: 1,
      type: 'user',
      attributes: {
        id: 1,
        name: 'Ivan',
        email: 't@t.t',
      },
    },
    {
      id: 2,
      type: 'user',
      attributes: {
        id: 2,
        name: 'Stanislav',
        email: 's@s.s',
      },
    },
  ],

  getUsers() {
    return this._users
  },

  loginInfo(info) {
    try {
      let answer = {}
      this._users.forEach((element) => {
        if (element.attributes.email === info.email) {
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

  // buyProducts(products, cb, errorCb) {
  //   setTimeout(() => {
  //     // simulate random checkout failure.
  //     Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb()
  //   }, 100)
  // },
}
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
