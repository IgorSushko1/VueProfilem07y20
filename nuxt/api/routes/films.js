const express = require('express')
const controller = require('../controllers/filmList.js')
const router = express.Router()

router.get('/films', controller.getFilms)
router.post('/films', controller.getFilm)

module.exports = router
