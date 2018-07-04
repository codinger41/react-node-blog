import Users from '../models/usermodel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

exports.signUp = async (req, res) => {
  let { email, password, blogname, name } = req.body
  if(!req.body){
    res.json({
      message: 'Please fill in all required fields',
      success: false
    })
  }
  req.body.password = bcrypt.hashSync(password.toLowerCase(), 10)
  req.body.email = email.toLowerCase()
  const user = await Users.create(req.body)
  if(user){
    req.body.password = undefined
    const token = await jwt.sign(req.body, process.env.JWT_SECRET)
    res.json({
      message: 'successful!',
      success: true,
      token: token
    })
  }
}

exports.signIn = async (req, res) => {
  const { email, password } = req.body
  const user = await Users.findOne({ email: email.toLowerCase() })
  if(!user){
    res.json({
      success: false,
      message: 'User not found!'
    })
  }
  if (bcrypt.compareSync(password.toLowerCase(), user.password)) {
    req.body.password = undefined
    const token = await jwt.sign(req.body, process.env.JWT_SECRET)
    res.status(200).json({
      token: token,
      message: 'Sign in successful!',
      success: true
    })
  } else {
    res.json({
      message: 'Invalid login details!',
      success: false
    })
  }
}