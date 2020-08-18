const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new Schema({
  fullName: { type: String },
  authorLink: {
    type: String,
    unique: false,
    required: false,
  },
  authorName: {
    type: String,
    unique: false,
    required: false,
  },
  filmLink: {
    type: String,
    unique: true,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('comments', commentSchema)
