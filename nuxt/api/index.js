const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./keys')
const app = express()

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
const auth = require('./routes/auth')
const films = require('./routes/films')
const comments = require('./routes/comments')

// Import API Routes
app.use(auth)
app.use(films)
app.use(comments)

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
} else {
  console.log('Ошибка при прослушке порта')
}

// // Export express app
module.exports = app
