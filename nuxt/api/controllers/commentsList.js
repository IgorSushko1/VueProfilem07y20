const jwt = require('jsonwebtoken')
const Comments = require('../models/Comments')
const Films = require('../models/Films')

const errorHandler = require('../utils/errorHandler')

module.exports.create = function (req, res, next) {
  console.log('Порт работает, вызов доходит до comments/new')
  console.log(req.headers.authorization, 'смотрю что в заголовке')

  jwt.verify(
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

        console.log(req.body, '-- что передается в body')
        console.log(film, '-- что передается в film')
        console.log(
          film.fullName,
          ' = fullName ',
          payload.user.id,
          ' = authorLink ',
          payload.user.name,
          ' = authorName ',
          req.body.profileLink,
          ' = filmLink ',
          req.body.comment,
          ' == comment '
        )
        const comment = new Comments({
          fullName: film.fullName,
          authorLink: payload.user.id,
          authorName: payload.user.name,
          filmLink: req.body.filmLink,
          comment: req.body.comment,
        })

        try {
          await comment.save()
          res.status(201).json(comment)
        } catch (e) {
          errorHandler(e)
        }
      }
    }
  )
  // const comment = new Comments({
  //   film: req.body.film._id,
  //   author: req.body.user._id,
  //   comment: req.body.comment,
  //   profileLink: req.body.profileLink,
  // })
  // try {
  //   await comment.save()
  //   res.status(201).json(comment)
  // } catch (e) {
  //   errorHandler(e)
  // }
}

module.exports.getAll = async function (req, res, next) {
  try {
    const comments = await Comments.find({ filmLink: req.body.film })
    setTimeout(() => {
      res.status(200).json(comments)
    }, 1000)
  } catch (e) {
    errorHandler(e)
  }
}
