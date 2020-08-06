const { Router } = require('express')

const router = Router()

// Test route
// router.use('/test', (_req, res) => {
//   // для всех типов запросов, т.е. будет перехватывать?
//   res.end('Test API!')
// })
router.get('/test', (_req, res) => {
  // для конкретного типа
  res.end('Test API! with GET METHOD!!!')
})
router.get(
  '/test/:id',
  function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
  },
  function (req, res, _next) {
    res.send('User Info: ' + Object.keys(req.params))
  }
)
module.exports = router
