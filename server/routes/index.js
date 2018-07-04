import express from 'express'
import { catchErrors } from '../handlers/errorhandler'
import postsController from '../controllers/blogController'
const appRouter = express.Router()

appRouter.get('/posts', catchErrors(postsController.getAllBlogPosts))
appRouter.post('/posts/new', catchErrors(postsController.addNewPost))
appRouter.get('/posts/:postId', catchErrors(postsController.getPostById))
appRouter.delete('/posts/:postId', catchErrors(postsController.deletePostbyId))
appRouter.put('/posts/:postId/', catchErrors(postsController.editPostById))

export default appRouter