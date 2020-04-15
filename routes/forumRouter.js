import * as forum from '../controllers/forumController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
import validateToken from '../utils/auth.js';
const forumRouter = express.Router();

//i ordered it a bit differently to match up with how the docuement works

//there will need to be validation later,
//the user's data will be in 'req.decoded'

//getters
forumRouter.get('/get_thread', forum.getThreadList); //grabs all the threads
forumRouter.get('/get_thread/:id', forum.getThread); //grabs one thread (which contains the comments)
//maybe get individual comment, like reddit does? not too sure how that would work out

//thread functionality
//threads are the original one
forumRouter.post('/add_thread', forum.addThread);
forumRouter.put('/edit_thread/:id', forum.editThread);
forumRouter.delete('/delete_thread/:id', forum.deleteThread);

//post functionality
//posts are the comments
forumRouter.post('/add_post/:thread_id', forum.addPost);
forumRouter.put('/edit_post/:thread_id/:post_id', forum.editPost); //not sure if you can stack them this way...
forumRouter.delete('/delete_post/:thread_id/:post_id', forum.deleteThread)

export default forumRouter;
