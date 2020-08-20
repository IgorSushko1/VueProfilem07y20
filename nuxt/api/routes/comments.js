const express = require('express')
const controller = require('../controllers/commentsList.js')
const router = express.Router()

router.post('/comments', controller.getAll)

router.post('/comment/new', controller.create)

router.post('/comment/delete', controller.delete)

module.exports = router
