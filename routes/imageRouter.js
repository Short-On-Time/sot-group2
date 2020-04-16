import * as image from '../controllers/imageController.js';
import express from 'express';
const imageRouter = express.Router();
import multer from 'multer';
var upload = multer();

//image routes
imageRouter.post('/add_image', upload.single('image'), image.addImage);
imageRouter.get('/get_image/:name', image.getImage);
imageRouter.get('/get_image', image.getImageList);
imageRouter.delete('/delete_image/:name', image.deleteImage);

export default imageRouter;