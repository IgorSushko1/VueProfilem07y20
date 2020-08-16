const jwt = require('jsonwebtoken')
const Comments = require('../models/Comments')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function (req, res, next) {
  const comment = new Comments({
    film: req.body.film._id,
    author: req.body.user._id,
    comment: req.body.comment,
  })
  try {
    await comment.save()
    res.status(201).json(comment)
  } catch (e) {
    errorHandler(e)
  }
}

module.exports.getAll = async function (req, res, next) {
  try {
    const comments = await Comments.find({ film: req.body.film._id })
    setTimeout(() => {
      res.status(200).json(comments)
    }, 1000)
  } catch (e) {
    errorHandler(e)
  }
}
