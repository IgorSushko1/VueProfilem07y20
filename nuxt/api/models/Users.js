const mongoose = require('mongoose')
const { Schema } = mongoose
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const userSchema = new Schema({
  useremail: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userpassword: {
    type: String,
    required: true,
  },
})

// userSchema.methods.setPassword = function (password) {
//   this.salt = crypto.randomBytes(16).toString('hex')
//   this.hash = crypto
//     .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
//     .toString('hex')
// }

// userSchema.methods.validatePassword = function (password) {
//   const hash = crypto
//     .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
//     .toString('hex')
//   return this.hash === hash
// }

// userSchema.methods.generateJWT = function () {
//   const today = new Date()
//   const expirationDate = new Date()
//   expirationDate.setDate(new Date(today.getDate() + 1))

//   return jwt.sign(
//     {
//       useremail: this.useremail,
//       id: this._id,
//       /* время в формате Unix Time(в секундах а не миллисекундах),
//        определяющее момент, когда токен станет не валидным (expiration). */
//       exp: parseInt(expirationDate.getTime() / 1000, 10),
//     },
//     'secret'
//   )
// }

// userSchema.methods.toAuthJSON = function () {
//   return {
//     _id: this._id,
//     useremail: this.email,
//     token: this.generateJWT(),
//   }
// }

module.exports = mongoose.model('users', userSchema)
