import * as admin from '../controllers/adminController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const adminRouter = express.Router();

//product routes
adminRouter.post('/add_product', admin.addProduct);
adminRouter.put('/update_product/:id', admin.updateProduct);
adminRouter.get('/get_product/:id', admin.getProduct);
adminRouter.get('/get_product', admin.getProductList);
adminRouter.delete('/delete_product/:id', admin.deleteProduct);

//recipe routes
adminRouter.post('/add_recipe', admin.addRecipe);
adminRouter.put('/update_recipe/:id', admin.updateRecipe);
adminRouter.get('/get_recipe/:id', admin.getRecipe);
adminRouter.get('/get_recipe', admin.getRecipeList);
adminRouter.delete('/delete_recipe/:id', admin.deleteRecipe);

//glossary routes
adminRouter.post('/add_glossary', admin.addGlossary);
adminRouter.put('/update_glossary/:id', admin.updateGlossary);
adminRouter.get('/get_glossary/:id', admin.getGlossary);
adminRouter.get('/get_glossary', admin.getGlossaryList);
adminRouter.delete('/delete_glossary/:id', admin.deleteGlossary);

//user routes
adminRouter.post('/add_user', admin.addUser);
adminRouter.put('/update_user/:id', admin.updateUser);
adminRouter.get('/get_user/:id', admin.getUser);
adminRouter.get('/get_user', admin.getUserList);
adminRouter.delete('/delete_user/:id', admin.deleteUser);

export default adminRouter;
