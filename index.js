const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router()
const app = express()
const port = 3000
const session = require('express-session')
const passport = require('passport')
const redis = require('redis')

let client = redis.createClient()
const RedisStore = require('connect-redis')(session)

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.use(
  session({
    store: new RedisStore(client),
    secret: 'aaa',
    resave: false,
    saveUninitialized: false,
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.get('/user/', (request, response) => {
  response.send('Hello from Express!')
})
app.get('/errors', () => {
  throw new Error('oops')
})

app.post('/create', function (req, res) {
  // let answer = client.set(req.id, req[val], redis.print)
  // res.send('aswer should be ok ')
})

app.get('/create', (req, res) => {
  res.send('какой то ответ')
})

app.use((err, request, response) => {
  // логирование ошибки, пока просто console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
