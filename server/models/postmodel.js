import mongoose from 'mongoose'
const schema = mongoose.Schema

const post = new Schema({ 
  title: { type: String, required: true },
  text: { type: string, required: true }
},{
  timestamps: true
})

export default mongoose.model('Post', post)