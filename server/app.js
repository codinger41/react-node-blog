import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import appRouter from './routes/index'
import { productionErrors, developmentErrors } from './handlers/errorhandler'
dotenv.config()
const app = express()

// parse req.body content
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())
// use this express router for all routes
app.use('/', appRouter)

if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(developmentErrors)
}

// production error handler
app.use(productionErrors)


app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Endpoint Does not exist'
  })
})


const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server is running on ${port}`)
  mongoose.Promise = global.Promise
  mongoose.connect(process.env.MONGODB_URL, () => {
    console.log(`Database connection established successfully!`)
  })
})
