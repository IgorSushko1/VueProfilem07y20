const assert = require('assert')
const mongoose = require('mongoose')
const User = require('../api/models/Users')
const Film = require('../api/models/Films')

const { Schema } = mongoose
mongoose.connect('mongodb://localhost:27017/dbForNuxt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

let data = [
  {
    fullName: 'Once Upon A Time In Hollywood',
    comment:
      'По моему ни на что не претендующему мнению, если человеку нужна особая причина, чтобы посмотреть Тарантино, то тут одно из двух: либо совсем уж вкусы разнятся, либо кинематограф, как явление человеку безразличен. Во всех остальных случаях имя режиссера говорит само за себя — надо смотреть.',
    author: 'Nickname',
    profileLink: 'undefined',
  },
  {
    fullName: 'Once Upon A Time In Hollywood',
    comment:
      'Мой комментарий о сюжете что-то кроме завязки категорически бессмысленно. Это фильм Тарантино — его надо смотреть самому.',
    author: 'MyName',
    profileLink: 'undefined',
  },
  {
    fullName: 'Once Upon A Time In Hollywood',
    comment:
      'Главный эмоциональный удар лента наносит в самом конце. Когда фильм после мастерского нагнетания сбрасывает оковы и пускается во все тяжкие. Финальные сцены являют собой нечто фантастическое. Они веселят и напрягают одновременно. Это действительно шедевральный отрывок, который будут помнить, но он ничто по сравнению с самым последним диалогом, от которого становится очень хорошо, но в то же время бесконечно грустно.',
    author: 'pasha_cinema',
    profileLink: 'undefined',
  },
]

const commentSchema = new Schema({
  fullName: {
    type: String,
    unique: true,
    required: true,
  },
  author: {
    type: String,
    unique: true,
    required: true,
  },
  profileLink: {
    type: String,
    unique: true,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
})

const Comment = mongoose.model('comments', commentSchema)

data.forEach(async (element) => {
  const film = await Film.findOne({ fullName: element.fullName })
  if (film) {
    try {
      const comment = await new Comment({
        fullName: element.fullName,
        comment: element.comment,
        author: element.author,
        profileLink: film._id,
      })
      await comment.save(function (err) {
        if (err) console.log(err)
        console.log('comment successfully saved.')
      })
    } catch (e) {
      console.log(e)
    }
  }
})
