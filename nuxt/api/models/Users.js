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

module.exports = mongoose.model('users', userSchema)
