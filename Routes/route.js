import express, {Router}  from "express";

import {addUser} from '../controller/user-controller.js'


const router=express.Router();


router.post('/add', addUser);


export default router;