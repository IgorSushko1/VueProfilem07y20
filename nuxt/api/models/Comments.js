const mongoose = require('mongoose')
const { Schema } = mongoose

const commentsSchema = new Schema({
  film: String,
  comment: String,
  author: String,
})
module.exports = mongoose.model('comments', commentsSchema)
