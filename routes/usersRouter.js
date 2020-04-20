import * as users from '../controllers/usersController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
import validateToken from '../utils/auth.js';
const usersRouter = express.Router();

//logon routes
usersRouter.post('/signup', users.signup);
usersRouter.post('/signin', users.signin);

usersRouter.post('/user_premium', users.userPremium);

usersRouter.post('/contact', users.contact);

//remedy routes
//will only show the previews
usersRouter.route('/get_remedy_preview/:name').get(/*validateToken,*/ users.getRemedyPreview);
usersRouter.route('/get_remedy_preview').get(/*validateToken,*/ users.getRemedyPreviewList);
//shows ALL the things
usersRouter.route('/get_remedy_full/:name').get(/*validateToken,*/ users.getRemedyFull);
usersRouter.route('/get_remedy_full').get(/*validateToken,*/ users.getRemedyFullList);

//glossary routes
usersRouter.route('/get_glossary/:title').get(/*validateToken,*/ users.getGlossary);
usersRouter.route('/get_glossary').get(/*validateToken,*/ users.getGlossaryList);

//user self-management routes
//usersRouter.route('/view_self').get(/*validateToken,*/ users.viewSelf);
//usersRouter.route('/edit_self').post(/*validateToken,*/ users.editSelf);
//usersRouter.route('/delete_self').delete(/*validateToken,*/ users.deleteSelf);


export default usersRouter;
