const express = require('express')
const controller = require('../controllers/commentsList.js')
const router = express.Router()

router.post('/comments', controller.getAll)

module.exports = router
