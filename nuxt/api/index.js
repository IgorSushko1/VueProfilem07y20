import keys from './keys'
const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const bodyParser = require('body-parser')
// const session = require('express-session')
// const passport = require('passport')
const app = express()

// app.use(cors())
mongoose
  .connect(`mongodb://localhost:27017/${keys.dbName}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB успешно подключена'))
  .catch((error) => console.log(error))

// парсер ответов
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Require API routes
const users = require('./routes/users')
const test = require('./routes/test')
const auth = require('./routes/auth')

// Import API Routes
app.use(users)
app.use(test)
app.use(auth)

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

// // Export express app
module.exports = app
