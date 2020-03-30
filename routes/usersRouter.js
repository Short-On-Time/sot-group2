import * as users from '../controllers/usersController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
import validateToken from '../utils/auth.js';
const usersRouter = express.Router();

//logon routes
usersRouter.post('/signup', users.signup);
usersRouter.post('/signin', users.signin);

usersRouter.post('/user_premium', users.userPremium);

//product routes
usersRouter.route('/get_product/:name').get(/*validateToken,*/ users.getProduct);
usersRouter.route('/get_product').get(/*validateToken,*/ users.getProductList);

//recipe routes
usersRouter.route('/get_recipe/:name').get(/*validateToken,*/ users.getRecipe);
usersRouter.route('/get_recipe').get(/*validateToken,*/ users.getRecipeList);

//glossary routes
usersRouter.route('/get_glossary/:title').get(/*validateToken,*/ users.getGlossary);
usersRouter.route('/get_glossary').get(/*validateToken,*/ users.getGlossaryList);

//user routes
//usersRouter.get('/view_user', users.viewUserList)
//usersRouter.get('/view_user/:username', users.viewUser);
//usersRouter.route('/view_self').get(validateToken, users.viewSelf);
//usersRouter.route('/edit_self').post(validateToken, users.editSelf);
//usersRouter.route('/delete_self').delete(validateToken, users.deleteSelf);


export default usersRouter;
