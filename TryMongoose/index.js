const mongoose = require('mongoose')
const Schema = mongoose.Schema
async function a() {
  await mongoose
    .connect('mongodb://localhost:27017/dbForNuxt', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB успешно подключена'))
    .catch((error) => console.log(error))
  // var MyModel = mongoose.model('dbForNuxt', new Schema({ name: String }));

  let userSchema = new Schema({
    userEmail: { type: String, unique: true, required: true },
    name: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  })
  const user = mongoose.model('user', userSchema)

  let u = new user({
    userEmail: 's@s.s',
    password: '1234',
    name: 'Stanislav',
  })

  await u.save(function (err) {
    if (err) return handleError(err)
    // saved!
    console.log('Author successfully saved.')
  })

  const candidate = await users.findOne({
    userEmail: 's@s.s',
  })

  console.log(candidate)
}

a()
