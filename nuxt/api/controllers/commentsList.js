const jwt = require('jsonwebtoken')
const Comments = require('../models/Comments')
const Films = require('../models/Films')
const Users = require('../models/Users')

const errorHandler = require('../utils/errorHandler')

module.exports.create = async function (req, res, next) {
  console.log('Порт работает, вызов доходит до comments/new')
  console.log(req.headers.authorization, 'смотрю что в заголовке')

  await jwt.verify(
    req.headers.authorization.split(' ')[1],
    'jwt',
    async (e, payload) => {
      if (e) {
        console.log(e)
      } else {
        console.log('По крайней мере работает')
        console.log(payload, '-- что передается')
        console.log(req.body, '-- что передается в body')

        const film = await Films.findById(req.body.filmLink)
        const comment = new Comments({
          fullName: film.fullName,
          authorLink: payload.user.id,
          authorName: payload.user.name,
          filmLink: req.body.filmLink,
          comment: req.body.comment,
        })

        try {
          await comment.save()
          const newComments = await Comments.find({
            filmLink: req.body.filmLink,
          })
          console.log(newComments, '-- что возвращает')

          res.status(201).json(newComments)
        } catch (e) {
          errorHandler(e)
        }
      }
    }
  )
}

module.exports.getAll = async function (req, res, next) {
  try {
    const comments = await Comments.find({ filmLink: req.body.filmLink })

    setTimeout(() => {
      res.status(200).json(comments)
    }, 1000)
  } catch (e) {
    errorHandler(e)
  }
}

module.exports.delete = async function (req, res, next) {
  try {
    await Comments.deleteOne({
      _id: req.body._id,
    })
    const comments = await Comments.find({
      filmLink: req.body.filmLink,
    })
    res.status(200).json(comments)
  } catch (e) {
    errorHandler(e)
  }
}
