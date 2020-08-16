const mongoose = require('mongoose')
const { Schema } = mongoose

const filmSchema = new Schema({
  fullName: {
    type: String,
    unique: true,
    required: true,
  },
  translatedName: String,
  picName: String,
  country: String,
  genre: String,
  description: String,
})

module.exports = mongoose.model('films', filmSchema)
