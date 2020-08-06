const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const User = require('../models/Users')
// const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({ useremail: req.body.email })
  console.log(req.body.email + ' -- проверка, какой email получает сервер')

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
          useremail: candidate.useremail,
          userId: candidate._id,
        },
        'jwt',
        { expiresIn: 60 * 60 }
      )

      res.status(200).json({ token: `Bearer ${token}` })
    } else {
      res.status(401).json({ message: 'Пароль не валиден. Попробуйте снова' })
    }
  } else {
    res.status(404).json({ message: 'Пользователь с таким email не найден' })
  }
}

module.exports.register = async function (req, res) {
  console.log(req.body.email + ' -- проверка, какой email получает сервер')
  const candidate = await User.findOne({ useremail: req.body.email })
  if (candidate) {
    res
      .status(409)
      .json({ message: 'Такой email уже занят. Попробуйте другой!' })
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
      console.log('Пытается создать логин и пароль...')
      console.log('Пользователь успешно создан!')
      console.log('Вы авторизованы!')

      await user.save()
      res.status(201).json(user)
    } catch (e) {
      errorHandler(res, e)
    }
  }
}
