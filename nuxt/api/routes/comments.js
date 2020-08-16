const express = require('express')
const controller = require('../controllers/commentsList.js')
const router = express.Router()

router.get('/getcomments', controller.getAll)
