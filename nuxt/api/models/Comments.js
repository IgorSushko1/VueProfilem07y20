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
    required: true,
  },
  filmLink: {
    type: String,
    unique: false,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('comments', commentSchema)
