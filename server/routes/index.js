import express from 'express'
import { catchErrors } from '../handlers/errorhandler'
import postsController from '../controllers/blogController'
import authController from '../controllers/authController'
import isLoggedIn from '../middlewares/loginRequired'
const appRouter = express.Router()

appRouter.get('/posts', catchErrors(postsController.getAllBlogPosts))
appRouter.post('/posts/new',isLoggedIn, catchErrors(postsController.addNewPost))
appRouter.get('/posts/:postId', catchErrors(postsController.getPostById))
appRouter.delete('/posts/:postId',isLoggedIn, catchErrors(postsController.deletePostbyId))
appRouter.put('/posts/:postId/',isLoggedIn, catchErrors(postsController.editPostById))

appRouter.post('/auth/signup/', catchErrors(authController.signUp))
appRouter.post('/auth/signin', catchErrors(authController.signIn))

export default appRouter