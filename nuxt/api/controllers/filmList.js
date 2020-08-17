const Films = require('../models/Films')
// const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/errorHandler')

module.exports.getFilms = async function (req, res, next) {
  try {
    const filmsList = await Films.find()
    console.log(filmsList)
    res.status(200).json(filmsList)
  } catch (e) {
    errorHandler(e)
  }
}
