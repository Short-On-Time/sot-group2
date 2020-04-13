import * as charges from '../controllers/chargesController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
import validateToken from '../utils/auth.js';
const chargesRouter = express.Router();

//logon routes
chargesRouter.post('/charges', charges.charge);
chargesRouter.post('/charges_type', charges.addChargeType);
chargesRouter.post('/change_charges_type', charges.changeChargeType);
chargesRouter.get('/get_charges_type/:type', charges.getChargeType);

export default chargesRouter;
