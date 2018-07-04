import mongoose from 'mongoose'
import mongodbErrorHandler from 'mongoose-mongodb-errors'
const Schema = mongoose.Schema

const user = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  blogname: { type: String, required: true },
  password: { type: String, required: true }
})

user.plugin(mongodbErrorHandler)

export default mongoose.model('Users', user)