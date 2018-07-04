import axios from 'axios'

export async function getAllPosts() {
  try {
    const posts = await axios.get('http://localhost:5000/posts')
    return posts.data
  } catch (err) {
    return err.message
  }
}

export async function getOnePost(postId){
  try {
    const post = await axios.get(`http://localhost:5000/posts/${postId}`)
    return post.data.post
  } catch (err) {
    return err.message
  }
}

export async function signIn(userData){
  try {
    const { email, password } = userData
    const response = await axios.post(`http://localhost:5000/auth/signin`, {
      email, password
    })
    if(response.data.success){
      await window.localStorage.setItem('token', response.data.token)
      return response.data.success
    }
  } catch (err) {
    return err.message
  }
}