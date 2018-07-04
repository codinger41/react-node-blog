import mongoose from 'mongoose'
const schema = mongoose.Schema

const post = new Schema({ 
  title: { type: String, required: true },
  text: { type: String, required: true }
},{
  timestamps: true
})

export default mongoose.model('Post', post)