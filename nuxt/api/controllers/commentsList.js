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
  console.log(req.body)
  try {
    const comments = await Comments.find({ profileLink: req.body.film })
    console.log(comments)
    setTimeout(() => {
      res.status(200).json(comments)
    }, 1000)
  } catch (e) {
    errorHandler(e)
  }
}
