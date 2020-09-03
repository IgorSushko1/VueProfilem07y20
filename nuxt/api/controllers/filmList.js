const Films = require('../models/Films');
// const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/errorHandler');

module.exports.getFilms = async function (req, res, next) {
  try {
    console.log('я работаю! Films');
    const filmsList = await Films.find();
    res.status(200).json(filmsList);
  } catch (e) {
    errorHandler(e);
  }
};

module.exports.getFilm = async function (req, res, next) {
  try {
    console.log('я работаю!', req.body.id);
    const film = await Films.findOne({ _id: req.body.id });
    // console.log(film)
    res.status(200).json(film);
  } catch (e) {
    errorHandler(e);
  }
};

module.exports.findFilms = async function (req, res, next) {
  try {
    const num = req.body.filmName.charCodeAt(0);
    const strRegexp = '^' + req.body.filmName;
    const str = await new RegExp(strRegexp, 'i');
    let films;

    if (num >= 65 && num < 123) {
      films = await Films.find({ fullName: str });
    } else if (num >= 1040 && num < 1104) {
      films = await Films.find({ translatedName: str });
    }
    if (films.length > 0) {
      res.status(200).json({ films });
    } else {
      throw new Error("Фильмов с таким названием нет");
    }
  } catch (e) {
      res.status(404).send({ message: e.message });
  }
};
