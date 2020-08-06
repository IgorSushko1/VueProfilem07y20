const express = require('express')
const mongoose = require('mongoose')

// Create express instance
const app = express()
const session = require('express-session')
const passport = require('passport')

mongoose
  .connect('mongodb://localhost:27017/dbForNuxt', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB успешно подключена'))
  .catch((error) => console.log(error))
// парсер ответов
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies
// Require API routes
const users = require('./routes/users')
const test = require('./routes/test')
const auth = require('./routes/auth')

// Import API Routes
app.use(users)
app.use(test)
app.use(auth)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
