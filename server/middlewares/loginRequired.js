import jwt from 'jsonwebtoken'

const isLoggedIn = (req, res, next) => {
  // check header or url parameters or post parameters for token
  const token =
    req.body.token || req.query.token || req.headers['x-access-token']
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(err)
        return res.json({ success: false, message: 'Please Login First.' })
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded
        req.user = decoded
        next()
      }
    })
  } else {
    res.json({
      message: 'Unauthorized!, you have to login first'
    })
  }
}

export default isLoggedIn