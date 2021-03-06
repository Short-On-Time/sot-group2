import * as forum from '../controllers/forumController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
import validateToken from '../utils/auth.js';
const forumRouter = express.Router();

//i ordered it a bit differently to match up with how the docuement works

//there will need to be validation later,
//the user's data will be in 'req.decoded'

//getters
forumRouter.get('/get_post', forum.getPostList); //grabs all the posts
forumRouter.get('/get_post/:id', forum.getPost); //grabs one post (which contains the comments)
forumRouter.get('/get_comment/:post_id/:comment_id', forum.getComment);

//Post functionality
//Post start the conversation
forumRouter.post('/add_post', forum.addPost);
forumRouter.put('/edit_post/:id', forum.editPost);
forumRouter.delete('/delete_post/:id', forum.deletePost);

//comment functionality
//comments reply to the post
forumRouter.post('/add_comment/:post_id', forum.addComment);
forumRouter.put('/edit_comment/:post_id/:comment_id', forum.editComment); //not sure if you can stack them this way...
forumRouter.delete('/delete_comment/:post_id/:comment_id', forum.deleteComment);

//view users
//so you can see them and stuff ig
forumRouter.get('/view_user', forum.viewUserList)
forumRouter.get('/view_user/:id', forum.viewUser);

export default forumRouter;
