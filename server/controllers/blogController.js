import mongoose from 'mongoose'
import Posts from '../models/postmodel'

exports.getAllBlogPosts = async (req, res) => {
  const posts = await Posts.find()
  res.json(posts)
}

exports.addNewPost = async (req, res) => {
  const { title, text } = req.body
  if(!title || !text){
    res.json({
      message: 'Post not created, fill in post title and post text',
      success: false
    })
  }
  const post = await Posts.create(req.body)
  res.json({
    post: post,
    message: 'Post created successfully',
    success: true
  })
}

exports.getPostById = async (req, res) => {
  const postId = req.params.postId
  const post = await Posts.findById(postId)
  if(post){
    res.json({
      post: post,
      success: true
    })
  }else{
    res.json({
      message: 'Post not found!',
      success: false
    })
  }
}

exports.deletePostbyId = async (req, res) => {
  const postId = req.params.postId
  const deletedPost = await Posts.findByIdAndRemove(postId)
  if(deletedPost){
    res.json({
      message: 'Post deleted successfully',
      success: true
    })
  }
}

exports.editPostById = async (req, res) => {
  const postId = req.params.postId
  const { text, title } = req.body
  const post = await Posts.findOne({ _id: postId })
  if(!post){
    res.json({
      message: 'Post not found!',
      success: false
    })
  }
  post.title = title || post.title
  post.text = text || post.text
  await post.save()
  res.json({
    message: 'Post updated successfully',
    success: false
  })
}