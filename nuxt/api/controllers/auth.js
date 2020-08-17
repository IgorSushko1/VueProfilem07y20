const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const User = require('../models/Users')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res, next) {
  const candidate = await User.findOne({ useremail: req.body.email })
  console.log(candidate)
  if (candidate) {
    const passwordResult = () => {
      const salt = crypto.randomBytes(16).toString('hex')
      const hash = crypto
        .pbkdf2Sync(req.body.password, salt, 10000, 512, 'sha512')
        .toString('hex')

      return candidate.userpassword === hash
    }

    if (passwordResult) {
      const token = jwt.sign(
        {
          user: {
            email: candidate.useremail,
            id: candidate._id,
            name: candidate.username,
          },
        },
        'jwt',
        { expiresIn: 60 * 4 }
      )
      console.log(jwt.verify(token, 'jwt'), ' Валидация прошла успешно!')

      res.status(200)
      res.json({
        token: `Bearer ${token}`,
        useremail: candidate.useremail,
        userid: candidate._id,
        username: candidate.username,
        user: {
          email: candidate.useremail,
          userid: candidate._id,
          username: candidate.username,
        },
      })
    } else {
      res.status(401)
      res.json({ message: 'Пароль не валиден. Попробуйте снова' })
    }
  } else {
    res.status(404)
    res.json({ message: 'Пользователь с таким email не найден' })
  }
}

module.exports.register = async function (req, res, next) {
  const candidate = await User.findOne({ useremail: req.body.email })
  if (candidate) {
    res.status(409)
    res.json({ message: 'Такой email уже занят. Попробуйте другой!' })
  } else {
    const salt = crypto.randomBytes(16).toString('hex')
    const user = new User({
      username: req.body.name,
      useremail: req.body.email,
      userpassword: crypto
        .pbkdf2Sync(req.body.password, salt, 10000, 512, 'sha512')
        .toString('hex'),
    })
    try {
      await user.save(function (err) {
        if (err) return errorHandler(err)
        console.log('User successfully saved.')
      })
      res.status(201)
      res.json(user)
    } catch (e) {
      errorHandler(res, e)
    }
  }
}

module.exports.updateName = async function (req, res, next) {
  try {
    // jwt.verify(req.headers.authorization.split(' ')[1], 'jwt', (e, payload) => {
    // if (e) {}
    // else {}
    // })
    let user = await User.findOneAndUpdate(
      { useremail: req.body.useremail },
      { username: req.body.username },
      { useFindAndModify: false }
    )
    const candidate = await User.findOne({ useremail: req.body.useremail })
    user = {
      useremail: candidate.useremail,
      username: candidate.username,
    }
    res.status(200)
    res.json({
      token: req.headers.authorization,
      user,
      message: 'Работаем дальше!',
    })
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ message: e })
  }
}
