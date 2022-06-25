import express from 'express';
const router =express.Router();
import {homecontrolller,aboutController} from '../controller/homeController.js';
// import aboutController from '../controller/aboutController.js'

router.get('/',homecontrolller);
router.get('/about',aboutController);

export default router