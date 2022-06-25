import express from 'express';
const router=express.Router();
import {homecontrolller} from '../controller/homeController.js';

router.get('/',homecontrolller);

export default router