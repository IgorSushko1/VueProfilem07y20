const mongoose = require('mongoose')
const { Schema } = mongoose

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

module.exports = mongoose.model('users', userSchema)
