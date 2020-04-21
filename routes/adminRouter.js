import * as admin from '../controllers/adminController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const adminRouter = express.Router();
import validateAdmin from '../utils/auth_admin.js';

//remedy routes
adminRouter.post('/add_remedy', admin.addRemedy);
adminRouter.put('/update_remedy/:id', admin.updateRemedy);
adminRouter.get('/get_remedy/:id', admin.getRemedy);
adminRouter.get('/get_remedy', admin.getRemedyList);
adminRouter.delete('/delete_remedy/:id', admin.deleteRemedy);
adminRouter.put('/free_trial', admin.free_trial);

//testimonial
adminRouter.post('/add_testimonial', admin.addTestimonial);

//newsletter
adminRouter.post('/add_email_newsleter', admin.addEmailNewsletter);

// home page premium caption
adminRouter.post('/change_premium_caption', admin.changePremiumCaption);
adminRouter.get('/get_premium_caption', admin.getPremiumCaption);

// home page welcome caption
adminRouter.post('/change_welcome_caption', admin.changeWelcomeCaption);
adminRouter.get('/get_welcome_caption', admin.getWelcomeCaption);

// home page disclaimer caption
adminRouter.post('/change_disclaimer_caption', admin.changeDisclaimerCaption);
adminRouter.get('/get_disclaimer_caption', admin.getDisclaimerCaption);

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

//DidYouKnow routes
adminRouter.post('/add_blog', admin.addBlog);

export default adminRouter;
