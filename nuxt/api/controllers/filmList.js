const Films = require('../models/Films')
// const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/errorHandler')

module.exports.getFilms = async function (req, res, next) {
  try {
    console.log('я работаю! Films')
    const filmsList = await Films.find()
    res.status(200).json(filmsList)
  } catch (e) {
    errorHandler(e)
  }
}

module.exports.getFilm = async function (req, res, next) {
  try {
    console.log('я работаю!', req.body.id)
    const film = await Films.findOne({ _id: req.body.id })
    // console.log(film)
    res.status(200).json(film)
  } catch (e) {
    errorHandler(e)
  }
}
