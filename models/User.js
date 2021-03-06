const mongoose = require('mongoose')



const EventSchema = new mongoose.Schema({
  name: String,
  description: String,
})

const UserSchema = new mongoose.Schema ({
  name: String,
  email: String,
  password: String,
  events: [EventSchema],
})


module.exports = mongoose.models.User || mongoose.model('User', UserSchema)