import mongoose, { Schema } from 'mongoose'
const schema = mongoose.Schema

const user = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true }
})

export default mongoose.model('User', user)