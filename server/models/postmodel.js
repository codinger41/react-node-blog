import mongoose from 'mongoose'
import mongodbErrorHandler from 'mongoose-mongodb-errors'
const Schema = mongoose.Schema

const post = new Schema({ 
  title: { type: String, required: true },
  text: { type: String, required: true }
},{
  timestamps: true
})

post.plugin(mongodbErrorHandler)

export default mongoose.model('Posts', post)